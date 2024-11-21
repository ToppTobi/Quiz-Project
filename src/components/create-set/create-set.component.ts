import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-create-set',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: 'create-set.component.html',
  styleUrls: ['create-set.component.css']
})
export class CreateSetComponent {

  isRotated: boolean = false;

  isClicked() {
    console.log("Das ist ein Test!");
  }

  rotateCard() {
    this.isRotated = !this.isRotated; // Schaltet zwischen true und false
    console.log('Card rotated:', this.isRotated); // Debug-Ausgabe
  }
}
