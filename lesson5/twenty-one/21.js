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

  static create() {
    let cards = [];

    for (let suit of Deck.SUITS) {
      for (let rank of Deck.RANKS) {
        cards.push(new Card(rank, suit));
      }
    }

    return cards;
  }

  static shuffle(cards) {
    for (let idx1 = cards.length - 1; idx1 > 0; --idx1) {
      let idx2 = Math.floor(Math.random() * (idx1 + 1));
      [cards[idx1], cards[idx2]] = [cards[idx2], cards[idx1]];
    }

    return cards;
  }

  constructor() {
    this.cards = Deck.shuffle(Deck.create());
    this.discarded = [];
  }

  getCard() {
    return this.cards.pop();
  }

  addToDiscarded(card) {
    this.discarded.push(card);
  }

  shuffle() {
    Deck.shuffle(this.cards);
  }

  reset() {
    while (this.discarded.length) {
      this.cards.push(this.discarded.pop());
    }

    this.shuffle();
  }
}

class Hand {
  static FACE_CARD_VALUE = 10;
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

  isBusted(score = this.score()) {
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

  discard() {
    let discarded = this.cards;
    this.cards = [];
    return discarded;
  }
}

class Participant {
  constructor() {
    this.hand = new Hand();
  }

  hasBustedHand() {
    return this.hand.isBusted();
  }
}

class Player extends Participant {
  constructor() {
    super();
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
  constructor() {
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
    this.recycleCards();
  }

  dealCard(participant) {
    participant.hand.add(this.deck.getCard());
  }

  dealHands() {
    for (let participant of this.participants) {
      for (let idx = 0; idx < 2; ++idx) {
        this.dealCard(participant);
      }
    }
  }

  recycleCards() {
    for (let participant of this.participants) {
      let discarded = participant.hand.discard();

      while (discarded.length) {
        this.deck.addToDiscarded(discarded.pop());
      }

      // does this help with memory? otherwise, you have an object left over after each recycle
      discarded = null;
    }

    this.deck.reset();
  }

  showCards() {
    for (let participant of this.participants) {
      participant.displayHand();
    }
  }

  playerTurn() { // STUB
    while (this.playerHits()) {
      this.dealCard(this.player);

      if (this.player.hasBustedHand()) break;

      console.log("You hit!\n");
      this.showCards();
    }
  }

  playerHits() { // TODO: DRY with playAgain?
    let prompt = "(h)it or (s)tay? ";
    const validAnswers = ['h', 's',];

    let answer;

    while (!validAnswers.includes(answer)) {
      answer = readline.question(prompt).toLowerCase();
      if (!validAnswers.includes(answer)) {
        console.log("Invalid answer");
      }
    }

    console.clear();

    return answer === 'h';
  }

  dealerTurn() { // STUB
  }

  displayResult() { // STUB
    console.log("The round is over!\n");
    this.showCards();
  }

  displayWelcomeMessage() { // STUB
    console.clear();
    console.log('Welcome to 21!\n');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing 21!');
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
