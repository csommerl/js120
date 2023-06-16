const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer(choices) {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman(choices) {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        choice = readline.question(`\nPlease choose one of: ${choices.join(', ')}\n`);
        if (choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createRound(human, computer, winRules) {
  return {
    winner: null,

    getWinner() {
      let humanWin = winRules[human.move].includes(computer.move);

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
      human.choose();
      computer.choose();
      this.getWinner();
      this.showResult();
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

function createMatch(human, computer, winRules) {
  return {
    round: null,
    score: null,

    showInstructions: null, // TODO
    getWinner: null, // TODO
    showWinner: null, // TODO

    play() {
      this.round = createRound(human, computer, winRules);
      this.score = createScore();
      // show instructions

      for (let round = 0; round < 5; ++round) { // update win condition
        this.round.play();
        this.score[this.round.winner] += 1;
        this.score.show();
      }

      console.log('The match is over!'); // Replace with winner
    },
  };
}

const RPSGame = {
  computer: null,
  human: null,
  match: null,
  validMoves: [ 'rock', 'paper', 'scissors', 'spock', 'lizard', ],

  winRules: {
    rock: [ 'scissors', 'lizard', ],
    paper: [ 'rock', 'spock', ],
    scissors: [ 'paper', 'lizard', ],
    spock: [ 'rock', 'scissors', ],
    lizard: [ 'paper', 'spock', ],
  },

  name() {
    return this.validMoves
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
    this.displayWelcomeMessage();
    this.computer = createComputer(this.validMoves);
    this.human = createHuman(this.validMoves);
    this.match = createMatch(this.human, this.computer, this.winRules);

    while (true) {
      this.match.play();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
