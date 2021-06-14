const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

const cards = []
cards.unshift(new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object"));
cards.unshift(new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array"));
cards.unshift(new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"));
const deck = new Deck(cards);

describe('Round', function() {

  it('should be an instance of Round', function() {
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('Should initialize with the first card in the deck', function() {
    const round = new Round(deck);
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it('should have a function that returns the currentCard', function() {
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should be able to take a turn', function() {
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    expect(round.takeTurn(2)).to.equal("Incorrect");
    expect(round.currentCard).to.equal(deck.cards[0])
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(deck.cards[2]);
  });

  it('should be able to calculate the percentage of answers correct', function() {
    const round = new Round(deck);
    round.takeTurn(2);
    round.takeTurn(0);
    round.takeTurn(0);
    expect(round.calculatePercentCorrect()).to.equal("66%")
  });

});
