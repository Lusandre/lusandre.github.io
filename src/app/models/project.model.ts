// src/app/models/project.model.ts
export interface Project {
  id: number;
  title: string;
  technologies: string;
  description: string;
  tags: string[];
  icon: string;
  repoUrl?: string;
  liveUrl?: string;
}
