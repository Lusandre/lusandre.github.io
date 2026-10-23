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

export const DEFAULT_PROFILE: Profile = {
  id: 1,
  full_name: 'Lusandre Marcano',
  greeting_es: '¡Hola! Mi nombre es',
  greeting_en: 'Hello! My name is',
  subtitle_es: 'Desarrollador Full Stack & Frontend.',
  subtitle_en: 'Full Stack & Frontend Developer.',
  bio_es: 'Especializado en la creación de interfaces web y móviles con Angular e Ionic. Me apasiona construir arquitecturas robustas y escalables, integrando tecnologías como NestJS y bases de datos relacionales para ofrecer soluciones completas y experiencias de usuario impecables.',
  bio_en: 'Specialized in creating web and mobile interfaces with Angular and Ionic. I am passionate about building robust and scalable architectures, integrating technologies like NestJS and relational databases to deliver comprehensive solutions and flawless user experiences.',
  email: 'lusandremarcano@gmail.com',
  github_url: 'https://github.com/Lusandre',
  linkedin_url: 'https://linkedin.com/in/lusandre-marcano',
  cv_url: 'Lusandre_marcano_cv.pdf',
  footer_es: 'Diseñado y construido por Lusandre Marcano © 2026',
  footer_en: 'Designed and built by Lusandre Marcano © 2026',
};
