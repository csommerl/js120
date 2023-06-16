const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIdx = Math.floor(Math.random() * RPSGame.validMoves.length);
      this.move = RPSGame.validMoves[randomIdx];
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
        choice = readline.question(`\nPlease choose one of: ${RPSGame.validMoves.join(', ')}\n`);
        if (RPSGame.validMoves.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createRound(human, computer, winCombos) {
  return {
    getWinner() {
      let humanWin = winCombos[human.move].includes(computer.move);

      if (human.move === computer.move) {
        this.winner = 'tie';
      } else {
        this.winner = humanWin ? 'human' : 'computer';
      }
    },

    displayResult() {
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
      this.displayResult();
    },
  };
}

const RPSGame = {
  computer: null,
  human: null,
  winner: null,
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
    this.computer = createComputer();
    this.human = createHuman();

    while (true) {
      let round = createRound(this.human, this.computer, this.winRules);
      round.play();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
