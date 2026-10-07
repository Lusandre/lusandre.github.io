-- Migración: Personalización de Componentes, Opacidad, Blur, Colores y Botones
ALTER TABLE site_settings
ADD COLUMN IF NOT EXISTS primary_color TEXT DEFAULT '#3b82f6',
ADD COLUMN IF NOT EXISTS primary_dark_color TEXT DEFAULT '#38bdf8',
ADD COLUMN IF NOT EXISTS dark_counterpart_mode TEXT DEFAULT 'auto',
ADD COLUMN IF NOT EXISTS accent_color TEXT DEFAULT '#8b5cf6',
ADD COLUMN IF NOT EXISTS accent_dark_color TEXT DEFAULT '#a855f7',

ADD COLUMN IF NOT EXISTS header_opacity FLOAT DEFAULT 0.75,
ADD COLUMN IF NOT EXISTS header_blur INTEGER DEFAULT 14,
ADD COLUMN IF NOT EXISTS header_bg_light TEXT DEFAULT '#fafaf9',
ADD COLUMN IF NOT EXISTS header_bg_dark TEXT DEFAULT '#0f172a',

ADD COLUMN IF NOT EXISTS skills_opacity FLOAT DEFAULT 0.50,
ADD COLUMN IF NOT EXISTS skills_blur INTEGER DEFAULT 12,
ADD COLUMN IF NOT EXISTS skills_bg_light TEXT DEFAULT '#ffffff',
ADD COLUMN IF NOT EXISTS skills_bg_dark TEXT DEFAULT '#1e293b',

ADD COLUMN IF NOT EXISTS projects_opacity FLOAT DEFAULT 0.92,
ADD COLUMN IF NOT EXISTS projects_blur INTEGER DEFAULT 8,
ADD COLUMN IF NOT EXISTS projects_bg_light TEXT DEFAULT '#ffffff',
ADD COLUMN IF NOT EXISTS projects_bg_dark TEXT DEFAULT '#1e293b',
ADD COLUMN IF NOT EXISTS projects_elevation TEXT DEFAULT 'medium',

ADD COLUMN IF NOT EXISTS footer_opacity FLOAT DEFAULT 0.65,
ADD COLUMN IF NOT EXISTS footer_blur INTEGER DEFAULT 14,
ADD COLUMN IF NOT EXISTS footer_bg_light TEXT DEFAULT '#f5f5f5',
ADD COLUMN IF NOT EXISTS footer_bg_dark TEXT DEFAULT '#0f172a',

ADD COLUMN IF NOT EXISTS button_style TEXT DEFAULT 'glow',
ADD COLUMN IF NOT EXISTS button_radius INTEGER DEFAULT 8;

-- Actualizar la fila única existente con los valores por defecto si son nulos
UPDATE site_settings
SET
  primary_color = COALESCE(primary_color, '#3b82f6'),
  primary_dark_color = COALESCE(primary_dark_color, '#38bdf8'),
  dark_counterpart_mode = COALESCE(dark_counterpart_mode, 'auto'),
  accent_color = COALESCE(accent_color, '#8b5cf6'),
  accent_dark_color = COALESCE(accent_dark_color, '#a855f7'),
  header_opacity = COALESCE(header_opacity, 0.75),
  header_blur = COALESCE(header_blur, 14),
  header_bg_light = COALESCE(header_bg_light, '#fafaf9'),
  header_bg_dark = COALESCE(header_bg_dark, '#0f172a'),
  skills_opacity = COALESCE(skills_opacity, 0.50),
  skills_blur = COALESCE(skills_blur, 12),
  skills_bg_light = COALESCE(skills_bg_light, '#ffffff'),
  skills_bg_dark = COALESCE(skills_bg_dark, '#1e293b'),
  projects_opacity = COALESCE(projects_opacity, 0.92),
  projects_blur = COALESCE(projects_blur, 8),
  projects_bg_light = COALESCE(projects_bg_light, '#ffffff'),
  projects_bg_dark = COALESCE(projects_bg_dark, '#1e293b'),
  projects_elevation = COALESCE(projects_elevation, 'medium'),
  footer_opacity = COALESCE(footer_opacity, 0.65),
  footer_blur = COALESCE(footer_blur, 14),
  footer_bg_light = COALESCE(footer_bg_light, '#f5f5f5'),
  footer_bg_dark = COALESCE(footer_bg_dark, '#0f172a'),
  button_style = COALESCE(button_style, 'glow'),
  button_radius = COALESCE(button_radius, 8)
WHERE id = 1;
