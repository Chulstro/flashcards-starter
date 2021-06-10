const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to hold an array of cards', function() {
    const cards = []
    cards.unshift(new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object"));
    cards.unshift(new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array"));
    cards.unshift(new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"));
    const deck = new Deck(cards);
    expect(deck.cards).to.deep.equal(cards);
  });
});
