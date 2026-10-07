-- Actualizar tabla site_settings con todas las configuraciones avanzadas de Particle Love
ALTER TABLE site_settings
ADD COLUMN IF NOT EXISTS die_speed FLOAT DEFAULT 1.0,
ADD COLUMN IF NOT EXISTS particle_radius FLOAT DEFAULT 1.0,
ADD COLUMN IF NOT EXISTS attraction_force FLOAT DEFAULT 1.0,
ADD COLUMN IF NOT EXISTS mouse_force FLOAT DEFAULT 1.5,
ADD COLUMN IF NOT EXISTS blending_mode TEXT DEFAULT 'additive',
ADD COLUMN IF NOT EXISTS texture_shape TEXT DEFAULT 'glow_circle',
ADD COLUMN IF NOT EXISTS particle_opacity FLOAT DEFAULT 0.85,
ADD COLUMN IF NOT EXISTS bloom_glow BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS motion_trail BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS turbulence_noise FLOAT DEFAULT 0.5;

-- Actualizar fila inicial
UPDATE site_settings
SET 
  active_background = COALESCE(active_background, 'particle-love'),
  particle_preset = COALESCE(particle_preset, 'heart'),
  particle_count = COALESCE(particle_count, 2500),
  particle_size = COALESCE(particle_size, 2.5),
  particle_speed = COALESCE(particle_speed, 1.0),
  interaction_mode = COALESCE(interaction_mode, 'repel'),
  color_preset = COALESCE(color_preset, 'system'),
  die_speed = COALESCE(die_speed, 1.0),
  particle_radius = COALESCE(particle_radius, 1.0),
  attraction_force = COALESCE(attraction_force, 1.0),
  mouse_force = COALESCE(mouse_force, 1.5),
  blending_mode = COALESCE(blending_mode, 'additive'),
  texture_shape = COALESCE(texture_shape, 'glow_circle'),
  particle_opacity = COALESCE(particle_opacity, 0.85),
  bloom_glow = COALESCE(bloom_glow, true),
  motion_trail = COALESCE(motion_trail, true),
  turbulence_noise = COALESCE(turbulence_noise, 0.5)
WHERE id = 1;
