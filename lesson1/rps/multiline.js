const readline = require('readline-sync');

function createHistory(moves) {
  return moves.reduce((history, move) => {
    history[move] = { 'Times Played': 0, 'Wins': 0, 'Win Percentage': 0, };
    return history;
  }, {});
}

function createWeights(moves) {
  return moves.reduce((obj, move) => {
    obj[move] = 1;
    return obj;
  }, {});
}

function createPlayer(moves) {
  return {
    move: null,
    history: createHistory(moves),

    updateHistory(isWinner) {
      const moveProp = this.history[this.move];
      moveProp['Times Played'] += 1;

      if (isWinner) {
        moveProp['Wins'] += 1;
      }

      moveProp['Win Percentage'] = Math.round(moveProp['Wins'] / moveProp['Times Played'] * 100);
    },

    showHistory() {
      console.log('Your history of moves and corresponding wins is as follows:');
      console.table(this.history);
    },
  };
}

// eslint-disable-next-line max-lines-per-function
function createComputer(gameRules) {
  const choices = Object.keys(gameRules);
  let playerObject = createPlayer(choices);

  let computerObject = {
    weights: null,
    weightedChoices: null,

    updateWeights(humanHistory) {
      let weights = createWeights(choices);

      for (let humanMove in humanHistory) {
        let percWins = humanHistory[humanMove]['Win Percentage'];

        if (percWins <= 50) continue;

        let addedWeight = Math.floor((percWins - 50) / 10);

        for (let computerMove in gameRules) {
          if (!gameRules[computerMove].includes(humanMove)) continue;
          weights[computerMove] += addedWeight;
        }
      }

      this.weights = weights;
    },

    setWeightedChoices(humanHistory) {
      this.updateWeights(humanHistory);

      const weightedChoices = [];

      for (let choice in this.weights) {
        let count = this.weights[choice];
        let newChoices = Array(count).fill(choice);
        weightedChoices.push(...newChoices);
      }

      this.weightedChoices = weightedChoices;
    },

    choose(humanHistory) {
      this.setWeightedChoices(humanHistory);
      let randomIdx = Math.floor(Math.random() * this.weightedChoices.length);
      this.move = this.weightedChoices[randomIdx];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman(gameRules) {
  const choices = Object.keys(gameRules);
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

    setWinner() {
      let humanWin = rules[human.move].includes(computer.move);

      if (human.move === computer.move) {
        this.winner = 'tie';
      } else {
        this.winner = humanWin ? 'human' : 'computer';
      }
    },

    showResult() {
      console.clear();
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
      human.choose();
      computer.choose(human.history);

      this.setWinner();
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

    setWinner() {
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
        this.setWinner();
      }

      this.showWinner();
      human.showHistory();
    },
  };
}

const RPSGame = {
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
    console.clear();
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

RPSGame.computer = createComputer(RPSGame.rules);
RPSGame.human = createHuman(RPSGame.rules);

RPSGame.play();
