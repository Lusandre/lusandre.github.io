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

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'logistics-routing',
    title_es: 'Sistema de Gestión de Rutas Logísticas',
    title_en: 'Logistics Route Management System',
    description_es: 'Aplicación web y móvil desarrollada para gestionar itinerarios de conductores de almacén. Integra optimización de rutas mediante mapas, bases de datos relacionales y Edge Functions para asignación en tiempo real.',
    description_en: 'Web and mobile application developed to manage warehouse driver itineraries. Integrates map-based route optimization, relational databases, and Edge Functions for real-time assignment.',
    image_url: 'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335886351_5_png.png',
    icon: 'local_shipping',
    github_url: 'https://github.com/alex-quijada/proyecto-tesis',
    live_url: 'https://proyecto-tesis-udone.netlify.app/landing',
    is_featured: true,
    display_order: 1,
    images: [
      'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335886351_5_png.png',
      'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335509295_1_png.png',
      'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335882954_2_png.png',
      'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335884308_3_png.png',
      'https://isagsykseeyemjuhxpby.supabase.co/storage/v1/object/public/project-media/uploads/1791335885194_4_png.png',
    ],
    links: [
      {
        url: 'https://github.com/alex-quijada/proyecto-tesis',
        type: 'github',
        title: 'GitHub',
      },
      {
        url: 'https://proyecto-tesis-udone.netlify.app/landing',
        type: 'live',
        title: 'Demo Web',
      },
      {
        url: 'https://youtu.be/c5ldVPjzI0U',
        type: 'youtube',
        title: 'Video Explicativo',
      },
    ],
    technologies: [
      {
        id: 1,
        name: 'Angular',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
        display_order: 1,
      },
      {
        id: 2,
        name: 'Ionic',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg',
        display_order: 2,
      },
      {
        id: 7,
        name: 'Supabase',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
        display_order: 7,
      },
      {
        id: 11,
        name: 'Google Maps API',
        category: 'General',
        icon_url: null,
        display_order: 11,
      },
    ],
  },
  {
    id: 2,
    slug: 'rentapro-desktop',
    title_es: 'RentAPro Desktop',
    title_en: 'RentAPro Desktop',
    description_es: 'Aplicación de escritorio desarrollada para un cliente corporativo, enfocada en la gestión integral de operaciones comerciales. Construida con NestJS y Electron, cuenta con una arquitectura escalable para el manejo de inventario y optimización de procesos internos. Al ser software propietario, el código fuente es confidencial.',
    description_en: 'Desktop application developed for a corporate client, focused on the comprehensive management of business operations. Built with NestJS and Electron, it features a scalable architecture for inventory management and the optimization of internal processes. As proprietary software, the source code is confidential.',
    image_url: null,
    icon: 'desktop_windows',
    github_url: null,
    live_url: null,
    is_featured: false,
    display_order: 2,
    images: [],
    links: [],
    technologies: [
      {
        id: 5,
        name: 'NestJS',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
        display_order: 5,
      },
      {
        id: 9,
        name: 'Electron',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg',
        display_order: 9,
      },
    ],
  },
  {
    id: 3,
    slug: 'wholesale-ecommerce',
    title_es: 'E-Commerce Mayorista Capilar (Proyecto Privado)',
    title_en: 'Wholesale Hair Care E-Commerce (Private Project)',
    description_es: 'Plataforma B2B (Business to Business) diseñada para la distribución y venta al mayor de productos de belleza. Desarrollada con Angular y Node.js, optimizando la experiencia de usuario (UX) para compras por volumen, gestión de catálogos dinámicos y procesamiento de pedidos empresariales.',
    description_en: 'B2B (Business to Business) platform designed for the distribution and wholesale of beauty products. Developed with Angular and Node.js, optimizing the user experience (UX) for bulk purchases, dynamic catalog management, and enterprise order processing.',
    image_url: null,
    icon: 'shopping_cart',
    github_url: null,
    live_url: null,
    is_featured: false,
    display_order: 3,
    images: [],
    links: [],
    technologies: [
      {
        id: 1,
        name: 'Angular',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
        display_order: 1,
      },
      {
        id: 4,
        name: 'Node.js',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        display_order: 4,
      },
      {
        id: 8,
        name: 'MongoDB',
        category: 'General',
        icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
        display_order: 8,
      },
    ],
  },
];
