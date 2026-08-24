import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project.model';
import { PortfolioDataService } from '../../services/portfolio-data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [];

  // Inyección de dependencias moderna en Angular
  private portfolioService = inject(PortfolioDataService);

  ngOnInit(): void {
    // Obtenemos los proyectos al iniciar el componente
    this.projects = this.portfolioService.getProjects();
  }
}
