import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {Card} from '../../shared/models/Card';


@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: 'quizzes.component.html',
  styleUrl: 'quizzes.component.css'
})
export class QuizzesComponent {


  title = "cardlist";
  newCardName = "";
  deletedCardName = "";
  deletedCardDoesNotExistString = "";
  selectedUser = ""



  items: Card[] = [
    new Card("Whats my Name", "Tobias"),
    new Card("Whats my Last Name", "Topp"),
    new Card("How old am i", "17"),
  ];

  addNewCard() {
    this.items.push(new Card(this.newCardName, this.selectedUser));
    this.newCardName = "";
  }



  deleteCard() {
    this.deletedCardDoesNotExistString = "";
    let deleted = false;
    for (let item = this.items.length - 1; item >= 0; item--) {
      if (this.items[item].cardQuestion == this.deletedCardName || this.items[item].cardQuestion.toLowerCase() == this.deletedCardName) {
        this.items.splice(item, 1);
        this.deletedCardName = "";
        deleted = true;
      }
    }

    if (!deleted) {
      this.deletedCardDoesNotExistString = "The card with the Name: " + this.deletedCardName + " does not exist"
    }
  }
}
