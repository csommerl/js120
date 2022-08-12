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

function createMatch() {
  return {
    score: {human: 0, computer: 0},
    matchWinner: null,
    round: createRound(),

    resetMatch() {
      this.matchWinner = null;
      this.score.human = 0;
      this.score.computer = 0;
    },
  };
}

function createRound() {
  return {
    roundWinner: null,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  match: createMatch(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayChoices() { // MOVE TO createRound
    console.log(`-----\nYou chose: ${this.human.move}\n` +
      `The computer chose: ${this.computer.move}`);
  },

  displayScore() { // MOVE TO createMatch
    console.log(`You currently have ${this.match.score.human} points, ` +
      `and the computer currently has ${this.match.score.computer} points.`);
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  getRoundWinner() { // MOVE TO createRound
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'scissors' && computerMove === 'paper')) {
      this.match.round.roundWinner = 'human';
      this.match.score.human += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
      this.match.round.roundWinner = 'computer';
      this.match.score.computer += 1;
    } else {
      this.match.round.roundWinner = 'tie';
    }
  },

  displayRoundWinner() { // MOVE TO createRound
    if (this.match.round.roundWinner === 'human') {
      console.log('You win the round!\n-----');
    } else if (this.match.round.roundWinner === 'computer') {
      console.log('The computer wins the round!\n-----');
    } else {
      console.log('It\'s a tie.\n-----');
    }
  },

  getMatchWinner() { // MOVE TO createMatch
    if (this.match.score.human === WINNING_SCORE) {
      this.match.matchWinner = 'human';
      console.log('-----\nYou won the match!\n-----');
    } else if (this.match.score.computer === WINNING_SCORE) {
      this.match.matchWinner = 'computer';
      console.log('-----\nThe computer won the match.\n-----');
    }
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    return answer.toLowerCase()[0] === 'y';
  },

  playMatch() { // MOVE TO createMatch
    while (!this.match.matchWinner) {
      this.playRound();
    }
  },

  playRound() { // MOVE TO createRound
    this.human.choose();
    this.computer.choose();
    this.displayChoices();
    this.getRoundWinner();
    this.displayRoundWinner();
    this.displayScore();
    this.getMatchWinner();
  },

  play() {
    this.displayWelcomeMessage();
    do {
      this.match.resetMatch();
      this.playMatch();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();