const readline = require('readline-sync');

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  points() {
    if (Number(this.rank)) {
      return Number(this.rank);
    } else if (this.rank === 'Ace') {
      return Deck.ACE_MAX_VALUE;
    } else {
      return Deck.FACE_CARD_VALUE;
    }
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Deck {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  static PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
  static FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
  static RANKS = this.PIP_CARDS.concat(this.FACE_CARDS);

  static FACE_CARD_VALUE = 10;
  static ACE_MAX_VALUE = 11;

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
  constructor() {
    this.cards = [];
  }

  add(card) {
    this.cards.push(card);
  }

  isBusted() {
    return this.score() > TwentyOneGame.MAX_SCORE;
  }

  score() {
    let score = 0;

    for (let card of this.cards) {
      score += card.points();
    }

    let aces = this.cards.filter(card => card.rank === 'Ace');
    aces.forEach(_ => {
      if (score > TwentyOneGame.MAX_SCORE) score -= 10;
    });

    return score;
  }

  showAll() {
    for (let card of this.cards) {
      console.log(` - ${card.toString()}`);
    }
  }

  showOne() {
    for (let idx = 0; idx < this.cards.length; ++idx) {
      if (idx === 0) {
        console.log(` - ${this.cards[0].toString()}`);
      } else {
        console.log(` - unknown card`);
      }
    }
  }
}

class Participant {
  constructor() {
    this.hand = new Hand();
  }
}

class Player extends Participant {
  constructor() {
    super();
  }

  move() { // STUB
  }

  hit() { // STUB
  }

  stay() { // STUB
  }

  displayHand() {
    console.log(`You have:`);
    this.hand.showAll();
    console.log(`With a score of ${this.hand.score()}`);
    console.log();
  }

  updateDollars() { // STUB
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  move() { // STUB
  }

  displayHand() {
    console.log(`The dealer has:`);
    this.hand.showOne();
    console.log(`With a score of ?????`);
    console.log();
  }
}

class TwentyOneGame {
  static MAX_SCORE = 21;

  constructor() { // STUB
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.participants = [this.player, this.dealer];
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

  dealCards() {
    for (let participant of this.participants) {
      for (let idx = 0; idx < 2; ++idx) {
        participant.hand.add(this.deck.getCard());
      }
    }
  }

  showCards() {
    for (let participant of this.participants) {
      participant.displayHand();
    }
  }

  playerTurn() { // STUB
  }

  dealerTurn() { // STUB
  }

  displayResult() { // STUB
  }

  displayWelcomeMessage() { // STUB
    console.clear();
    console.log('Welcome to 21!\n');
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
