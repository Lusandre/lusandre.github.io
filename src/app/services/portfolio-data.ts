import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  constructor() {}

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'PROJECTS.LOGISTICS.TITLE',
        description: 'PROJECTS.LOGISTICS.DESC',
        technologies: 'Angular, Ionic, Supabase, Mapbox API',
        tags: ['Angular 21', 'Mobile', 'Routing'],
        repoUrl: 'https://github.com/Lusandre/...',
        icon: 'local_shipping',
      },
      {
        id: 2,
        title: 'PROJECTS.RENTAPRO.TITLE',
        description: 'PROJECTS.RENTAPRO.DESC',
        technologies: 'Electron, NestJS',
        tags: ['Desktop', 'Backend'],
        repoUrl: 'https://github.com/Lusandre/...',
        icon: 'desktop_windows',
      },
      {
        id: 3,
        title: 'Plataforma e-Commerce Mayorista',
        technologies: 'Angular | Node.js | MongoDB',
        description:
          'Portal de ventas B2B especializado en productos capilares. Incluye gestión de inventario, carrito de compras personalizado y autenticación de usuarios, con una interfaz limpia enfocada en compradores mayoristas.',
        tags: ['Angular', 'Node.js', 'MongoDB', 'Express'],
        icon: 'shopping_cart',
        repoUrl: 'https://github.com/Lusandre',
      },
    ];
  }

  getSkills(): string[] {
    return [
      'Angular',
      'Ionic',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Electron',
      'Mapbox API',
      'Google Maps API',
      'HTML/CSS',
    ];
  }
}
