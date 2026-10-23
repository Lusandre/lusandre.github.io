import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  NgZone,
  OnInit,
  PLATFORM_ID,
  viewChild,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { SiteSettings } from '../../models/site-settings.model';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [],
  template: `<canvas #canvasRef class="particle-canvas"></canvas>`,
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
      }
      .particle-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticleBackground implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  private destroyRef = inject(DestroyRef);

  canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef');
  settings = input.required<SiteSettings>();

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private pointsMesh!: THREE.Points;
  private geometry!: THREE.BufferGeometry;
  private material!: THREE.PointsMaterial;

  private currentPositions!: Float32Array;
  private targetPositions!: Float32Array;
  private velocities!: Float32Array;
  private colors!: Float32Array;
  private opacities!: Float32Array;

  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private isHovered = false;
  private animId?: number;
  private time = 0;
  private particleCount = 5000;
  private currentTextureShape = 'glow_circle';

  constructor() {
    effect(() => {
      const s = this.settings();
      if (this.geometry && isPlatformBrowser(this.platformId)) {
        this.applySettings(s);
      }
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.initThree(), 0);
    });
  }

  private initThree() {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.camera.position.z = 70;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const s = this.settings();
    this.particleCount = Math.min(Math.max(s.particle_count || 5000, 1000), 6000);

    this.currentPositions = new Float32Array(this.particleCount * 3);
    this.targetPositions = new Float32Array(this.particleCount * 3);
    this.velocities = new Float32Array(this.particleCount * 3);
    this.colors = new Float32Array(this.particleCount * 3);
    this.opacities = new Float32Array(this.particleCount);

    this.generateShape(s.particle_preset || 'sphere', this.targetPositions, s.particle_radius || 2.4);

    for (let i = 0; i < this.particleCount * 3; i++) {
      this.currentPositions[i] = (Math.random() - 0.5) * 120;
    }

    this.updateColors(s.color_preset || 'aurora');

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.currentPositions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.currentTextureShape = s.texture_shape || 'glow_circle';
    const texture = this.createParticleTexture(this.currentTextureShape);

    this.material = new THREE.PointsMaterial({
      size: s.particle_size || 2.6,
      map: texture,
      transparent: true,
      opacity: s.particle_opacity !== undefined ? s.particle_opacity : 0.3,
      vertexColors: true,
      blending: s.blending_mode === 'normal' ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.pointsMesh = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.pointsMesh);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };

    const onMouseMove = (e: MouseEvent) => {
      this.isHovered = true;
      this.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onMouseLeave = () => {
      this.isHovered = false;
      this.targetMouseX = 0;
      this.targetMouseY = 0;
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // 6. Animation Loop (60 FPS outside Angular)
    const animate = () => {
      const currentSettings = this.settings();
      const speed = (currentSettings.particle_speed || 1.0) * 0.015;
      const attraction = (currentSettings.attraction_force || 1.0) * 0.04;
      const turbulence = currentSettings.turbulence_noise !== undefined ? currentSettings.turbulence_noise : 0.5;
      const mouseForceMultiplier = currentSettings.mouse_force || 1.5;
      const mode = currentSettings.interaction_mode || 'repel';

      this.time += speed;

      this.mouseX += (this.targetMouseX - this.mouseX) * 0.08;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.08;

      const mouseVector = new THREE.Vector3(this.mouseX * 40, this.mouseY * 30, 0);
      const posAttr = this.geometry.attributes['position'] as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;

      // Group 3D Rotation
      this.pointsMesh.rotation.y = this.time * 0.15;
      this.pointsMesh.rotation.x = Math.sin(this.time * 0.1) * 0.1;

      for (let i = 0; i < this.particleCount; i++) {
        const i3 = i * 3;

        // Attract / Morph towards target mathematical shape
        positions[i3] += (this.targetPositions[i3] - positions[i3]) * attraction;
        positions[i3 + 1] += (this.targetPositions[i3 + 1] - positions[i3 + 1]) * attraction;
        positions[i3 + 2] += (this.targetPositions[i3 + 2] - positions[i3 + 2]) * attraction;

        // 3D Turbulence & Wave Pulse
        if (turbulence > 0) {
          const noiseX = Math.sin(this.time * 2 + positions[i3 + 1] * 0.1) * (turbulence * 0.08);
          const noiseY = Math.cos(this.time * 2 + positions[i3] * 0.1) * (turbulence * 0.08);
          positions[i3] += noiseX;
          positions[i3 + 1] += noiseY;
        }

        // Mouse Physics Interaction
        if (this.isHovered) {
          const dx = positions[i3] - mouseVector.x;
          const dy = positions[i3 + 1] - mouseVector.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = 300;

          if (distSq < radiusSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / Math.sqrt(radiusSq)) * mouseForceMultiplier;

            if (mode === 'repel') {
              positions[i3] += (dx / dist) * force * 1.5;
              positions[i3 + 1] += (dy / dist) * force * 1.5;
            } else if (mode === 'attract') {
              positions[i3] -= (dx / dist) * force * 1.2;
              positions[i3 + 1] -= (dy / dist) * force * 1.2;
            } else if (mode === 'orbit') {
              positions[i3] += (-dy / dist) * force * 2.0;
              positions[i3 + 1] += (dx / dist) * force * 2.0;
            } else if (mode === 'wave') {
              const wavePush = Math.sin(this.time * 6 - dist * 0.3) * force * 1.8;
              positions[i3] += (dx / dist) * wavePush;
              positions[i3 + 1] += (dy / dist) * wavePush;
            }
          }
        }
      }

      posAttr.needsUpdate = true;
      this.renderer.render(this.scene, this.camera);
      this.animId = requestAnimationFrame(animate);
    };

    this.animId = requestAnimationFrame(animate);

    this.destroyRef.onDestroy(() => {
      if (this.animId) cancelAnimationFrame(this.animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      this.geometry?.dispose();
      this.material?.dispose();
      this.renderer?.dispose();
    });
  }

  // 🎮 7 3D Math Presets (Particle Love Simulator)
  private generateShape(preset: string, targetArr: Float32Array, radiusMultiplier = 1.0) {
    const count = this.particleCount;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      if (preset === 'heart') {
        // 1. ❤️ Parametric 3D Heart Curve
        const t = Math.PI * 2 * Math.random();
        const spread = (Math.random() - 0.5) * 10;
        const scale = 1.35 * radiusMultiplier;
        const x = 16 * Math.pow(Math.sin(t), 3) * scale + spread * 0.2;
        const y =
          (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale +
          spread * 0.2;
        const z = (Math.random() - 0.5) * 20 * (1 - Math.abs(y) / 30);

        targetArr[i3] = x;
        targetArr[i3 + 1] = y;
        targetArr[i3 + 2] = z;
      } else if (preset === 'galaxy') {
        // 2. 🌌 Spiral Galaxy
        const arms = 3;
        const radius = Math.pow(Math.random(), 1.5) * 35 * radiusMultiplier;
        const spinAngle = radius * 0.4;
        const branchAngle = ((i % arms) * 2 * Math.PI) / arms;
        const randomX = (Math.random() - 0.5) * (15 - radius * 0.25);
        const randomY = (Math.random() - 0.5) * (8 - radius * 0.15);
        const randomZ = (Math.random() - 0.5) * (15 - radius * 0.25);

        targetArr[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        targetArr[i3 + 1] = randomY;
        targetArr[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      } else if (preset === 'torus') {
        // 3. 🪐 Torus / Saturn Rings
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        const R = 22 * radiusMultiplier;
        const r = (8 + (Math.random() - 0.5) * 4) * radiusMultiplier;

        targetArr[i3] = (R + r * Math.cos(v)) * Math.cos(u);
        targetArr[i3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
        targetArr[i3 + 2] = r * Math.sin(v);
      } else if (preset === 'helix') {
        // 4. 🧬 Dual DNA Double Helix
        const strand = i % 2 === 0 ? 1 : -1;
        const t = (i / count) * Math.PI * 12;
        const radius = 14 * radiusMultiplier;
        const length = 55 * radiusMultiplier;
        const y = ((i / count) - 0.5) * length;
        const x = Math.cos(t + (strand * Math.PI)) * radius + (Math.random() - 0.5) * 2;
        const z = Math.sin(t + (strand * Math.PI)) * radius + (Math.random() - 0.5) * 2;

        targetArr[i3] = x;
        targetArr[i3 + 1] = y;
        targetArr[i3 + 2] = z;
      } else if (preset === 'cube') {
        // 5. 🧊 3D Quantum Tesseract / Lattice Cube
        const side = 28 * radiusMultiplier;
        const x = (Math.random() - 0.5) * side;
        const y = (Math.random() - 0.5) * side;
        const z = (Math.random() - 0.5) * side;

        targetArr[i3] = x;
        targetArr[i3 + 1] = y;
        targetArr[i3 + 2] = z;
      } else if (preset === 'wave') {
        // 6. 🌊 Harmonic Wave Flow Grid
        const gridX = ((i % 50) - 25) * 1.5 * radiusMultiplier;
        const gridZ = (Math.floor(i / 50) - 25) * 1.5 * radiusMultiplier;
        const gridY = Math.sin(gridX * 0.2) * Math.cos(gridZ * 0.2) * 8 * radiusMultiplier;

        targetArr[i3] = gridX;
        targetArr[i3 + 1] = gridY;
        targetArr[i3 + 2] = gridZ;
      } else {
        // 7. 🔮 Fibonacci Sphere
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const radius = (22 + (Math.random() - 0.5) * 4) * radiusMultiplier;

        targetArr[i3] = radius * Math.sin(phi) * Math.cos(theta);
        targetArr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        targetArr[i3 + 2] = radius * Math.cos(phi);
      }
    }
  }

  // 🎨 Color Palettes
  private updateColors(preset: string) {
    const count = this.particleCount;
    const isDark = document.body.classList.contains('dark-theme');
    const s = this.settings();

    const primaryHex = isDark ? (s.primary_dark_color || '#38bdf8') : (s.primary_color || '#3b82f6');
    const accentHex = isDark ? (s.accent_dark_color || '#a855f7') : (s.accent_color || '#8b5cf6');

    let color1 = new THREE.Color(primaryHex);
    let color2 = new THREE.Color(accentHex);
    let color3 = new THREE.Color(isDark ? '#22d3ee' : '#ec4899');

    if (preset === 'neon-cyan') {
      color1 = new THREE.Color('#06b6d4');
      color2 = new THREE.Color('#10b981');
      color3 = new THREE.Color('#3b82f6');
    } else if (preset === 'purple-pink') {
      color1 = new THREE.Color('#a855f7');
      color2 = new THREE.Color('#ec4899');
      color3 = new THREE.Color('#f43f5e');
    } else if (preset === 'golden') {
      color1 = new THREE.Color('#fbbf24');
      color2 = new THREE.Color('#f59e0b');
      color3 = new THREE.Color('#ef4444');
    } else if (preset === 'aurora') {
      color1 = new THREE.Color('#34d399');
      color2 = new THREE.Color('#22d3ee');
      color3 = new THREE.Color('#818cf8');
    } else if (preset === 'white-diamond') {
      color1 = new THREE.Color('#ffffff');
      color2 = new THREE.Color('#cbd5e1');
      color3 = new THREE.Color('#94a3b8');
    }

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ratio = i / count;
      let finalColor = new THREE.Color();

      if (ratio < 0.5) {
        finalColor.lerpColors(color1, color2, ratio * 2);
      } else {
        finalColor.lerpColors(color2, color3, (ratio - 0.5) * 2);
      }

      this.colors[i3] = finalColor.r;
      this.colors[i3 + 1] = finalColor.g;
      this.colors[i3 + 2] = finalColor.b;
    }

    if (this.geometry) {
      const colorAttr = this.geometry.attributes['color'] as THREE.BufferAttribute;
      if (colorAttr) colorAttr.needsUpdate = true;
    }
  }

  private applySettings(s: SiteSettings) {
    if (!this.geometry) return;

    this.generateShape(s.particle_preset || 'sphere', this.targetPositions, s.particle_radius || 2.4);
    this.updateColors(s.color_preset || 'aurora');

    if (this.material) {
      this.material.size = s.particle_size || 2.6;
      this.material.opacity = s.particle_opacity !== undefined ? s.particle_opacity : 0.3;
      this.material.blending = s.blending_mode === 'normal' ? THREE.NormalBlending : THREE.AdditiveBlending;

      if (s.texture_shape && s.texture_shape !== this.currentTextureShape) {
        this.currentTextureShape = s.texture_shape;
        this.material.map = this.createParticleTexture(s.texture_shape);
        this.material.needsUpdate = true;
      }
    }
  }

  // 🎨 4 Procedural Particle Textures (Glow Circle, Sparkle Star, Ring, Diamond)
  private createParticleTexture(shape = 'glow_circle'): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.clearRect(0, 0, 64, 64);

      if (shape === 'sparkle') {
        // 4-point Sparkle Star
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.moveTo(32, 4);
        ctx.quadraticCurveTo(32, 32, 60, 32);
        ctx.quadraticCurveTo(32, 32, 32, 60);
        ctx.quadraticCurveTo(32, 32, 4, 32);
        ctx.quadraticCurveTo(32, 32, 32, 4);
        ctx.fill();
      } else if (shape === 'ring') {
        // Glowing Ring
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(32, 32, 20, 0, Math.PI * 2);
        ctx.stroke();
      } else if (shape === 'diamond') {
        // Crystalline Diamond
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.moveTo(32, 6);
        ctx.lineTo(58, 32);
        ctx.lineTo(32, 58);
        ctx.lineTo(6, 32);
        ctx.closePath();
        ctx.fill();
      } else {
        // Radial Soft Glow Circle (Default Particle Love)
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }
}
