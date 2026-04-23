const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
  for (const value of values) {
    const card = {
      cardSuit: suit,
      value: value,
      color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
    };
    deck.push(card);
  }
}

const packedDeck = deck.reduce((accumulator, card) => {
  if (card.cardSuit === 'spade') {
    accumulator.spades.push(card);
  } else if (card.cardSuit === 'diamond') {
    accumulator.diamonds.push(card);
  } else if (card.cardSuit === 'heart') {
    accumulator.hearts.push(card);
  } else if (card.cardSuit === 'clubs') {
    accumulator.clubs.push(card);
  }

  return accumulator;
}, {
  spades: [],
  diamonds: [],
  hearts: [],
  clubs: []
});

console.log(packedDeck);