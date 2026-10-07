-- 1. Crear el bucket público para almacenamiento de imágenes si no existe
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-media', 'project-media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Políticas de seguridad para el Storage (project-media)
DROP POLICY IF EXISTS "Lectura pública de archivos" ON storage.objects;
CREATE POLICY "Lectura pública de archivos"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-media');

DROP POLICY IF EXISTS "Subida de archivos por usuarios autenticados" ON storage.objects;
CREATE POLICY "Subida de archivos por usuarios autenticados"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-media' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Actualización de archivos por usuarios autenticados" ON storage.objects;
CREATE POLICY "Actualización de archivos por usuarios autenticados"
ON storage.objects FOR UPDATE
USING (bucket_id = 'project-media' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Eliminación de archivos por usuarios autenticados" ON storage.objects;
CREATE POLICY "Eliminación de archivos por usuarios autenticados"
ON storage.objects FOR DELETE
USING (bucket_id = 'project-media' AND auth.role() = 'authenticated');

-- 2. Agregar columnas `images` y `links` a la tabla `projects` si no existen
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS links JSONB DEFAULT '[]'::jsonb;

-- 3. Migrar enlaces existentes a la columna `links` si están vacíos
UPDATE projects
SET links = jsonb_build_array(
  jsonb_build_object('title', 'GitHub', 'url', github_url, 'type', 'github')
)
WHERE (links IS NULL OR links = '[]'::jsonb) AND github_url IS NOT NULL AND github_url != '';

UPDATE projects
SET links = links || jsonb_build_array(
  jsonb_build_object('title', 'Demo Web', 'url', live_url, 'type', 'live')
)
WHERE live_url IS NOT NULL AND live_url != '';
