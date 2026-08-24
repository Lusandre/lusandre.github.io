// src/app/models/project.model.ts
export interface Project {
  id: number;
  title: string;
  technologies: string;
  description: string;
  tags: string[];
  icon: string; // Para usar íconos de Material (ej: 'local_shipping')
  repoUrl?: string;
  liveUrl?: string;
}
