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
        title: 'Sistema Logístico y Gestión de Rutas',
        technologies: 'Angular | Ionic | Supabase | Mapbox API',
        description:
          'Plataforma web y móvil para optimización de rutas de entrega. Implementa un estricto control de incidencias, bloqueando que un viaje se marque como completado si tiene al menos una guía pendiente o si el conductor regresó con productos dañados que no se resolvieron durante la ruta.',
        tags: ['Angular', 'Ionic', 'Supabase', 'Edge Functions', 'PostGIS'],
        icon: 'local_shipping',
        repoUrl: 'https://github.com/Lusandre',
      },
      {
        id: 2,
        title: 'RentAPro - Administrador de Viáticos',
        technologies: 'Angular | NestJS | PostgreSQL | Electron',
        description:
          'Aplicación de escritorio offline-first y web para la gestión financiera. Sincroniza una base de datos local SQLite con PostgreSQL. Integra Google Maps API para registrar rutas y duración de viajes de empleados de múltiples empresas.',
        tags: ['Angular', 'Electron', 'NestJS', 'PostgreSQL', 'SQLite'],
        icon: 'account_balance_wallet',
        repoUrl: 'https://github.com/Lusandre',
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
