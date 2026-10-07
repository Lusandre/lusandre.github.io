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
  particle_preset: 'heart',
  particle_count: 2500,
  particle_speed: 1.0,
  die_speed: 1.0,
  particle_radius: 1.0,
  attraction_force: 1.0,
  interaction_mode: 'repel',
  mouse_force: 1.5,
  blending_mode: 'additive',
  texture_shape: 'glow_circle',
  particle_size: 2.8,
  particle_opacity: 0.85,
  color_preset: 'system',
  bloom_glow: true,
  motion_trail: true,
  turbulence_noise: 0.5,
  glass_intensity: 0.6,

  // Theme & Component Customization defaults
  primary_color: '#3b82f6',
  primary_dark_color: '#38bdf8',
  dark_counterpart_mode: 'auto',
  accent_color: '#8b5cf6',
  accent_dark_color: '#a855f7',

  header_opacity: 0.75,
  header_blur: 14,
  header_bg_light: '#fafaf9',
  header_bg_dark: '#0f172a',

  skills_opacity: 0.50,
  skills_blur: 12,
  skills_bg_light: '#ffffff',
  skills_bg_dark: '#1e293b',

  projects_opacity: 0.92,
  projects_blur: 8,
  projects_bg_light: '#ffffff',
  projects_bg_dark: '#1e293b',
  projects_elevation: 'medium',

  footer_opacity: 0.65,
  footer_blur: 14,
  footer_bg_light: '#f5f5f5',
  footer_bg_dark: '#0f172a',

  button_style: 'glow',
  button_radius: 8,
};
