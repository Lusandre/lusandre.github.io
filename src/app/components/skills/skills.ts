import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioDataService } from '../../services/portfolio-data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatChipsModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: string[] = [];
  private portfolioService = inject(PortfolioDataService);

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }
}
