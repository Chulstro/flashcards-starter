class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess_id) {
    var card = this.currentCard
    this.deck.push(this.deck.shift(card));
    if (card.answers[guess_id] == card.correctAnswer) {
      this.currentCard = this.deck[0];
      return "Correct"
    }
    else {
      this.incorrectGuesses.unshift(card);
      this.currentCard = this.deck[0];
      return "Incorrect"
    }
  }

  calculatePercentCorrect() {
    const percentage = (this.deck.length - this.incorrectGuesses.length) / this.deck.length * 100
    return `${Math.trunc(percentage)}%`
  }

}

module.exports = Round;
