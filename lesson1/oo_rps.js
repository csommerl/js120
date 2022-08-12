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

function createMatch(...players) { // TO DO
  return {
    score: {human: 0, computer: 0},
    roundWinner: null,
    matchWinner: null,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  match: createMatch(this.human, this.computer), // TO DO

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayChoices() {
    console.log(`-----\nYou chose: ${this.human.move}\n` +
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
      this.match.roundWinner = 'human';
      this.match.score.human += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
      this.match.roundWinner = 'computer';
      this.match.score.computer += 1;
    } else {
      this.match.roundWinner = 'tie';
    }
  },

  displayScore() {
    console.log(`You currently have ${this.match.score.human} points, and the computer currently has ${this.match.score.computer} points.\n-----`);
  },

  displayRoundWinner() {
    if (this.match.roundWinner === 'human') {
      console.log('You win the round!\n-----');
    } else if (this.match.roundWinner === 'computer') {
      console.log('The computer wins the round!\n-----');
    } else {
      console.log('It\'s a tie.\n-----');
    }
  },

  getMatchWinner() {
    if (this.match.score.human === WINNING_SCORE) {
      this.match.matchWinner = 'human';
      console.log('You won the match!\n-----');
    } else if (this.match.score.computer === WINNING_SCORE) {
      this.match.matchWinner = 'computer';
      console.log('The computer won the match.\n-----');
    }
  },

  resetMatch() {
    this.match.matchWinner = null;
    this.match.score.human = 0;
    this.match.score.computer = 0;
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (!this.match.matchWinner) {
        this.human.choose();
        this.computer.choose();
        this.displayChoices();
        this.getRoundWinner();
        this.displayRoundWinner();
        this.displayScore();
        this.getMatchWinner();
      }

      if (!this.playAgain()) break;
      this.resetMatch();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();