let readline = require("readline-sync");

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

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquareKey(key));
  }

  isUnusedSquareKey(key) {
    return this.squares[key].isUnused();
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  updateScore() {
    ++this.score;
  }

  resetScore() {
    this.score = 0;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static WINNING_SCORE = 3;

  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static joinOr(arr, sep = ", ", conj = "or") {
    let str;
    if (arr.length <= 1) {
      str = String(arr);
    } else if (arr.length === 2) {
      str = arr.join(` ${conj} `);
    } else {
      str = arr.slice(0, -1).join(sep);
      str += `${sep}${conj} ${arr[arr.length - 1]}`;
    }

    return str;
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();
    // this.playIndefinitely();
    this.playMatch();
    this.displayGoodbyeMessage();
  }

  playIndefinitely() {
    do {
      this.playRound();
      this.board.reset();
    } while (this.playAgain());
  }

  playMatch() {
    while (!this.getMatchWinner()) {
      this.playRound();
      this.updatePlayerScores();
      this.displayScores();
      this.board.reset();
    }

    this.displayMatchWinner();
  }

  playRound() {
    this.board.display();

    while (true) {
      this.humanMoves();
      if (this.roundOver()) break;

      this.computerMoves();
      if (this.roundOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayRoundResults();
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

    console.log("");
    console.log("");
    console.clear();
    return answer === 'y';
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayRoundResults() {
    if (this.isRoundWinner(this.human)) {
      console.log("You won the round! Congratulations!");
    } else if (this.isRoundWinner(this.computer)) {
      console.log("I won the round! I won! Take that, human!");
    } else {
      console.log("A tied round. How boring.");
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  getWinningKey(player) {
    let winningKey;

    for (let row of TTTGame.POSSIBLE_WINNING_ROWS) {
      if (this.board.countMarkersFor(player, row) === 2) {
        winningKey = row.find(key => {
          return this.board.isUnusedSquareKey(key);
        });
      }
    }

    return winningKey;
  }

  computerMoves() {
    let move = this.getCenterSquareMove() ??
      this.getOffensiveMove() ??
      this.getDefensiveMove() ??
      this.getRandomMove();
    this.board.markSquareAt(move, this.computer.getMarker());
  }

  getCenterSquareMove() {
    return this.board.isUnusedSquareKey(5) ? 5 : null;
  }

  getDefensiveMove() {
    return this.getWinningKey(this.human);
  }

  getOffensiveMove() {
    return this.getWinningKey(this.computer);
  }

  getRandomMove() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  roundOver() {
    return this.board.isFull() || this.someoneWonRound();
  }

  someoneWonRound() {
    return this.isRoundWinner(this.human) || this.isRoundWinner(this.computer);
  }

  isRoundWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  updatePlayerScores() {
    if (this.isRoundWinner(this.human)) {
      this.human.updateScore();
    } else if (this.isRoundWinner(this.computer)) {
      this.computer.updateScore();
    }
  }

  displayScores() {
    console.log(`You: ${this.human.getScore()}`);
    console.log(`Computer: ${this.computer.getScore()}`);
  }

  getMatchWinner() {
    if (this.human.getScore() === TTTGame.WINNING_SCORE) {
      return this.human;
    } else if (this.computer.getScore() === TTTGame.WINNING_SCORE) {
      return this.computer;
    }
  }

  displayMatchWinner() {
    console.log(`${this.getMatchWinner().constructor.name} wins the match!`);
  }
}

let game = new TTTGame();
game.play();
