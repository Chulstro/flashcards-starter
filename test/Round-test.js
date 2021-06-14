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
    console.log(deck)
    const round = new Round(deck);
    expect(round.currentCard).to.equal(deck[0]);
  });

});
