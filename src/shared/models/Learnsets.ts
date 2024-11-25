import {Card} from './Card';

export class Learnsets {
  constructor(
    public title: string,
    public description: string,
    public flashcards: Card[]
  ) {
    this.title = title;
    this.description = description;
    this.flashcards = flashcards;
  }
}
