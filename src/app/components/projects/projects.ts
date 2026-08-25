import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project.model';
import { PortfolioDataService } from '../../services/portfolio-data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // 1. Inyección de dependencias moderna
  private portfolioService = inject(PortfolioDataService);

  // 2. Declaramos los proyectos como una Signal fuertemente tipada
  projects = signal<Project[]>([]);

  ngOnInit(): void {
    // 3. Actualizamos el estado de la Signal usando .set()
    this.projects.set(this.portfolioService.getProjects());
  }
}
