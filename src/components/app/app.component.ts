import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule, RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title: string = "quiz";

}

