const readline = require('readline-sync');
const VALID_MOVES = ['rock', 'paper', 'scissors'];

// eslint-disable-next-line max-lines-per-function
function createPlayer(playerType) {
  return {
    playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          choice = readline.question('Please choose rock, paper, or scissors: ');
          if (VALID_MOVES.includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;

      } else {
        let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
        this.move = VALID_MOVES[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
}

function createMove() {
  return {
    // TODO
  };
}

function createRule() {
  return {
    // TODO
  };
}

let compare = function(move1, move2) {
  // TODO
};

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

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

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('The computer wins!');
    } else {
      console.log('It\'s a tie.');
    }
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayChoices();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();