const readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE_MARKER = " ";

  constructor(marker = Square.UNUSED_SQUARE_MARKER) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE_MARKER;
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

  playerFillsRow(player, rowKeys) { // STUB
    return rowKeys.every(squareKey => {
      let square = this.squares[squareKey];
      return square.getMarker() === player.getMarker();
    });
  }

  unusedSquareKeys() {
    return Object.keys(this.squares)
      .filter(key => {
        let square = this.squares[key];
        return square.isUnused();
      });
  }

  isFull() {
    return this.unusedSquareKeys().length === 0;
  }

  markSquareAt(squareKey, marker) {
    let square = this.squares[squareKey];
    square.mark(marker);
  }

  display() {
    console.clear();
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
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super("X");
  }

  move(board) {
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
  constructor() {
    super("O");
  }

  move(board) {
    let validChoices = board.unusedSquareKeys();
    let idx = Math.floor(Math.random() * validChoices.length);
    let choice = validChoices[idx];
    board.markSquareAt(choice, this.marker);
  }
}

class TTTGame {
  static WINNING_ROWS = [
    [ "1", "2", "3", ],
    [ "4", "5", "6", ],
    [ "7", "8", "9", ],
    [ "1", "4", "7", ],
    [ "2", "5", "8", ],
    [ "3", "6", "9", ],
    [ "1", "5", "9", ],
    [ "3", "5", "7", ],
  ];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() { // STUB
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("The computer won!");
    } else {
      console.log("It was a tie.");
    }
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.WINNING_ROWS.some(row => {
      return this.board.playerFillsRow(player, row);
    });
  }

  play() {
    this.board.display();
    this.displayWelcomeMessage();

    while (true) {
      this.human.move(this.board);
      if (this.gameOver()) break;

      this.computer.move(this.board);
      if (this.gameOver()) break;

      this.board.display();
    }

    this.board.display();
    this.displayResults();
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();
