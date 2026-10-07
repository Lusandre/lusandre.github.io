import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PortfolioDataService } from '../../services/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected portfolioData = inject(PortfolioDataService);
  protected translate = inject(TranslateService);

  profile = this.portfolioData.profile;

  greeting = computed(() => {
    const p = this.profile();
    if (!p) return null;
    const lang = this.translate.currentLang;
    return (typeof lang === 'function' ? (lang as () => string)() : lang) === 'en'
      ? p.greeting_en
      : p.greeting_es;
  });

  subtitle = computed(() => {
    const p = this.profile();
    if (!p) return null;
    const lang = this.translate.currentLang;
    return (typeof lang === 'function' ? (lang as () => string)() : lang) === 'en'
      ? p.subtitle_en
      : p.subtitle_es;
  });

  bio = computed(() => {
    const p = this.profile();
    if (!p) return null;
    const lang = this.translate.currentLang;
    return (typeof lang === 'function' ? (lang as () => string)() : lang) === 'en'
      ? p.bio_en
      : p.bio_es;
  });
}
