const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    validMoves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    moveHistory: {},
    updateMoveHistory(move) {
      this.moveHistory[move] = this.moveHistory[move] ?? 0;
      this.moveHistory[move] += 1;
    },
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIndex = Math.floor(Math.random() * this.validMoves.length);
      this.move = this.validMoves[randomIndex];
      this.updateMoveHistory(this.move);
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
        choice = readline.question(`-----\nPlease choose one of: ${this.validMoves.join(', ')}: `); // use template literal
        if (this.validMoves.includes(choice)) break; // enable 1 character input
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.updateMoveHistory(this.move);
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createMatch() { // unnecessary? one benefit is that it makes it easy to reset everything
  return {
    score: {human: 0, computer: 0, tie: 0},
    matchWinner: null,  // move to property of RPSGame?
    round: createRound(),
  };
}

function createRound() { // unnecessary?
  return {
    roundWinner: null,
  };
}

const RPSGame = {
  frontPadding: '-----\n',
  endPadding: '\n-----',
  pointsToWin: 5,
  winningMoves: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
  },

  human: createHuman(),
  computer: createComputer(),
  match: createMatch(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayChoices() {
    console.log(`${this.frontPadding}You chose: ${this.human.move}\n` +
      `The computer chose: ${this.computer.move}`);
  },

  displayScore() { // add tie
    console.log(`You currently have ${this.match.score.human} points, ` + // fix grammar if 1 point
      `and the computer currently has ${this.match.score.computer} points.`); // fix grammar if 1 point
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  updateRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (this.winningMoves[humanMove].includes(computerMove)) {
      this.match.round.roundWinner = 'human';
    } else if (this.winningMoves[computerMove].includes(humanMove)) {
      this.match.round.roundWinner = 'computer';
    } else {
      this.match.round.roundWinner = 'tie';
    }
  },

  updateScore() {
    this.match.score[this.match.round.roundWinner] += 1;
  },

  displayRoundWinner() {
    switch (this.match.round.roundWinner) {
      case 'human':
        console.log(`You win the round!${this.endPadding}`);
        break;
      case 'computer':
        console.log(`The computer wins the round!${this.endPadding}`);
        break;
      case 'tie':
        console.log(`It's a tie.${this.endPadding}`);
    }
  },

  updateMatchWinner() {
    if (this.match.score.human === this.pointsToWin) {
      this.match.matchWinner = 'human';
    } else if (this.match.score.computer === this.pointsToWin) {
      this.match.matchWinner = 'computer';
    }
  },

  displayMatchWinner() {
    if (this.match.matchWinner === 'human') {
      console.log(`${this.frontPadding}You won the match!${this.endPadding}`);
    } else if (this.match.matchWinner === 'computer') {
      console.log(`${this.frontPadding}The computer won the match.${this.endPadding}`);
    }
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    return answer.toLowerCase()[0] === 'y';
  },

  playMatch() {
    while (!this.match.matchWinner) {
      this.playRound();
      this.updateMatchWinner();
      this.displayScore();
    }
    this.displayMatchWinner();
  },

  playRound() {
    this.human.choose();
    this.computer.choose();
    this.updateRoundWinner();
    this.displayChoices();
    this.displayRoundWinner();
    this.updateScore();
  },

  play() {
    this.displayWelcomeMessage();
    do {
      this.playMatch();
      this.match = createMatch(); // resets the match
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();