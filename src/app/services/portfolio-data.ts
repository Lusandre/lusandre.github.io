import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Project } from '../models/project.model';
import { Technology } from '../models/technology.model';
import { Profile } from '../models/profile.model';
import { SiteSettings, DEFAULT_SITE_SETTINGS } from '../models/site-settings.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private supabaseService = inject(SupabaseService);

  // Reactive Signals for portfolio data
  profile = signal<Profile | null>(null);
  skills = signal<Technology[]>([]);
  projects = signal<Project[]>([]);
  siteSettings = signal<SiteSettings>(DEFAULT_SITE_SETTINGS);
  isLoading = signal<boolean>(true);

  constructor() {
    this.refreshAll();
  }

  async refreshAll(): Promise<void> {
    this.isLoading.set(true);
    try {
      const [profileData, skillsData, projectsData, settingsData] = await Promise.all([
        this.supabaseService.getProfile(),
        this.supabaseService.getTechnologies(),
        this.supabaseService.getProjects(),
        this.supabaseService.getSiteSettings(),
      ]);

      if (profileData) this.profile.set(profileData);
      if (skillsData) this.skills.set(skillsData);
      if (projectsData) this.projects.set(projectsData);
      if (settingsData) this.siteSettings.set(settingsData);
    } catch (err) {
      console.error('Error loading portfolio data from Supabase:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  getProjectsSignal() {
    return this.projects;
  }

  getSkillsSignal() {
    return this.skills;
  }

  getProfileSignal() {
    return this.profile;
  }

  getSiteSettingsSignal() {
    return this.siteSettings;
  }
}
