export interface Technology {
  id?: number;
  name: string;
  icon_url?: string | null;
  category?: string;
  display_order?: number;
  created_at?: string;
}

export const DEFAULT_TECHNOLOGIES: Technology[] = [
  {
    id: 1,
    name: 'Angular',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
    category: 'General',
    display_order: 1,
  },
  {
    id: 2,
    name: 'Ionic',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg',
    category: 'General',
    display_order: 2,
  },
  {
    id: 3,
    name: 'TypeScript',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    category: 'General',
    display_order: 3,
  },
  {
    id: 4,
    name: 'Node.js',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    category: 'General',
    display_order: 4,
  },
  {
    id: 5,
    name: 'NestJS',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
    category: 'General',
    display_order: 5,
  },
  {
    id: 6,
    name: 'PostgreSQL',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    category: 'General',
    display_order: 6,
  },
  {
    id: 7,
    name: 'Supabase',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
    category: 'General',
    display_order: 7,
  },
  {
    id: 8,
    name: 'MongoDB',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    category: 'General',
    display_order: 8,
  },
  {
    id: 9,
    name: 'Electron',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg',
    category: 'General',
    display_order: 9,
  },
  {
    id: 10,
    name: 'Mapbox API',
    icon_url: null,
    category: 'General',
    display_order: 10,
  },
  {
    id: 11,
    name: 'Google Maps API',
    icon_url: null,
    category: 'General',
    display_order: 11,
  },
  {
    id: 12,
    name: 'HTML/CSS',
    icon_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    category: 'General',
    display_order: 12,
  },
];
