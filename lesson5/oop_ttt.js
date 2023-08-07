const readline = require("readline-sync");

class Board {
  constructor() {
    this.squares = {};

    for (let idx = 1; idx <= 9; ++idx) {
      this.squares[idx] = new Square();
    }
  }

  markSquareAt(square, marker) {
    this.squares[square].mark(marker);
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

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  mark(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Player {
  constructor(marker) { // STUB
    this.marker = marker;
  }
}

class Human extends Player {
  constructor() { // STUB
    super("X");
  }

  move(board) { // STUB
    let choice;

    while (true) {
      choice = parseInt(readline.question("Choose a square between 1 and 9: "), 10);
      if (choice >= 1 && choice <= 9) break;
      console.log("Sorry, that's not a valid choice.\n");
    }

    board.markSquareAt(choice, this.marker);

    console.log(`Human marks ${this.marker} in square ${choice}.`); // TODO: remove
  }
}

class Computer extends Player {
  constructor() { // STUB
    super("O");
  }

  move(board) { // STUB
    let choice = Math.floor((Math.random() * 9) + 1);
    board.markSquareAt(choice, this.marker);

    console.log(`Computer marks ${this.marker} in square ${choice}.`); // TODO: remove
  }
}

class TTTGame {
  constructor() { // STUB
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() { // STUB
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() { // STUB
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
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
    this.board.display();

    while (true) {
      this.human.move(this.board);
      if (this.gameOver()) break;

      this.computer.move(this.board);
      if (this.gameOver()) break;

      this.board.display();
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();
