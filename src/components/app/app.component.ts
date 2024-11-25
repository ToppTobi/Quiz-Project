import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    NgForOf
  ]
})
export class AppComponent {
  title: string = 'quiz';

  // Definiere Navigationseinträge
  navRoutes = [
    { path: '/learnSets', label: 'Learn Sets' },
    { path: '/cards', label: 'Friends' },
    { path: '/createSet', label: 'Fighting' },
    { path: '/character', label: 'Character' },
  ];

  // Index des aktuell aktiven Buttons
  selectedIndex: number | null = null;

  // Methode, um den aktiven Zustand zu setzen
  setActive(index: number) {
    this.selectedIndex = index;
  }
}
