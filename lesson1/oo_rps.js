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
        choice = readline.question('-----\nPlease choose rock, paper, or scissors: ');
        if (VALID_MOVES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createScore() {
  return {
    human: 0,
    computer: 0,
    tie: 0,
  };
}

// eslint-disable-next-line max-lines-per-function
function createMatch() {  // pass players to createScore?
  return {
    score: createScore(),
    matchWinner: null,
    round: createRound(),

    displayScore() {
      console.log(`You currently have ${this.score.human} points, ` +
        `and the computer currently has ${this.score.computer} points.`);
    },

    getMatchWinner() {
      if (this.score.human === WINNING_SCORE) {
        this.matchWinner = 'human';
      } else if (this.score.computer === WINNING_SCORE) {
        this.matchWinner = 'computer';
      }
    },

    displayMatchWinner() {
      console.log(`-----\n${this.matchWinner === 'human' ? 'You' : 'The computer'} won the match.`);
    },

    resetMatch() {
      this.matchWinner = null;
      this.score = createScore();
    },

    playMatch(human, computer) {
      while (!this.matchWinner) {
        this.round.playRound(human, computer, this.score);
        this.displayScore();
        this.getMatchWinner();
        if (this.matchWinner) {
          this.displayMatchWinner();
        }
      }
      this.resetMatch();
    },
  };
}

// eslint-disable-next-line max-lines-per-function
function createRound() {
  return {
    roundWinner: null,

    displayChoices(human, computer) {
      console.log(`-----\nYou chose: ${human.move}\n` +
        `The computer chose: ${computer.move}`);
    },

    getRoundWinner(human, computer) {
      let humanMove = human.move;
      let computerMove = computer.move;

      if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
        this.roundWinner = 'human';
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
        this.roundWinner = 'computer';
      } else {
        this.roundWinner = 'tie';
      }
    },

    displayRoundWinner() {
      if (this.roundWinner === 'human') {
        console.log('You win the round!\n-----');
      } else if (this.roundWinner === 'computer') {
        console.log('The computer wins the round!\n-----');
      } else {
        console.log('It\'s a tie.\n-----');
      }
    },

    resetRound(human, computer) {
      this.roundWinner = null;
      human.move = null;
      computer.move = null;
    },

    playRound(human, computer, score) {
      human.choose();
      computer.choose();

      this.getRoundWinner(human, computer, score);
      score[this.roundWinner] += 1;

      this.displayChoices(human, computer);
      this.displayRoundWinner();

      this.resetRound(human, computer);
    },
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  match: createMatch(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    do {
      this.match.playMatch(this.human, this.computer);
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();