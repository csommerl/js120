const readline = require("readline-sync");

class Card {
  static SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
  static PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
  static FACE_CARDS = ["Jack", "Queen", "King", "Ace"];
  static RANKS = this.PIP_CARDS.concat(this.FACE_CARDS);

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
    return Card.FACE_CARDS.includes(this.rank);
  }
}

class Deck {
  static create() {
    let pack = [];

    for (let suit of Card.SUITS) {
      for (let rank of Card.RANKS) {
        pack.push(new Card(rank, suit));
      }
    }

    return pack;
  }

  constructor() {
    this.stock = Deck.create();
    this.shuffle();
    this.wastepile = [];
  }

  getCard() {
    return this.stock.pop();
  }

  addToWastepile(card) {
    this.wastepile.push(card);
  }

  shuffle() {
    let cards = this.stock;

    for (let idx1 = cards.length - 1; idx1 > 0; --idx1) {
      let idx2 = Math.floor(Math.random() * (idx1 + 1));
      [cards[idx1], cards[idx2]] = [cards[idx2], cards[idx1]];
    }
  }

  reset() {
    while (this.wastepile.length) {
      this.stock.push(this.wastepile.pop());
    }

    this.shuffle();
  }
}

// Values here because cards have values only within a hand (e.g., aces)
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

  remove() {
    return this.cards.pop();
  }

  pointsOf(card) {
    if (card.isAce()) {
      return Hand.ACE_MAX_VALUE;
    } else if (card.isFaceCard()) {
      return Hand.FACE_CARD_VALUE;
    } else {
      return Number(card.getRank());
    }
  }

  score() {
    let score = this.cards.reduce((points, card) => {
      return points + this.pointsOf(card);
    }, 0);

    let aceOffset = Hand.ACE_MAX_VALUE - Hand.ACE_MIN_VALUE;

    this.cards
      .filter(card => card.isAce())
      .forEach(_ => {
        if (this.isBusted(score)) score -= aceOffset;
      });

    return score;
  }

  isBusted(score = this.score()) { // argument enables this to be useds within score()
    return score > Hand.MAX_SCORE;
  }

  showFull() { // TODO: rename because it also shows score
    for (let card of this.cards) {
      console.log(` - ${card.toString()}`);
    }

    console.log(`With a score of ${this.score()}\n`);
  }

  showPartial() { // TODO: rename because it also shows score
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
}

class Participant {
  constructor() {
    this.hand = new Hand();
    this.name = this.constructor.name;
  }

  hasBustedHand() {
    return this.hand.isBusted();
  }

  addToHand(card) {
    this.hand.add(card);
  }

  removeFromHand() {
    return this.hand.remove();
  }

  currentScore() {
    return this.hand.score();
  }

  displayStatus(quantity = "full") { // TODO: rename method name and quantity
    console.log(`The ${this.name} has:`);

    if (quantity === "full") {
      this.hand.showFull();
    } else if (quantity === "partial") {
      this.hand.showPartial();
    }
    // TODO: add throw error
  }
}

class Player extends Participant {
  static INITIAL_PURSE = 5;
  static BROKE_CONDITION = 0;
  static RICH_CONDITION = 10;

  constructor() {
    super();
    this.purse = Player.INITIAL_PURSE;
  }

  winBet() {
    ++this.purse;
  }

  loseBet() {
    --this.purse;
  }

  isBroke() {
    return this.purse === Player.BROKE_CONDITION;
  }

  isRich() {
    return this.purse === Player.RICH_CONDITION;
  }

  showPurse() {
    console.log(`You have $${this.purse}.\n`);
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

  playMatch() {
    this.displayWelcomeMessage();

    do {
      this.playRound();
    } while (!this.matchWinner() && this.playAgain());

    this.displayMatchResult();
    this.displayGoodbyeMessage();
  }

  matchWinner() {
    if (this.player.isRich()) {
      return this.player;
    } else if (this.player.isBroke()) {
      return this.dealer;
    } else {
      return null;
    }
  }

  playRound() {
    console.log(this.deck.stock.length); // TODO: remove
    this.dealHands();
    this.playerTurn();
    this.dealerTurn();
    this.updatePurse();
    this.displayRoundResult();
    this.recycleCards();
  }

  roundWinner() { // TODO: tidy up?
    if (this.player.hasBustedHand()) {
      return this.dealer;
    } else if (this.dealer.hasBustedHand()) {
      return this.player;
    } else if (this.player.currentScore() === this.dealer.currentScore()) {
      return null;
    } else if (this.player.currentScore() > this.dealer.currentScore()) {
      return this.player;
    } else {
      return this.dealer;
    }
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
      while (true) { // TODO: better logic?
        let card = participant.removeFromHand();
        if (!card) break;
        this.deck.addToWastepile(card);
      }
    }

    this.deck.reset();
  }

  showCards(quantity = "full") { // TODO: rename because it also shows score
    this.dealer.displayStatus(quantity);
    this.player.displayStatus("full");
  }

  playerTurn() {
    this.showCards("partial");
    this.player.showPurse();

    while (this.playerHits()) {
      this.dealCard(this.player);

      if (this.player.hasBustedHand()) break;

      this.showCards("partial");
      this.player.showPurse();
      console.log("You hit!\n");
    }
  }

  playerHits() {
    return this.affirmPrompt("(h)it or (s)tay? ", ["h", "s",], "h");
  }

  dealerTurn() {
    if (this.player.hasBustedHand()) return;

    while (this.dealer.currentScore() < Dealer.TARGET_SCORE) {
      this.dealCard(this.dealer);
      this.showCards("full");
      this.player.showPurse();
      console.log(`${this.dealer.name} hit!\n`);
      this.returnToContinue();
      console.clear();
    }
  }

  updatePurse() {
    if (this.roundWinner() === this.player) {
      this.player.winBet();
    } else if (this.roundWinner() === this.dealer) {
      this.player.loseBet();
    }
  }

  displayRoundResult() {
    this.showCards("full");
    console.log(this.roundWinner() ? `${this.roundWinner().name} wins!\n` : "It's a tie.\n");
    this.player.showPurse();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to 21!\n");
    this.returnToContinue();
    console.clear();
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

  returnToContinue() {
    readline.question("Press return to continue.");
  }

  displayMatchResult() {
    if (this.player.isRich()) {
      console.log("You're rich!\n");
    } else if (this.player.isBroke()) {
      console.log("You're broke!\n");
    }
  }
}

let game = new TwentyOneGame();
game.playMatch();
