const readline = require('readline-sync');

class Card {
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

  toString() { // STUB
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

  getCard() {
    return this.cards.pop();
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
    this.cards = [];
  }

  add(card) { // STUB
    this.cards.push(card);
  }

  isBusted() { // STUB
  }

  score() { // STUB
  }

  show() { // STUB
    console.log(this.cards);
  }
}

class Participant {
  constructor() { // STUB
    this.hand = new Hand();
  }

  displayHand() { // STUB
    this.hand.show();
  }
}

class Player extends Participant {
  constructor() { // STUB
    super();
  }

  move() { // STUB
  }

  hit() { // STUB
  }

  stay() { // STUB
  }

  displayHand() { // STUB
    console.log(`You have:`);
    super.displayHand();
  }

  updateDollars() { // STUB
  }
}

class Dealer extends Participant {
  constructor() { // STUB
    super();
  }

  move() { // STUB
  }

  displayHand() { // STUB
    console.log(`The dealer has:`);
    super.displayHand();
  }
}

class TwentyOneGame {
  constructor() { // STUB
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  playMatch() { // SPIKE
    this.displayWelcomeMessage();

    do { // TODO: play based on dollars
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
    this.player.hand.add(this.deck.getCard());
  }

  showCards() { // STUB
    this.dealer.displayHand();
    this.player.displayHand();
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
