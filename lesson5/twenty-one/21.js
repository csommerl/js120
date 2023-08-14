const readline = require("readline-sync");

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  isAce() {
    return this.rank === "Ace";
  }

  isFaceCard() {
    return Deck.FACE_CARDS.includes(this.rank);
  }
}

class Deck {
  static SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];

  static PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
  static FACE_CARDS = ["Jack", "Queen", "King", "Ace"];
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

  static shuffleCards(cards) { // TODO: unnecessary?
    for (let idx1 = cards.length - 1; idx1 > 0; --idx1) {
      let idx2 = Math.floor(Math.random() * (idx1 + 1));
      [cards[idx1], cards[idx2]] = [cards[idx2], cards[idx1]];
    }

    return cards;
  }

  constructor() {
    this.cards = Deck.shuffleCards(Deck.create());
    this.discarded = [];
  }

  getCard() {
    return this.cards.pop();
  }

  addToDiscarded(card) {
    this.discarded.push(card);
  }

  shuffle() {
    Deck.shuffleCards(this.cards);
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
  static ACE_MIN_VALUE = 1;
  static MAX_SCORE = 21;

  constructor() {
    this.cards = [];
  }

  add(card) {
    this.cards.push(card);
  }

  pointsOf(card) {
    if (card.isAce()) {
      return Hand.ACE_MAX_VALUE;
    } else if (card.isFaceCard()){
      return Hand.FACE_CARD_VALUE;
    } else {
      return Number(card.getRank());
    }
  }

  score() {
    let score = this.cards.reduce((points, card) => {
      return points + this.pointsOf(card);
    }, 0);

    this.cards
      .filter(card => card.isAce())
      .forEach(_ => {
        if (this.isBusted(score)) score -= (Hand.ACE_MAX_VALUE - Hand.ACE_MIN_VALUE);
      });

    return score;
  }

  isBusted(score = this.score()) { // argument enables this to be useds within aceAdjustment
    return score > Hand.MAX_SCORE;
  }

  showFull() {
    for (let card of this.cards) {
      console.log(` - ${card.toString()}`);
    }

    console.log(`With a score of ${this.score()}\n`);
  }

  showPartial() {
    for (let idx = 0; idx < this.size(); ++idx) {
      if (idx === 0) {
        console.log(` - ${this.cards[0].toString()}`);
      } else {
        console.log(" - unknown card");
      }
    }

    console.log(`With a score of ?????\n`);
  }

  size() {
    return this.cards.length;
  }

  discard() { // TODO: side effect and return value
    let discarded = this.cards;
    this.cards = [];
    return discarded;
  }
}

// TODO: remove methods that simply invoke hand methods? Or use mix-in?
class Participant {
  constructor() {
    this.hand = new Hand();
  }

  discardHand() {
    return this.hand.discard();
  }

  hasBustedHand() {
    return this.hand.isBusted();
  }

  addToHand(card) {
    this.hand.add(card);
  }

  currentScore() {
    return this.hand.score();
  }

  displayHandAndScore(quantity = "full") { // TODO: rename method name and quantity
    console.log(`The ${this.constructor.name} has:`);

    if (quantity === "full") {
      this.hand.showFull();
    } else if (quantity === "partial") {
      this.hand.showPartial();
    }
    // TODO: add throw error
  }
}

class Player extends Participant {
  constructor() {
    super();
  }

  updateDollars() { // STUB
  }
}

class Dealer extends Participant {
  static TARGET_SCORE = 17;

  constructor() {
    super();
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
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.recycleCards();
  }

  dealCard(participant) {
    participant.addToHand(this.deck.getCard());
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
      let discarded = participant.discardHand();

      while (discarded.length) {
        this.deck.addToDiscarded(discarded.pop());
      }

      // TODO: does this help with memory?
      // otherwise, you have an object left over after each recycle
      discarded = null;
    }

    this.deck.reset();
  }

  showCards(quantity = "full") {
    this.player.displayHandAndScore("full");
    this.dealer.displayHandAndScore(quantity);
  }

  playerTurn() { // SPIKE
    this.showCards("partial");

    while (this.playerHits()) {
      this.dealCard(this.player);

      if (this.player.hasBustedHand()) break;

      console.log("You hit!\n");
      this.showCards("partial");
    }
  }

  playerHits() {
    return this.affirmPrompt("(h)it or (s)tay? ", ["h", "s",], "h");
  }

  dealerTurn() {
    while (this.dealer.currentScore() < Dealer.TARGET_SCORE) {
      this.dealCard(this.dealer);
    }
  }

  displayResult() { // SPIKE
    console.log("The round is over!\n");
    this.showCards();
  }

  displayWelcomeMessage() { // SPIKE
    console.clear();
    console.log("Welcome to 21!\n");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing 21!");
  }

  playAgain() {
    return this.affirmPrompt("Play again (y/n)? ", ["y", "n",], "y");
  }

  affirmPrompt(prompt, validAnswers, affirmative) {
    let answer;

    while (!validAnswers.includes(answer)) {
      answer = readline.question(prompt).toLowerCase();
      if (!validAnswers.includes(answer)) {
        console.log("Invalid answer");
      }
    }

    console.clear();

    return answer === affirmative;
  }
}

let game = new TwentyOneGame();
game.playMatch();
