const readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  mark(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};

    for (let idx = 1; idx <= 9; ++idx) {
      this.squares[idx] = new Square();
    }
  }

  unusedSquareKeys() {
    return Object.keys(this.squares)
      .filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquareKeys().length === 0;
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
    let validChoices = board.unusedSquareKeys();
    const prompt = `Choose a square from (${validChoices.join(", ")}): `;
    let choice;

    while (true) {
      choice = readline.question(prompt);
      if (validChoices.includes(choice)) break;
      console.log("Sorry, that's not a valid choice.\n");
    }

    board.markSquareAt(choice, this.marker);
  }
}

class Computer extends Player {
  constructor() { // STUB
    super("O");
  }

  move(board) { // STUB
    let validChoices = board.unusedSquareKeys();
    let idx = Math.floor(Math.random() * validChoices.length);
    let choice = validChoices[idx];
    board.markSquareAt(choice, this.marker);
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
    return this.board.isFull()
  }

  play() { // STUB
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.human.move(this.board);
      if (this.gameOver()) break;

      this.computer.move(this.board);
      if (this.gameOver()) break;

      console.clear();
    }

    console.clear();
    this.board.display();
    this.displayResults();
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();
