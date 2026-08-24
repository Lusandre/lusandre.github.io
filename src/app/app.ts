import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './components/projects/projects';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Projects, Header, Hero, Footer, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portafolio-lusandre');
}
