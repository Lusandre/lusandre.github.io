export interface SiteSettings {
  id?: number;
  active_background: 'particle-love' | 'fluid-waves' | 'none';
  
  // 🎮 Simulator (7 options)
  particle_preset: 'heart' | 'galaxy' | 'torus' | 'sphere' | 'helix' | 'cube' | 'wave';
  particle_count: number;
  particle_speed: number;
  die_speed: number;
  particle_radius: number;
  attraction_force: number;
  interaction_mode: 'repel' | 'attract' | 'orbit' | 'wave';
  mouse_force: number;

  // 🎨 Rendering (5 options)
  blending_mode: 'additive' | 'normal' | 'screen';
  texture_shape: 'glow_circle' | 'sparkle' | 'ring' | 'diamond';
  particle_size: number;
  particle_opacity: number;
  color_preset: 'system' | 'neon-cyan' | 'purple-pink' | 'golden' | 'aurora' | 'white-diamond';

  // ✨ Post-Processing
  bloom_glow: boolean;
  motion_trail: boolean;
  turbulence_noise: number;

  // 🎨 Color Palette & Themes
  primary_color: string;
  primary_dark_color: string;
  dark_counterpart_mode: 'auto' | 'custom';
  accent_color: string;
  accent_dark_color: string;

  // 🎛️ Component Transparency & Blur
  header_opacity: number;
  header_blur: number;
  header_bg_light: string;
  header_bg_dark: string;

  skills_opacity: number;
  skills_blur: number;
  skills_bg_light: string;
  skills_bg_dark: string;

  projects_opacity: number;
  projects_blur: number;
  projects_bg_light: string;
  projects_bg_dark: string;
  projects_elevation: 'low' | 'medium' | 'high' | 'glow';

  footer_opacity: number;
  footer_blur: number;
  footer_bg_light: string;
  footer_bg_dark: string;

  // 🔘 Button Styles & Effects
  button_style: 'glow' | 'glass' | 'gradient' | 'classic';
  button_radius: number;

  glass_intensity?: number;
  updated_at?: string;
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  active_background: 'particle-love',
  particle_preset: 'sphere',
  particle_count: 5000,
  particle_speed: 0.2,
  die_speed: 1.0,
  particle_radius: 2.4,
  attraction_force: 2.5,
  interaction_mode: 'repel',
  mouse_force: 1.3,
  blending_mode: 'additive',
  texture_shape: 'glow_circle',
  particle_size: 2.6,
  particle_opacity: 0.3,
  color_preset: 'aurora',
  bloom_glow: true,
  motion_trail: true,
  turbulence_noise: 2.0,
  glass_intensity: 0.6,

  // Theme & Component Customization defaults
  primary_color: '#0e4caf',
  primary_dark_color: '#609bfb',
  dark_counterpart_mode: 'auto',
  accent_color: '#609bfb',
  accent_dark_color: '#70a7ff',

  header_opacity: 0.1,
  header_blur: 15,
  header_bg_light: '#94cfe6',
  header_bg_dark: '#1e293b',

  skills_opacity: 0.35,
  skills_blur: 9,
  skills_bg_light: '#94cfe6',
  skills_bg_dark: '#1e293b',

  projects_opacity: 0.35,
  projects_blur: 9,
  projects_bg_light: '#94cfe6',
  projects_bg_dark: '#1e293b',
  projects_elevation: 'medium',

  footer_opacity: 0.65,
  footer_blur: 14,
  footer_bg_light: '#94cfe6',
  footer_bg_dark: '#1e293b',

  button_style: 'glow',
  button_radius: 8,
};
