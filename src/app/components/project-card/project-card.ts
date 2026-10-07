import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectLink } from '../../models/project.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { detectLinkInfo, DetectedLinkInfo } from '../../utils/link-detector';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss'],
})
export class ProjectCard {
  project = input.required<Project>();
  protected translate = inject(TranslateService);

  currentImageIndex = signal<number>(0);

  images = computed(() => {
    const p = this.project();
    if (p.images && p.images.length > 0) {
      return p.images;
    }
    if (p.image_url) {
      return [p.image_url];
    }
    return [];
  });

  links = computed<ProjectLink[]>(() => {
    const p = this.project();
    if (p.links && p.links.length > 0) {
      return p.links;
    }
    const fallbackLinks: ProjectLink[] = [];
    if (p.github_url) fallbackLinks.push({ title: 'GitHub', url: p.github_url, type: 'github' });
    if (p.live_url) fallbackLinks.push({ title: 'Demo Web', url: p.live_url, type: 'live' });
    return fallbackLinks;
  });

  title = computed(() => {
    const p = this.project();
    if (!p) return '';
    const lang = this.translate.currentLang;
    const isEn = (typeof lang === 'function' ? (lang as () => string)() : lang) === 'en';
    return isEn ? (p.title_en || p.title_es) : p.title_es;
  });

  description = computed(() => {
    const p = this.project();
    if (!p) return '';
    const lang = this.translate.currentLang;
    const isEn = (typeof lang === 'function' ? (lang as () => string)() : lang) === 'en';
    return isEn ? (p.description_en || p.description_es) : p.description_es;
  });

  prevImage(event: Event) {
    event.stopPropagation();
    const imgs = this.images();
    if (imgs.length > 1) {
      this.currentImageIndex.update((idx) => (idx === 0 ? imgs.length - 1 : idx - 1));
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    const imgs = this.images();
    if (imgs.length > 1) {
      this.currentImageIndex.update((idx) => (idx === imgs.length - 1 ? 0 : idx + 1));
    }
  }

  setImage(idx: number, event: Event) {
    event.stopPropagation();
    this.currentImageIndex.set(idx);
  }

  getLinkDetails(link: ProjectLink): DetectedLinkInfo {
    return detectLinkInfo(link.url);
  }
}
