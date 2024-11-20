import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {User} from '../../shared/models/User';
import {CardItem} from '../../shared/models/CardItem';


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
  listFilter: string = "0";
  filterByUser = "0";
  selectedUser = ""

  users: User[] = [
    new User("topp3", "Tobias", "Topp"),
    new User("anbu3", "Anne", "Buser"),
    new User("test1", "test1", "test1"),
  ]

  items: CardItem[] = [
    new CardItem("Learn Angular", this.users[0].userID, false),
    new CardItem("Go Pronto", this.users[0].userID, false),
    new CardItem("Go into a Mall", this.users[1].userID, true)
  ];

  get getUserData(): User | undefined {
    return this.users.find(user => user.userID == this.selectedUser);
  }

  printSelectedUserData(user: string) {
    console.log("Selected User: ", this.getUserData)
  }


  get filteredItems(): CardItem[] {
    let value = this.listFilter;
    let filteredByStatus: CardItem[] = [];


    if (value == "0") {
      filteredByStatus = this.items;
    } else if (value == "1") {
      filteredByStatus = this.items.filter(item => !item.isComplete);
    } else if (value == "2") {
      filteredByStatus = this.items.filter(item => item.isComplete);
    }


    if (this.filterByUser && this.filterByUser !== "0") {
      return filteredByStatus.filter(item => item.writer === this.filterByUser);
    }

    return filteredByStatus;
  }


  addNewcard() {
    this.items.push(new CardItem(this.newCardName, this.selectedUser));
    this.newCardName = "";
  }


  toggleItem(item: CardItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }


  deleteCard() {
    this.deletedCardDoesNotExistString = "";
    let deleted = false;
    for (let item = this.items.length - 1; item >= 0; item--) {
      if (this.items[item].cardName == this.deletedCardName || this.items[item].cardName.toLowerCase() == this.deletedCardName) {
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
