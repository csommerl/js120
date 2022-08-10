const readline = require('readline-sync');
const VALID_MOVES = ['rock', 'paper', 'scissors'];
const WINNING_SCORE = 5;

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
      this.move = VALID_MOVES[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        choice = readline.question('Please choose rock, paper, or scissors: ');
        if (VALID_MOVES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: {human: 0, computer: 0}, // REVISE?
  roundWinner: null,
  matchWinner: null,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayChoices() {
    console.log(`You chose: ${this.human.move}\n` +
      `The computer chose: ${this.computer.move}`);
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  getRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'scissors' && computerMove === 'paper')) {
      this.roundWinner = 'human';
      this.score.human += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
      this.roundWinner = 'computer';
      this.score.computer += 1;
    } else {
      this.roundWinner = 'tie';
    }
  },

  displayScore() {
    console.log(`You currently have ${this.score.human} points, and the computer currently has ${this.score.computer} points.\n`);
  },

  displayRoundWinner() {
    if (this.roundWinner === 'human') {
      console.log('You win the round!\n');
    } else if (this.roundWinner === 'computer') {
      console.log('The computer wins the round!\n');
    } else {
      console.log('It\'s a tie.\n');
    }
  },

  getMatchWinner() { // REVISE?
    if (this.score.human === WINNING_SCORE) {
      this.matchWinner = 'human';
      console.log('You won the match!\n');
    } else if (this.score.computer === WINNING_SCORE) {
      this.matchWinner = 'computer';
      console.log('The computer won the match.\n');
    }
  },

  resetMatch() {
    this.matchWinner = null;
    this.score.human = 0;
    this.score.computer = 0;
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n)\n');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) { // REVISE?
      while (!this.matchWinner) { // REVISE?
        this.human.choose();
        this.computer.choose();
        this.displayChoices();
        this.getRoundWinner();
        this.displayRoundWinner();
        this.displayScore();
        this.getMatchWinner(); // REVISE?
      }

      if (!this.playAgain()) break;
      this.resetMatch();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();