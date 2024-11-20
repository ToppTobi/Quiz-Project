export class CardItem {
  constructor(
    public cardName: string,
    public writer: string,
    public isComplete: boolean = false
  ) {
    this.cardName = cardName;
    this.isComplete = isComplete;
    this.writer = writer;
  }
}
