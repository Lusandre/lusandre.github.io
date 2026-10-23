import { Injectable, inject, effect } from '@angular/core';
import { PortfolioDataService } from './portfolio-data';
import { hexToRgba, calculateDarkCounterpart } from '../utils/color-utils';
import { SiteSettings, DEFAULT_SITE_SETTINGS } from '../models/site-settings.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private portfolioData = inject(PortfolioDataService);

  constructor() {
    // Automatically apply CSS variables whenever siteSettings signal changes (live!)
    effect(() => {
      const settings = this.portfolioData.siteSettings();
      this.applyThemeVariables(settings);
    });
  }

  public applyThemeVariables(settings: SiteSettings | null) {
    if (!settings) settings = DEFAULT_SITE_SETTINGS;
    const root = document.documentElement;

    // 1. Brand Colors & Counterparts
    const primaryColor = settings.primary_color || '#0e4caf';
    let primaryDarkColor = settings.primary_dark_color || '#609bfb';
    
    if (settings.dark_counterpart_mode === 'auto') {
      primaryDarkColor = calculateDarkCounterpart(primaryColor);
    }

    const accentColor = settings.accent_color || '#609bfb';
    let accentDarkColor = settings.accent_dark_color || '#70a7ff';
    if (settings.dark_counterpart_mode === 'auto') {
      accentDarkColor = calculateDarkCounterpart(accentColor);
    }

    root.style.setProperty('--brand-primary', primaryColor);
    root.style.setProperty('--brand-primary-dark', primaryDarkColor);
    root.style.setProperty('--brand-accent', accentColor);
    root.style.setProperty('--brand-accent-dark', accentDarkColor);

    // 2. Header
    const headerOpacity = settings.header_opacity ?? 0.1;
    const headerBlur = settings.header_blur ?? 15;
    const headerBgLight = hexToRgba(settings.header_bg_light || '#94cfe6', headerOpacity);
    const headerBgDark = hexToRgba(settings.header_bg_dark || '#1e293b', headerOpacity);

    root.style.setProperty('--header-bg-light', headerBgLight);
    root.style.setProperty('--header-bg-dark', headerBgDark);
    root.style.setProperty('--header-blur', `${headerBlur}px`);

    // 3. Skills Chips
    const skillsOpacity = settings.skills_opacity ?? 0.35;
    const skillsBlur = settings.skills_blur ?? 9;
    const skillsBgLight = hexToRgba(settings.skills_bg_light || '#94cfe6', skillsOpacity);
    const skillsBgDark = hexToRgba(settings.skills_bg_dark || '#1e293b', skillsOpacity);

    root.style.setProperty('--skills-chip-bg-light', skillsBgLight);
    root.style.setProperty('--skills-chip-bg-dark', skillsBgDark);
    root.style.setProperty('--skills-chip-blur', `${skillsBlur}px`);

    // 4. Projects Cards
    const projectsOpacity = settings.projects_opacity ?? 0.35;
    const projectsBlur = settings.projects_blur ?? 9;
    const projectsBgLight = hexToRgba(settings.projects_bg_light || '#94cfe6', projectsOpacity);
    const projectsBgDark = hexToRgba(settings.projects_bg_dark || '#1e293b', projectsOpacity);

    let shadowLight = '0 4px 20px rgba(0, 0, 0, 0.08)';
    let shadowDark = '0 4px 20px rgba(0, 0, 0, 0.35)';
    if (settings.projects_elevation === 'low') {
      shadowLight = '0 2px 8px rgba(0, 0, 0, 0.05)';
      shadowDark = '0 2px 8px rgba(0, 0, 0, 0.2)';
    } else if (settings.projects_elevation === 'high') {
      shadowLight = '0 16px 36px rgba(0, 0, 0, 0.16)';
      shadowDark = '0 16px 36px rgba(0, 0, 0, 0.6)';
    } else if (settings.projects_elevation === 'glow') {
      shadowLight = `0 8px 30px ${hexToRgba(primaryColor, 0.25)}`;
      shadowDark = `0 8px 30px ${hexToRgba(primaryDarkColor, 0.35)}`;
    }

    root.style.setProperty('--projects-card-bg-light', projectsBgLight);
    root.style.setProperty('--projects-card-bg-dark', projectsBgDark);
    root.style.setProperty('--projects-card-blur', `${projectsBlur}px`);
    root.style.setProperty('--projects-card-shadow-light', shadowLight);
    root.style.setProperty('--projects-card-shadow-dark', shadowDark);

    // 5. Footer
    const footerOpacity = settings.footer_opacity ?? 0.65;
    const footerBlur = settings.footer_blur ?? 14;
    const footerBgLight = hexToRgba(settings.footer_bg_light || '#94cfe6', footerOpacity);
    const footerBgDark = hexToRgba(settings.footer_bg_dark || '#1e293b', footerOpacity);

    root.style.setProperty('--footer-bg-light', footerBgLight);
    root.style.setProperty('--footer-bg-dark', footerBgDark);
    root.style.setProperty('--footer-blur', `${footerBlur}px`);

    // 6. Buttons
    const btnRadius = settings.button_radius ?? 8;
    root.style.setProperty('--btn-border-radius', `${btnRadius}px`);
    root.style.setProperty('--btn-glow-light', hexToRgba(primaryColor, 0.4));
    root.style.setProperty('--btn-glow-dark', hexToRgba(primaryDarkColor, 0.5));
    root.style.setProperty('--btn-accent-glow-light', hexToRgba(accentColor, 0.45));
    root.style.setProperty('--btn-accent-glow-dark', hexToRgba(accentDarkColor, 0.55));
  }
}
