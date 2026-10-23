import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Project, DEFAULT_PROJECTS } from '../models/project.model';
import { Technology, DEFAULT_TECHNOLOGIES } from '../models/technology.model';
import { Profile, DEFAULT_PROFILE } from '../models/profile.model';
import { SiteSettings, DEFAULT_SITE_SETTINGS } from '../models/site-settings.model';

const STORAGE_KEYS = {
  SETTINGS: 'portfolio_site_settings_cache',
  PROFILE: 'portfolio_profile_cache',
  SKILLS: 'portfolio_skills_cache',
  PROJECTS: 'portfolio_projects_cache',
};

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined' || !window.localStorage) {
    return fallback;
  }
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, val: T): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch {
    // Ignore storage quota or disabled errors
  }
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private supabaseService = inject(SupabaseService);

  // Reactive Signals for portfolio data initialized with cached/default values so there is NO initial loading flicker!
  profile = signal<Profile | null>(readStorage<Profile | null>(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE));
  skills = signal<Technology[]>(readStorage<Technology[]>(STORAGE_KEYS.SKILLS, DEFAULT_TECHNOLOGIES));
  projects = signal<Project[]>(readStorage<Project[]>(STORAGE_KEYS.PROJECTS, DEFAULT_PROJECTS));
  siteSettings = signal<SiteSettings>(readStorage<SiteSettings>(STORAGE_KEYS.SETTINGS, DEFAULT_SITE_SETTINGS));
  isLoading = signal<boolean>(false);

  constructor() {
    this.refreshAll();
  }

  async refreshAll(): Promise<void> {
    try {
      const [profileData, skillsData, projectsData, settingsData] = await Promise.all([
        this.supabaseService.getProfile(),
        this.supabaseService.getTechnologies(),
        this.supabaseService.getProjects(),
        this.supabaseService.getSiteSettings(),
      ]);

      if (profileData) {
        this.profile.set(profileData);
        writeStorage(STORAGE_KEYS.PROFILE, profileData);
      }
      if (skillsData && skillsData.length > 0) {
        this.skills.set(skillsData);
        writeStorage(STORAGE_KEYS.SKILLS, skillsData);
      }
      if (projectsData && projectsData.length > 0) {
        this.projects.set(projectsData);
        writeStorage(STORAGE_KEYS.PROJECTS, projectsData);
      }
      if (settingsData) {
        this.siteSettings.set(settingsData);
        writeStorage(STORAGE_KEYS.SETTINGS, settingsData);
      }
    } catch (err) {
      console.error('Error loading portfolio data from Supabase:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  updateSettingsLocally(settings: SiteSettings, persistCache = true): void {
    this.siteSettings.set(settings);
    if (persistCache) {
      writeStorage(STORAGE_KEYS.SETTINGS, settings);
    }
  }

  updateProfileLocally(profile: Profile, persistCache = true): void {
    this.profile.set(profile);
    if (persistCache) {
      writeStorage(STORAGE_KEYS.PROFILE, profile);
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
