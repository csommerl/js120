const readline = require('readline-sync');

function createHistory(moves) {
  return moves.reduce((history, move) => {
    history[move] = { count: 0, wins: 0, };
    return history;
  }, {});
}

function createPlayer(moves) {
  return {
    move: null,
    history: createHistory(moves),

    updateHistory(isWinner) {
      this.history[this.move]['count'] += 1;
      if (isWinner) {
        this.history[this.move]['wins'] += 1;
      }
    },

    showHistory() {
      console.log('Your history of moves and corresponding wins is as follows:');
      console.table(this.history); // TODO: revise to give percentages
    },
  };
}

function createComputer(choices) {
  let playerObject = createPlayer(choices);

  let computerObject = {
    choose() {
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman(choices) {
  let playerObject = createPlayer(choices);

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(`\nPlease choose one of: ${choices.join(', ')}`);
        choice = readline.prompt();
        if (choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

// eslint-disable-next-line max-lines-per-function
function createRound(human, computer, rules) {
  return {
    winner: null,
    choices: Object.keys(rules),

    getWinner() {
      let humanWin = rules[human.move].includes(computer.move);

      if (human.move === computer.move) {
        this.winner = 'tie';
      } else {
        this.winner = humanWin ? 'human' : 'computer';
      }
    },

    showResult() {
      console.log(`\nYou chose: ${human.move}`);
      console.log(`The computer chose: ${computer.move}`);
      if (this.winner === 'human') {
        console.log('You win!');
      } else if (this.winner === 'computer') {
        console.log('Computer wins!');
      } else {
        console.log("It's a tie");
      }
    },

    play() {
      human.choose(this.choices);
      computer.choose(this.choices);

      this.getWinner();
      this.showResult();

      human.updateHistory(this.winner === 'human');
      computer.updateHistory(this.winner === 'computer');
    },
  };
}

function createScore() {
  return {
    computer: 0,
    human: 0,

    show() {
      console.log(`You now have ${this.human} points, and the computer has ${this.computer} points.`);
    },
  };
}

// eslint-disable-next-line max-lines-per-function
function createMatch(human, computer, rules) {
  return {
    winScore: 5,
    round: null,
    score: createScore(),
    winner: null,

    showInstructions() {
      console.log(`\nThe first player to reach ${this.winScore} points wins the match. Good luck!`);
    },

    getWinner() {
      if (this.score.human === this.winScore) {
        this.winner = 'human';
      } else if (this.score.computer === this.winScore) {
        this.winner = 'computer';
      }
    },

    showWinner() {
      console.log(`${this.winner === 'human' ? 'You' : 'The computer'} won the match!`);
    },

    play() {
      this.showInstructions();

      while (!this.winner) {
        this.round = createRound(human, computer, rules); // not necessary to create every time
        this.round.play();
        this.score[this.round.winner] += 1;
        this.score.show();
        this.getWinner();
      }

      this.showWinner();
      human.showHistory();
    },
  };
}

const RPSGame = {
  computer: null,
  human: null,
  match: null,
  rules: {
    rock: [ 'scissors', 'lizard', ],
    paper: [ 'rock', 'spock', ],
    scissors: [ 'paper', 'lizard', ],
    spock: [ 'rock', 'scissors', ],
    lizard: [ 'paper', 'spock', ],
  },

  name() {
    return Object.keys(this.rules)
      .map(choice => choice[0].toUpperCase() + choice.slice(1))
      .join(', ');
  },

  displayWelcomeMessage() {
    console.log(`Welcome to ${this.name()}!`);
  },

  displayGoodbyeMessage() {
    console.log(`\nThanks for playing ${this.name()}. Goodbye!`);
  },

  playAgain() {
    let answer = readline.question('\nWould you like to play again? (y/n)\n');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    const choices = Object.keys(this.rules);
    this.human = createHuman(choices);
    this.computer = createComputer(choices);

    this.displayWelcomeMessage();

    this.match = createMatch(this.human, this.computer, this.rules);

    while (true) {
      this.match.play();
      if (!this.playAgain()) break;
      this.match = createMatch(this.human, this.computer, this.rules);
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
