class Card {
  // static properties for points?

  constructor() { // STUB
    // rank
    // suit
  }

  points() { // STUB
  }
}

class Deck {
  constructor() { // STUB
    // cards data structure
    // reset
  }

  dealHand() { // STUB
  }

  dealCard() { // STUB
  }

  shuffle() { // STUB
  }

  reset() { // STUB
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
    // Deck
    // Player
    // Dealer
  }

  playMatch() { // SPIKE
    this.displayWelcomeMessage();
    this.playRound(); // TODO: play based on dollars
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
  }

  displayGoodbyeMessage() { // STUB
  }
}

let game = new TwentyOneGame();
game.playRound();
