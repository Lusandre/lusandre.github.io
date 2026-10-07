import { Injectable, signal, computed } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Profile } from '../models/profile.model';
import { Technology } from '../models/technology.model';
import { Project } from '../models/project.model';
import { SiteSettings, DEFAULT_SITE_SETTINGS } from '../models/site-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  // Signals for Auth State
  currentUser = signal<User | null>(null);
  isAuthenticated = computed(() => !!this.currentUser());

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      },
    );

    // Initialize user session
    this.supabase.auth.getSession().then(({ data }) => {
      this.currentUser.set(data.session?.user ?? null);
    });

    // Listen to Auth State Changes
    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUser.set(session?.user ?? null);
    });
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  // ==========================================
  // Authentication Methods
  // ==========================================
  async signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        return { user: null, error: error.message };
      }
      this.currentUser.set(data.user);
      return { user: data.user, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
      return { user: null, error: message };
    }
  }

  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
    this.currentUser.set(null);
  }

  // ==========================================
  // Storage Upload (Supabase Storage Bucket: project-media)
  // ==========================================
  async uploadFile(file: File): Promise<{ publicUrl: string | null; error: string | null }> {
    try {
      const fileExt = file.name.split('.').pop();
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${Date.now()}_${sanitizedName}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await this.supabase.storage
        .from('project-media')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = this.supabase.storage
        .from('project-media')
        .getPublicUrl(filePath);

      return { publicUrl: data.publicUrl, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al subir archivo a Supabase Storage';
      return { publicUrl: null, error: message };
    }
  }

  // ==========================================
  // Profile (Información Personal)
  // ==========================================
  async getProfile(): Promise<Profile | null> {
    const { data, error } = await this.supabase
      .from('profile')
      .select('*')
      .order('id', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.warn('Error al obtener perfil desde Supabase:', error.message);
      return null;
    }
    return data as Profile;
  }

  async updateProfile(profileData: Partial<Profile>, id?: number): Promise<{ data: Profile | null; error: string | null }> {
    try {
      if (id) {
        const { data, error } = await this.supabase
          .from('profile')
          .update(profileData)
          .eq('id', id)
          .select()
          .single();
        if (error) throw error;
        return { data: data as Profile, error: null };
      } else {
        const { data, error } = await this.supabase
          .from('profile')
          .upsert(profileData)
          .select()
          .single();
        if (error) throw error;
        return { data: data as Profile, error: null };
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al guardar el perfil';
      return { data: null, error: message };
    }
  }

  // ==========================================
  // Technologies (Habilidades & Tecnologías)
  // ==========================================
  async getTechnologies(): Promise<Technology[]> {
    const { data, error } = await this.supabase
      .from('technologies')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.warn('Error al obtener tecnologías desde Supabase:', error.message);
      return [];
    }
    return (data ?? []) as Technology[];
  }

  async saveTechnology(tech: Partial<Technology>): Promise<{ data: Technology | null; error: string | null }> {
    try {
      if (tech.id) {
        const { data, error } = await this.supabase
          .from('technologies')
          .update(tech)
          .eq('id', tech.id)
          .select()
          .single();
        if (error) throw error;
        return { data: data as Technology, error: null };
      } else {
        const { data, error } = await this.supabase
          .from('technologies')
          .insert(tech)
          .select()
          .single();
        if (error) throw error;
        return { data: data as Technology, error: null };
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al guardar tecnología';
      return { data: null, error: message };
    }
  }

  async deleteTechnology(id: number): Promise<{ success: boolean; error: string | null }> {
    try {
      const { error } = await this.supabase.from('technologies').delete().eq('id', id);
      if (error) throw error;
      return { success: true, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al eliminar tecnología';
      return { success: false, error: message };
    }
  }

  // ==========================================
  // Projects (Proyectos & Tecnologías Asignadas)
  // ==========================================
  async getProjects(): Promise<Project[]> {
    const { data, error } = await this.supabase
      .from('projects')
      .select(`
        *,
        technologies:project_technologies(
          technology:technologies(*)
        )
      `)
      .order('display_order', { ascending: true });

    if (error) {
      console.warn('Error al obtener proyectos desde Supabase:', error.message);
      return [];
    }

    return (data ?? []).map((p: any) => {
      const linkedTechs: Technology[] = (p.technologies ?? [])
        .map((pt: any) => pt.technology)
        .filter(Boolean);

      // Normalization of multiple images & links
      const images: string[] = Array.isArray(p.images)
        ? p.images
        : (p.image_url ? [p.image_url] : []);

      const links = Array.isArray(p.links) ? p.links : [];

      return {
        ...p,
        images,
        links,
        technologies: linkedTechs,
      };
    }) as Project[];
  }

  async saveProject(project: Partial<Project>, technologyIds?: number[]): Promise<{ data: Project | null; error: string | null }> {
    try {
      const projectPayload = {
        slug: project.slug,
        title_es: project.title_es,
        title_en: project.title_en,
        description_es: project.description_es,
        description_en: project.description_en,
        image_url: project.images && project.images.length > 0 ? project.images[0] : (project.image_url || null),
        images: project.images ?? [],
        links: project.links ?? [],
        icon: project.icon,
        github_url: project.github_url || null,
        live_url: project.live_url || null,
        is_featured: project.is_featured ?? true,
        display_order: project.display_order ?? 0,
      };

      let projectId = project.id;

      if (projectId) {
        const { error } = await this.supabase
          .from('projects')
          .update(projectPayload)
          .eq('id', projectId);
        if (error) throw error;
      } else {
        const { data, error } = await this.supabase
          .from('projects')
          .insert(projectPayload)
          .select()
          .single();
        if (error) throw error;
        projectId = data.id;
      }

      // Update project_technologies relations if provided
      if (technologyIds && projectId) {
        await this.supabase.from('project_technologies').delete().eq('project_id', projectId);

        if (technologyIds.length > 0) {
          const links = technologyIds.map((techId) => ({
            project_id: projectId,
            technology_id: techId,
          }));
          const { error: relError } = await this.supabase.from('project_technologies').insert(links);
          if (relError) console.warn('Error linking technologies:', relError.message);
        }
      }

      return { data: project as Project, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al guardar proyecto';
      return { data: null, error: message };
    }
  }

  async deleteProject(id: number): Promise<{ success: boolean; error: string | null }> {
    try {
      const { error } = await this.supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      return { success: true, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al eliminar proyecto';
      return { success: false, error: message };
    }
  }

  // ==========================================
  // Site Settings & Background Configuration
  // ==========================================
  async getSiteSettings(): Promise<SiteSettings> {
    const { data, error } = await this.supabase
      .from('site_settings')
      .select('*')
      .order('id', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return DEFAULT_SITE_SETTINGS;
    }
    return data as SiteSettings;
  }

  async updateSiteSettings(settings: Partial<SiteSettings>): Promise<{ data: SiteSettings | null; error: string | null }> {
    try {
      const payload: any = { ...settings };
      delete payload.id;
      delete payload.created_at;
      payload.updated_at = new Date().toISOString();

      const { data, error } = await this.supabase
        .from('site_settings')
        .update(payload)
        .eq('id', 1)
        .select()
        .maybeSingle();

      if (error) throw error;
      return { data: (data || settings) as SiteSettings, error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al guardar la configuración';
      return { data: null, error: message };
    }
  }
}
