import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-fluid-background',
  imports: [],
  templateUrl: './fluid-background.html',
  styleUrl: './fluid-background.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FluidBackground implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);
  private hostRef = inject(ElementRef<HTMLElement>);

  cursorBlob = viewChild<ElementRef<HTMLElement>>('cursorGlow');

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Run mouse tracking and animation loop outside Angular zone for max 60+ FPS performance
    const hostEl = this.hostRef.nativeElement;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isHovered = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isHovered) {
        isHovered = true;
        hostEl.style.setProperty('--cursor-opacity', '1');
        hostEl.style.setProperty('--cursor-scale', '1.25');
      }
    };

    const onMouseLeave = () => {
      isHovered = false;
      hostEl.style.setProperty('--cursor-opacity', '0.4');
      hostEl.style.setProperty('--cursor-scale', '0.85');
    };

    const onMouseEnter = () => {
      isHovered = true;
      hostEl.style.setProperty('--cursor-opacity', '1');
      hostEl.style.setProperty('--cursor-scale', '1.25');
    };

    // Smooth LERP animation loop
    const animate = () => {
      // Linear interpolation factor (smooth trailing)
      const ease = 0.08;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      hostEl.style.setProperty('--mouse-x', `${currentX}px`);
      hostEl.style.setProperty('--mouse-y', `${currentY}px`);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });
  }
}
