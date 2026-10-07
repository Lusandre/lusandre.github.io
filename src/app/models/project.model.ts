import { Technology } from './technology.model';

export interface ProjectLink {
  title?: string;
  url: string;
  type?: 'github' | 'youtube' | 'live' | 'figma' | 'docs' | 'gitlab' | 'linkedin' | 'npm' | 'appstore' | 'other';
}

export interface Project {
  id?: number;
  slug: string;
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  image_url?: string | null;
  images?: string[];
  links?: ProjectLink[];
  icon?: string;
  github_url?: string | null;
  live_url?: string | null;
  is_featured: boolean;
  display_order?: number;
  created_at?: string;
  technologies?: Technology[];
}
