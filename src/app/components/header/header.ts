import { isPlatformBrowser, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Inyección de dependencias moderna
  private platformId = inject(PLATFORM_ID);
  private translate = inject(TranslateService);

  // Signals para el estado (Angular moderno)
  isDarkMode = signal(false);
  currentLang = signal('es');

  constructor() {
    // Effect reacciona automáticamente cuando la signal 'isDarkMode' cambia
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.isDarkMode()) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      }
    });
  }

  toggleTheme() {
    // Actualizamos la signal invirtiendo su valor actual
    this.isDarkMode.update((mode) => !mode);
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(newLang);
    this.translate.use(newLang);
  }
}
