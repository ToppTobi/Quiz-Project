import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {AppComponent} from '../app/app.component';


@Component({
  selector: 'app-create-set',
  standalone: true,
  imports: [
    NgClass,
    AppComponent
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
    this.isRotated = !this.isRotated;
    console.log('Card rotated:', this.isRotated);
  }


}
