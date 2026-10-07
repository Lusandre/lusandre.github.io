import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDataService } from '../../services/portfolio-data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected portfolioService = inject(PortfolioDataService);
  skills = this.portfolioService.skills;
}
