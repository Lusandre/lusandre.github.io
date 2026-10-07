import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { PortfolioDataService } from '../../services/portfolio-data';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard, TranslatePipe, MatButtonToggleModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected portfolioService = inject(PortfolioDataService);

  filter = signal<'all' | 'featured'>('all');

  filteredProjects = computed(() => {
    const list = this.portfolioService.projects();
    if (this.filter() === 'featured') {
      return list.filter((p) => p.is_featured);
    }
    return list;
  });
}
