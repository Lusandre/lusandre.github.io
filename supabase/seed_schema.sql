-- 1. Tabla de Perfil / Información Personal
CREATE TABLE IF NOT EXISTS profile (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name TEXT NOT NULL,
  greeting_es TEXT NOT NULL,
  greeting_en TEXT NOT NULL,
  subtitle_es TEXT NOT NULL,
  subtitle_en TEXT NOT NULL,
  bio_es TEXT NOT NULL,
  bio_en TEXT NOT NULL,
  email TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  cv_url TEXT,
  footer_es TEXT,
  footer_en TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de Habilidades y Tecnologías
CREATE TABLE IF NOT EXISTS technologies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  icon_url TEXT,
  category TEXT DEFAULT 'General',
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabla de Proyectos
CREATE TABLE IF NOT EXISTS projects (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_es TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_es TEXT NOT NULL,
  description_en TEXT NOT NULL,
  image_url TEXT,
  icon TEXT DEFAULT 'code',
  github_url TEXT,
  live_url TEXT,
  is_featured BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabla Intermedia Proyecto - Tecnologías
CREATE TABLE IF NOT EXISTS project_technologies (
  project_id BIGINT REFERENCES projects(id) ON DELETE CASCADE,
  technology_id BIGINT REFERENCES technologies(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, technology_id)
);

-- Habilitar Row Level Security (RLS) y Políticas
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_technologies ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública
DROP POLICY IF EXISTS "Lectura pública de perfil" ON profile;
CREATE POLICY "Lectura pública de perfil" ON profile FOR SELECT USING (true);

DROP POLICY IF EXISTS "Lectura pública de tecnologías" ON technologies;
CREATE POLICY "Lectura pública de tecnologías" ON technologies FOR SELECT USING (true);

DROP POLICY IF EXISTS "Lectura pública de proyectos" ON projects;
CREATE POLICY "Lectura pública de proyectos" ON projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Lectura pública de proyecto_tecnologias" ON project_technologies;
CREATE POLICY "Lectura pública de proyecto_tecnologias" ON project_technologies FOR SELECT USING (true);

-- Políticas para usuarios autenticados (Admin CRUD)
DROP POLICY IF EXISTS "Admin perfil" ON profile;
CREATE POLICY "Admin perfil" ON profile FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin tecnologías" ON technologies;
CREATE POLICY "Admin tecnologías" ON technologies FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin proyectos" ON projects;
CREATE POLICY "Admin proyectos" ON projects FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin proyecto_tecnologias" ON project_technologies;
CREATE POLICY "Admin proyecto_tecnologias" ON project_technologies FOR ALL USING (auth.role() = 'authenticated');

-- ==========================================
-- Inserción de Datos Iniciales (Seed Data)
-- ==========================================

-- Limpiar para evitar duplicados en seed inicial
TRUNCATE TABLE project_technologies, projects, technologies, profile RESTART IDENTITY CASCADE;

INSERT INTO profile (
  full_name,
  greeting_es, greeting_en,
  subtitle_es, subtitle_en,
  bio_es, bio_en,
  email, github_url, linkedin_url, cv_url,
  footer_es, footer_en
) VALUES (
  'Lusandre Marcano',
  '¡Hola! Mi nombre es', 'Hello! My name is',
  'Desarrollador Full Stack & Frontend.', 'Full Stack & Frontend Developer.',
  'Especializado en la creación de interfaces web y móviles con Angular e Ionic. Me apasiona construir arquitecturas robustas y escalables, integrando tecnologías como NestJS y bases de datos relacionales para ofrecer soluciones completas y experiencias de usuario impecables.',
  'Specialized in creating web and mobile interfaces with Angular and Ionic. I am passionate about building robust and scalable architectures, integrating technologies like NestJS and relational databases to deliver comprehensive solutions and flawless user experiences.',
  'lusandremarcano@gmail.com',
  'https://github.com/Lusandre',
  'https://linkedin.com/in/lusandre-marcano',
  'Lusandre_marcano_cv.pdf',
  'Diseñado y construido por Lusandre Marcano © 2026', 'Designed and built by Lusandre Marcano © 2026'
);

INSERT INTO technologies (name, icon_url, display_order) VALUES
  ('Angular', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg', 1),
  ('Ionic', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg', 2),
  ('TypeScript', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', 3),
  ('Node.js', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', 4),
  ('NestJS', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg', 5),
  ('PostgreSQL', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', 6),
  ('Supabase', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg', 7),
  ('MongoDB', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', 8),
  ('Electron', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg', 9),
  ('Mapbox API', null, 10),
  ('Google Maps API', null, 11),
  ('HTML/CSS', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', 12);

INSERT INTO projects (slug, title_es, title_en, description_es, description_en, icon, github_url, live_url, is_featured, display_order) VALUES
(
  'logistics-routing',
  'Sistema de Gestión de Rutas Logísticas',
  'Logistics Route Management System',
  'Aplicación web y móvil desarrollada para gestionar itinerarios de conductores de almacén. Integra optimización de rutas mediante mapas, bases de datos relacionales y Edge Functions para asignación en tiempo real.',
  'Web and mobile application developed to manage warehouse driver itineraries. Integrates map-based route optimization, relational databases, and Edge Functions for real-time assignment.',
  'local_shipping',
  'https://github.com/Lusandre',
  null,
  true,
  1
),
(
  'rentapro-desktop',
  'RentAPro Desktop',
  'RentAPro Desktop',
  'Aplicación de escritorio desarrollada para un cliente corporativo, enfocada en la gestión integral de operaciones comerciales. Construida con NestJS y Electron, cuenta con una arquitectura escalable para el manejo de inventario y optimización de procesos internos. Al ser software propietario, el código fuente es confidencial.',
  'Desktop application developed for a corporate client, focused on the comprehensive management of business operations. Built with NestJS and Electron, it features a scalable architecture for inventory management and the optimization of internal processes. As proprietary software, the source code is confidential.',
  'desktop_windows',
  null,
  null,
  true,
  2
),
(
  'wholesale-ecommerce',
  'E-Commerce Mayorista Capilar (Proyecto Privado)',
  'Wholesale Hair Care E-Commerce (Private Project)',
  'Plataforma B2B (Business to Business) diseñada para la distribución y venta al mayor de productos de belleza. Desarrollada con Angular y Node.js, optimizando la experiencia de usuario (UX) para compras por volumen, gestión de catlogos dinámicos y procesamiento de pedidos empresariales.',
  'B2B (Business to Business) platform designed for the distribution and wholesale of beauty products. Developed with Angular and Node.js, optimizing the user experience (UX) for bulk purchases, dynamic catalog management, and enterprise order processing.',
  'shopping_cart',
  null,
  null,
  true,
  3
);

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t
WHERE p.slug = 'logistics-routing' AND t.name IN ('Angular', 'Ionic', 'Supabase', 'Mapbox API');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t
WHERE p.slug = 'rentapro-desktop' AND t.name IN ('Electron', 'NestJS');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t
WHERE p.slug = 'wholesale-ecommerce' AND t.name IN ('Angular', 'Node.js', 'MongoDB');
