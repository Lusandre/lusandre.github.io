export interface Profile {
  id?: number;
  full_name: string;
  greeting_es: string;
  greeting_en: string;
  subtitle_es: string;
  subtitle_en: string;
  bio_es: string;
  bio_en: string;
  email: string;
  github_url: string;
  linkedin_url: string;
  cv_url: string;
  footer_es?: string;
  footer_en?: string;
  created_at?: string;
}
