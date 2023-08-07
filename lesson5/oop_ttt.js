class Board {
  constructor() {
    this.squares = {};

    for (let idx = 1; idx <= 9; ++idx) {
      this.squares[idx] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Player {
  constructor() { // STUB
  }

  mark() { // STUB
  }
}

class Human extends Player {
  constructor() { // STUB
  }
}

class Computer extends Player {
  constructor() { // STUB
  }
}

class TTTGame {
  constructor() { // STUB
    this.board = new Board();
  }

  displayWelcomeMessage() { // STUB
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() { // STUB
    console.log("Thanks for playing Tic Tac Toe! Goodbye");
  }

  displayResults() { // STUB
  }

  firstPlayerMoves() { // STUB
  }

  secondPlayerMoves() { // STUB
  }

  gameOver() { // STUB
    return false;
  }

  play() { // STUB
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;

      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();
