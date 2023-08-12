const readline = require('readline-sync');

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
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

  constructor() { // TODO: move reset to constructor?
    this.reset();
    this.shuffle();
  }

  getCard() {
    return this.cards.pop();
  }

  shuffle() { // STUB
    for (let idx1 = this.cards.length - 1; idx1 > 0; --idx1) {
      let idx2 = Math.floor(Math.random() * (idx1 + 1)); // 0 to idx1
      [this.cards[idx1], this.cards[idx2]] = [this.cards[idx2], this.cards[idx1]]; // swap elements
    }
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
  static FACE_CARD_VALUE = 12;
  static ACE_MAX_VALUE = 11;
  static ACE_MIN_VALUE = 10;
  static MAX_SCORE = 21;

  constructor() {
    this.cards = [];
  }

  add(card) {
    this.cards.push(card);
  }

  pointsOf(card) {
    if (Number(card.rank)) {
      return Number(card.rank);
    } else if (card.rank === 'Ace') {
      return Hand.ACE_MAX_VALUE;
    } else {
      return Hand.FACE_CARD_VALUE;
    }
  }

  score() {
    return this.aceAdjustment(this.maxScore());
  }

  maxScore() {
    return this.cards.reduce((score, card) => score + this.pointsOf(card), 0);
  }

  aceAdjustment(score) {
    this.cards
      .filter(card => card.rank === 'Ace')
      .forEach(_ => {
        if (this.isBusted(score)) score -= 10;
      });

    return score;
  }

  isBusted(score = this.score) {
    return score > Hand.MAX_SCORE;
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
        console.log(" - unknown card");
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
    this.dealHands();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    // TODO: discard cards in hand
  }

  dealHands() {
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
