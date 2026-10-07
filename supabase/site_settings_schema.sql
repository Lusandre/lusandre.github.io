-- Crear tabla para la configuración dinámica del sitio y fondo
CREATE TABLE IF NOT EXISTS site_settings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  active_background TEXT DEFAULT 'particle-love',
  particle_preset TEXT DEFAULT 'heart',
  particle_count INT DEFAULT 2500,
  particle_size FLOAT DEFAULT 2.5,
  particle_speed FLOAT DEFAULT 1.0,
  interaction_mode TEXT DEFAULT 'repel',
  color_preset TEXT DEFAULT 'system',
  glass_intensity FLOAT DEFAULT 0.6,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Lectura pública de site_settings" ON site_settings;
CREATE POLICY "Lectura pública de site_settings" ON site_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin site_settings" ON site_settings;
CREATE POLICY "Admin site_settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');

-- Insertar configuración inicial si está vacía
INSERT INTO site_settings (id, active_background, particle_preset, particle_count, particle_size, particle_speed, interaction_mode, color_preset, glass_intensity)
OVERRIDING SYSTEM VALUE
VALUES (1, 'particle-love', 'heart', 2500, 2.5, 1.0, 'repel', 'system', 0.6)
ON CONFLICT (id) DO NOTHING;
