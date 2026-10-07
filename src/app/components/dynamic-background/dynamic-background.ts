import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data';
import { ParticleBackground } from '../particle-background/particle-background';
import { FluidBackground } from '../fluid-background/fluid-background';

@Component({
  selector: 'app-dynamic-background',
  standalone: true,
  imports: [CommonModule, ParticleBackground, FluidBackground],
  template: `
    @if (siteSettings().active_background === 'particle-love') {
      <app-particle-background [settings]="siteSettings()"></app-particle-background>
    } @else if (siteSettings().active_background === 'fluid-waves') {
      <app-fluid-background></app-fluid-background>
    }
  `,
})
export class DynamicBackground {
  protected portfolioData = inject(PortfolioDataService);
  siteSettings = this.portfolioData.siteSettings;
}
