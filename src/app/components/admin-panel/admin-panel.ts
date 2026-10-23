import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SupabaseService } from '../../services/supabase.service';
import { PortfolioDataService } from '../../services/portfolio-data';
import { Project, ProjectLink } from '../../models/project.model';
import { Technology } from '../../models/technology.model';
import { Profile } from '../../models/profile.model';
import { SiteSettings, DEFAULT_SITE_SETTINGS } from '../../models/site-settings.model';
import { detectLinkInfo, DetectedLinkInfo } from '../../utils/link-detector';
import { calculateDarkCounterpart } from '../../utils/color-utils';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel {
  protected supabaseService = inject(SupabaseService);
  protected portfolioData = inject(PortfolioDataService);

  isOpen = signal<boolean>(false);
  activeTab = signal<'projects' | 'skills' | 'profile' | 'background'>('projects');
  isBusy = signal<boolean>(false);
  isUploading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  // Login form
  loginEmail = 'lusandreportafolio@gmail.com';
  loginPassword = '';

  // Project Editing State
  isEditingProject = signal<boolean>(false);
  editingProject: Partial<Project> = {};
  selectedTechIds: number[] = [];
  projectImages: string[] = [];
  projectLinks: ProjectLink[] = [];
  manualImageUrl = '';

  // Technology Editing State
  isEditingTech = signal<boolean>(false);
  editingTech: Partial<Technology> = {};

  // Profile Form State
  profileForm: Partial<Profile> = {};

  // Background / Theme Settings Form State
  settingsForm: SiteSettings = { ...DEFAULT_SITE_SETTINGS };

  toggleOpen() {
    this.isOpen.update((v) => !v);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    if (this.isOpen() && this.supabaseService.isAuthenticated()) {
      this.initForms();
    }
  }

  async login() {
    this.isBusy.set(true);
    this.errorMessage.set(null);
    const res = await this.supabaseService.signIn(this.loginEmail, this.loginPassword);
    this.isBusy.set(false);
    if (res.error) {
      this.errorMessage.set(`Error de acceso: ${res.error}`);
    } else {
      this.initForms();
      this.portfolioData.refreshAll();
    }
  }

  async logout() {
    await this.supabaseService.signOut();
    this.isOpen.set(false);
  }

  initForms() {
    const currentProfile = this.portfolioData.profile();
    if (currentProfile) {
      this.profileForm = { ...currentProfile };
    }
    const currentSettings = this.portfolioData.siteSettings();
    if (currentSettings) {
      this.settingsForm = { ...currentSettings };
    }
  }

  // Live preview when any setting is adjusted
  onSettingsLiveChange() {
    this.portfolioData.siteSettings.set({ ...this.settingsForm });
  }

  onPrimaryColorChange() {
    if (this.settingsForm.dark_counterpart_mode === 'auto') {
      this.settingsForm.primary_dark_color = calculateDarkCounterpart(this.settingsForm.primary_color);
    }
    this.onSettingsLiveChange();
  }

  onAccentColorChange() {
    if (this.settingsForm.dark_counterpart_mode === 'auto') {
      this.settingsForm.accent_dark_color = calculateDarkCounterpart(this.settingsForm.accent_color);
    }
    this.onSettingsLiveChange();
  }

  onCounterpartModeChange() {
    if (this.settingsForm.dark_counterpart_mode === 'auto') {
      this.settingsForm.primary_dark_color = calculateDarkCounterpart(this.settingsForm.primary_color);
      this.settingsForm.accent_dark_color = calculateDarkCounterpart(this.settingsForm.accent_color);
    }
    this.onSettingsLiveChange();
  }

  applyColorPreset(primary: string, accent: string) {
    this.settingsForm.primary_color = primary;
    this.settingsForm.accent_color = accent;
    this.settingsForm.primary_dark_color = calculateDarkCounterpart(primary);
    this.settingsForm.accent_dark_color = calculateDarkCounterpart(accent);
    this.onSettingsLiveChange();
  }

  resetThemeDefaults() {
    this.settingsForm.primary_color = DEFAULT_SITE_SETTINGS.primary_color;
    this.settingsForm.primary_dark_color = DEFAULT_SITE_SETTINGS.primary_dark_color;
    this.settingsForm.dark_counterpart_mode = 'auto';
    this.settingsForm.accent_color = DEFAULT_SITE_SETTINGS.accent_color;
    this.settingsForm.accent_dark_color = DEFAULT_SITE_SETTINGS.accent_dark_color;

    this.settingsForm.header_opacity = DEFAULT_SITE_SETTINGS.header_opacity;
    this.settingsForm.header_blur = DEFAULT_SITE_SETTINGS.header_blur;
    this.settingsForm.header_bg_light = DEFAULT_SITE_SETTINGS.header_bg_light;
    this.settingsForm.header_bg_dark = DEFAULT_SITE_SETTINGS.header_bg_dark;

    this.settingsForm.skills_opacity = DEFAULT_SITE_SETTINGS.skills_opacity;
    this.settingsForm.skills_blur = DEFAULT_SITE_SETTINGS.skills_blur;
    this.settingsForm.skills_bg_light = DEFAULT_SITE_SETTINGS.skills_bg_light;
    this.settingsForm.skills_bg_dark = DEFAULT_SITE_SETTINGS.skills_bg_dark;

    this.settingsForm.projects_opacity = DEFAULT_SITE_SETTINGS.projects_opacity;
    this.settingsForm.projects_blur = DEFAULT_SITE_SETTINGS.projects_blur;
    this.settingsForm.projects_bg_light = DEFAULT_SITE_SETTINGS.projects_bg_light;
    this.settingsForm.projects_bg_dark = DEFAULT_SITE_SETTINGS.projects_bg_dark;
    this.settingsForm.projects_elevation = DEFAULT_SITE_SETTINGS.projects_elevation;

    this.settingsForm.footer_opacity = DEFAULT_SITE_SETTINGS.footer_opacity;
    this.settingsForm.footer_blur = DEFAULT_SITE_SETTINGS.footer_blur;
    this.settingsForm.footer_bg_light = DEFAULT_SITE_SETTINGS.footer_bg_light;
    this.settingsForm.footer_bg_dark = DEFAULT_SITE_SETTINGS.footer_bg_dark;

    this.settingsForm.button_style = DEFAULT_SITE_SETTINGS.button_style;
    this.settingsForm.button_radius = DEFAULT_SITE_SETTINGS.button_radius;

    this.onSettingsLiveChange();
  }

  // ==========================================
  // Proyectos
  // ==========================================
  startNewProject() {
    this.editingProject = {
      slug: '',
      title_es: '',
      title_en: '',
      description_es: '',
      description_en: '',
      image_url: '',
      icon: 'code',
      is_featured: true,
      display_order: (this.portfolioData.projects().length || 0) + 1,
    };
    this.selectedTechIds = [];
    this.projectImages = [];
    this.projectLinks = [{ title: 'GitHub', url: '', type: 'github' }];
    this.manualImageUrl = '';
    this.isEditingProject.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }

  editProject(p: Project) {
    this.editingProject = { ...p };
    this.selectedTechIds = (p.technologies ?? []).map((t) => t.id!).filter(Boolean);
    this.projectImages = Array.isArray(p.images) ? [...p.images] : (p.image_url ? [p.image_url] : []);
    this.projectLinks = Array.isArray(p.links) && p.links.length > 0 ? [...p.links] : [];

    if (this.projectLinks.length === 0) {
      if (p.github_url) this.projectLinks.push({ title: 'GitHub', url: p.github_url, type: 'github' });
      if (p.live_url) this.projectLinks.push({ title: 'Demo Web', url: p.live_url, type: 'live' });
    }

    this.manualImageUrl = '';
    this.isEditingProject.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }

  cancelProjectEdit() {
    this.isEditingProject.set(false);
    this.editingProject = {};
    this.projectImages = [];
    this.projectLinks = [];
  }

  async onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      await this.uploadFiles(input.files);
    }
  }

  async onFilesDropped(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      await this.uploadFiles(event.dataTransfer.files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  async uploadFiles(files: FileList) {
    this.isUploading.set(true);
    this.errorMessage.set(null);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;

      const res = await this.supabaseService.uploadFile(file);
      if (res.publicUrl) {
        this.projectImages.push(res.publicUrl);
      } else if (res.error) {
        this.errorMessage.set(`Error al subir ${file.name}: ${res.error}`);
      }
    }

    this.isUploading.set(false);
  }

  addManualImage() {
    if (this.manualImageUrl.trim()) {
      this.projectImages.push(this.manualImageUrl.trim());
      this.manualImageUrl = '';
    }
  }

  removeImage(index: number) {
    this.projectImages.splice(index, 1);
  }

  setAsCover(index: number) {
    if (index > 0 && index < this.projectImages.length) {
      const [item] = this.projectImages.splice(index, 1);
      this.projectImages.unshift(item);
    }
  }

  addLink() {
    this.projectLinks.push({ title: '', url: '', type: 'live' });
  }

  removeLink(index: number) {
    this.projectLinks.splice(index, 1);
  }

  onLinkUrlChange(link: ProjectLink) {
    if (link.url) {
      const info = detectLinkInfo(link.url);
      link.type = info.type as any;
      if (!link.title) {
        link.title = info.defaultLabel;
      }
    }
  }

  getLinkInfo(url: string): DetectedLinkInfo {
    return detectLinkInfo(url);
  }

  async saveProject() {
    if (!this.editingProject.title_es || !this.editingProject.slug) {
      this.errorMessage.set('El título y el slug son requeridos.');
      return;
    }

    this.isBusy.set(true);
    this.errorMessage.set(null);

    this.editingProject.images = this.projectImages;
    this.editingProject.image_url = this.projectImages.length > 0 ? this.projectImages[0] : null;
    this.editingProject.links = this.projectLinks.filter((l) => !!l.url);

    const ghLink = this.editingProject.links.find((l) => l.type === 'github');
    this.editingProject.github_url = ghLink ? ghLink.url : null;
    const liveLink = this.editingProject.links.find((l) => l.type === 'live');
    this.editingProject.live_url = liveLink ? liveLink.url : null;

    const res = await this.supabaseService.saveProject(this.editingProject, this.selectedTechIds);
    this.isBusy.set(false);

    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      this.successMessage.set('¡Proyecto guardado con éxito!');
      this.isEditingProject.set(false);
      await this.portfolioData.refreshAll();
      setTimeout(() => this.successMessage.set(null), 3000);
    }
  }

  async deleteProject(id?: number) {
    if (!id || !confirm('¿Estás seguro de eliminar este proyecto?')) return;
    this.isBusy.set(true);
    const res = await this.supabaseService.deleteProject(id);
    this.isBusy.set(false);
    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      await this.portfolioData.refreshAll();
    }
  }

  // ==========================================
  // Habilidades / Tecnologías
  // ==========================================
  startNewTech() {
    this.editingTech = {
      name: '',
      icon_url: '',
      category: 'General',
      display_order: (this.portfolioData.skills().length || 0) + 1,
    };
    this.isEditingTech.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }

  editTech(t: Technology) {
    this.editingTech = { ...t };
    this.isEditingTech.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }

  cancelTechEdit() {
    this.isEditingTech.set(false);
    this.editingTech = {};
  }

  async saveTech() {
    if (!this.editingTech.name) {
      this.errorMessage.set('El nombre de la tecnología es requerido.');
      return;
    }

    this.isBusy.set(true);
    this.errorMessage.set(null);

    const res = await this.supabaseService.saveTechnology(this.editingTech);
    this.isBusy.set(false);

    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      this.successMessage.set('¡Tecnología guardada con éxito!');
      this.isEditingTech.set(false);
      await this.portfolioData.refreshAll();
      setTimeout(() => this.successMessage.set(null), 3000);
    }
  }

  async deleteTech(id?: number) {
    if (!id || !confirm('¿Estás seguro de eliminar esta tecnología?')) return;
    this.isBusy.set(true);
    const res = await this.supabaseService.deleteTechnology(id);
    this.isBusy.set(false);
    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      await this.portfolioData.refreshAll();
    }
  }

  // ==========================================
  // Perfil & Enlaces
  // ==========================================
  async onCvFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.isUploading.set(true);
      this.errorMessage.set(null);
      const res = await this.supabaseService.uploadFile(file);
      this.isUploading.set(false);
      if (res.publicUrl) {
        this.profileForm.cv_url = res.publicUrl;
        this.successMessage.set('¡Archivo CV subido con éxito!');
        setTimeout(() => this.successMessage.set(null), 3000);
      } else if (res.error) {
        this.errorMessage.set(`Error al subir CV: ${res.error}`);
      }
    }
  }

  async saveProfile() {
    this.isBusy.set(true);
    this.errorMessage.set(null);

    const res = await this.supabaseService.updateProfile(this.profileForm, this.profileForm.id);
    this.isBusy.set(false);

    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      this.successMessage.set('¡Información personal actualizada con éxito!');
      await this.portfolioData.refreshAll();
      setTimeout(() => this.successMessage.set(null), 3000);
    }
  }

  // ==========================================
  // Fondo & Efectos Three.js
  // ==========================================
  async saveSettings() {
    this.isBusy.set(true);
    this.errorMessage.set(null);

    // Apply immediately to local state
    this.portfolioData.siteSettings.set({ ...this.settingsForm });

    const res = await this.supabaseService.updateSiteSettings(this.settingsForm);
    this.isBusy.set(false);

    if (res.error) {
      this.errorMessage.set(res.error);
    } else {
      if (res.data) {
        this.portfolioData.updateSettingsLocally(res.data);
      } else {
        this.portfolioData.updateSettingsLocally(this.settingsForm);
      }
      this.successMessage.set('¡Configuración de fondo guardada con éxito en la base de datos!');
      setTimeout(() => this.successMessage.set(null), 3500);
    }
  }
}
