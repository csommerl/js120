const readline = require("readline-sync");
const shuffle = require("shuffle-array");

class Card {
  static SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
  static RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
                  "Jack", "Queen", "King", "Ace"];

  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.hidden = false;
  }

  toString() {
    if (this.isHidden()) return "Hidden";
    return `${this.getRank()} of ${this.getSuit()}`;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  isAce() {
    return this.getRank() === "Ace";
  }

  isKing() {
    return this.getRank() === "King";
  }

  isQueen() {
    return this.getRank() === "Queen";
  }

  isJack() {
    return this.getRank() === "Jack";
  }

  isFaceCard() {
    return this.isKing() || this.isQueen() || this.isJack();
  }

  hide() {
    this.hidden = true;
  }

  reveal() {
    this.hidden = false;
  }

  isHidden() {
    return this.hidden;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    Card.SUITS.forEach(suit => {
      Card.RANKS.forEach(rank => {
        this.cards.push(new Card(suit, rank));
      });
    });

    this.shuffleCards();
  }

  // it may be useful to shuffle the deck at any time
  shuffleCards() {
    shuffle(this.cards);
  }

  dealCardFaceUp() {
    return this.cards.pop();
  }

  dealCardFaceDown() {
    let card = this.dealCardFaceUp();
    card.hide();
    return card;
  }
}

let Hand = {
  addToHand(newCard) {
    this.cards.push(newCard);
  },

  resetHand() {
    this.cards = [];
  },

  showHand(caption) {
    console.log(caption);
    console.log("");

    this.cards.forEach(card => console.log(`  ${card}`));
    console.log("");
  },

  getCards() {
    return this.cards;
  },

  revealAllCards() {
    this.cards.forEach(card => card.reveal());
  },

  numberOfCards() {
    return this.cards.length;
  },
};

class Player {
  static INITIAL_PURSE = 5;
  static WINNING_PURSE = 2 * Player.INITIAL_PURSE;

  constructor() {
    this.money = Player.INITIAL_PURSE;
    this.resetHand();
  }

  winBet() {
    this.money += 1;
  }

  loseBet() {
    this.money -= 1;
  }

  isBroke() {
    return this.money <= 0;
  }

  isRich() {
    return this.money >= Player.WINNING_PURSE;
  }

  showPurse() {
    console.log(`You have $${this.money}`);
    console.log("");
  }
}

class Dealer {
  constructor() {
    this.resetHand();
  }
}

// Hand is a "mix-in"; we add its methods to the Player and Dealer classes.
// This is an alternative to inheritance when inheritance isn't appropriate
Object.assign(Player.prototype, Hand);
Object.assign(Dealer.prototype, Hand);

class TwentyOneGame {
  static TARGET_SCORE = 21;
  static DEALER_MUST_STAY_SCORE = this.TARGET_SCORE - 4;
  static HIT = 'h';
  static STAY = 's';

  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (this.player.isBroke() || this.player.isRich()) break;
      if (!this.playAgain()) break;
    }

    if (this.player.isBroke()) {
      console.log("You're broke!");
    } else if (this.player.isRich()){
      console.log("You're rich!");
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.dealCards();
    this.showCards();
    this.player.showPurse();
    this.playerTurn();

    if (!this.isBusted(this.player)) {
      this.dealerTurn();
    }

    console.clear();
    this.showCards();
    this.displayResult();

    this.updatePurse();
    this.player.showPurse();
  }

  playAgain() {
    let answer;

    while (true) {
      answer = readline.question("Play again (y/n)? ").toLowerCase();

      if (["y", "n"].includes(answer)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    console.clear();
    return answer === "y";
  }

  hit(hand) {
    hand.addToHand(this.deck.dealCardFaceUp());
    if (this.isBusted(hand)) return;

    console.clear();
    this.showCards();
  }

  playerTurn() {
    while (this.hitOrStay() === TwentyOneGame.HIT) {
      this.hit(this.player);
      if (this.isBusted(this.player)) break;
    }
  }

  dealerContinue() {
    readline.question("Press Return to continue...");
  }

  dealerTurn() {
    this.dealer.revealAllCards();

    console.clear();
    this.showCards();

    while (true) {
      let score = this.computeScoreFor(this.dealer);
      if (score >= TwentyOneGame.DEALER_MUST_STAY_SCORE) break;
      this.dealerContinue();
      this.hit(this.dealer);
    }
  }

  dealCards() {
    this.deck = new Deck();
    this.player.resetHand();
    this.dealer.resetHand();

    this.player.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceUp());
    this.player.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceDown());
  }

  showCards() {
    this.dealer.showHand("Dealer's Cards");
    this.showScoreFor(this.dealer);

    this.player.showHand("Your Cards");
    this.showScoreFor(this.player);
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to 21!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing 21! Goodbye!");
  }

  whoWon() {
    if (this.isBusted(this.player)) {
      return this.dealer;
    } else if (this.isBusted(this.dealer)) {
      return this.player;
    } else {
      let playerScore = this.computeScoreFor(this.player);
      let dealerScore = this.computeScoreFor(this.dealer);

      if (playerScore > dealerScore) {
        return this.player;
      } else if (playerScore < dealerScore) {
        return this.dealer;
      } else {
        return null; // tie game
      }
    }
  }

  displayResult() {
    if (this.isBusted(this.player)) {
      console.log("You busted! Dealer wins.");
    } else if (this.isBusted(this.dealer)) {
      console.log("Dealer busted! You win.");
    } else {
      let playerScore = this.computeScoreFor(this.player);
      let dealerScore = this.computeScoreFor(this.dealer);

      if (playerScore > dealerScore) {
        console.log("You win!");
      } else if (playerScore < dealerScore) {
        console.log("Dealer wins!");
      } else {
        console.log("Tie game.");
      }
    }

    console.log("");
  }

  hitOrStay() {
    let answer;

    while (true) {
      answer = readline.question("Hit or Stay (h/s)? ").toLowerCase();

      if ([TwentyOneGame.HIT, TwentyOneGame.STAY].includes(answer)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    return answer;
  }

  computeScoreFor(hand) {
    let cards = hand.getCards();
    let score = cards.reduce((total, card) => total + this.valueOf(card), 0);

    cards.filter(card => card.isAce() && !card.isHidden())
         .forEach(() => {
           if (score > TwentyOneGame.TARGET_SCORE) {
             score -= 10;
           }
         });

    return score;
  }

  isBusted(hand) {
    return this.computeScoreFor(hand) > TwentyOneGame.TARGET_SCORE;
  }

  updatePurse() {
    switch (this.whoWon()) {
      case this.player:
        this.player.winBet();
        break;
      case this.dealer:
        this.player.loseBet();
        break;
      default:
        break;
    }
  }

  valueOf(card) {
    if (card.isHidden()) {
      return 0;
    } else if (card.isAce()) {
      return 11;
    } else if (card.isFaceCard()) {
      return 10;
    } else {
      return parseInt(card.getRank(), 10);
    }
  }

  showScoreFor(hand) {
    console.log(`  Points: ${this.computeScoreFor(hand)}`);
    console.log("");
  }
}

let game = new TwentyOneGame();
game.start();
