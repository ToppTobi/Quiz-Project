import {Component} from '@angular/core';
import {Card} from '../../shared/models/Card';
import {Learnsets} from '../../shared/models/Learnsets';

@Component({
  selector: 'app-learn-sets',
  standalone: true,
  imports: [],
  templateUrl: './learn-sets.component.html',
  styleUrl: './learn-sets.component.css'
})
export class LearnSetsComponent {

  cards: Card[] = [
    new Card("Whats my name?", "Tobias"),
    new Card("How old ami?", "17"),
    new Card("Whats my favourite Color?", "Blue"),
    new Card("What do i do in my free time?", "playing with friends"),
    new Card("In welchem Lehrjahr bin ich?", "3. Lehrjahr")
  ]

  learnsets: Learnsets[] = [
    new Learnsets("Biologie Test","Biologie Test am 25.11.2024", this.cards)
  ]

  protected getCards(): Card[]{
    return this.learnsets[0].flashcards;
  }

}
