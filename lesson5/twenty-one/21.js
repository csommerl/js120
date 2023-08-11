const readline = require('readline-sync');

class Card {
  // static properties for points?

  constructor(rank, suit) { // STUB
    this.rank = rank;
    this.suit = suit;
  }

  points() { // TODO: move to Hand?
    if (Number(this.rank)) {
      return Number(this.rank);
    } else if (this.rank === 'Ace') {
      return 11;
    } else {
      return 10;
    }
  }
}

class Deck {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
  static FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
  static RANKS = this.PIP_CARDS.concat(this.FACE_CARDS);

  constructor() { // TODO: move reset to constructor?
    this.reset();
  }

  dealHand() { // STUB
  }

  dealCard() { // STUB
  }

  shuffle() { // STUB
  }

  reset() { // TODO: move to constructor?
    this.cards = [];

    for (let suit of Deck.SUITS) {
      for (let rank of Deck.RANKS) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }
}

class Hand {
  constructor() { // STUB
    // data structure
  }

  isBusted() { // STUB
  }

  score() { // STUB
  }
}

class Participant {
  constructor() { // STUB
    // hand
  }
}

class Player extends Participant {
  constructor() { // STUB
    // dollars
  }

  move() { // STUB
  }

  hit() { // STUB
  }

  stay() { // STUB
  }

  displayHand() { // STUB
  }

  updateDollars() { // STUB
  }
}

class Dealer extends Participant {
  constructor() { // STUB
  }

  move() { // STUB
  }

  displayHand() { // STUB
  }
}

class TwentyOneGame {
  constructor() { // STUB
    this.deck = new Deck();
    // Player
    // Dealer
  }

  playMatch() { // SPIKE
    this.displayWelcomeMessage();

    do { // TODO: play based on dollars
      for (let card of this.deck.cards) { // TODO: remove
        console.log(card, card.points());
      }
      this.playRound();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  playRound() { // SPIKE
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
  }

  dealCards() { // STUB
  }

  showCards() { // STUB
  }

  playerTurn() { // STUB
  }

  dealerTurn() { // STUB
  }

  displayResult() { // STUB
  }

  displayWelcomeMessage() { // STUB
    console.clear();
    console.log('Welcome to 21!');
  }

  displayGoodbyeMessage() { // STUB
    console.log('Thanks for playing 21!');
    console.clear();
  }

  playAgain() {
    let prompt = "Play again (y/n)? ";
    const validAnswers = ['y', 'n',];

    let answer;

    while (!validAnswers.includes(answer)) {
      answer = readline.question(prompt).toLowerCase();
      if (!validAnswers.includes(answer)) {
        console.log("Invalid answer");
      }
    }

    console.clear();

    return answer === 'y';
  }
}

let game = new TwentyOneGame();
game.playMatch();
