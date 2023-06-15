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

const RPSGame = {
  computer: null,
  human: null,
  winner: null,
  choices: [ 'rock', 'paper', 'scissors', 'spock', 'lizard', ],

  winRules: {
    rock: [ 'scissors', 'lizard', ],
    paper: [ 'rock', 'spock', ],
    scissors: [ 'paper', 'lizard', ],
    spock: [ 'rock', 'scissors', ],
    lizard: [ 'paper', 'spock', ],
  },

  getGameName() {
    return this.choices
      .map(choice => choice[0].toUpperCase() + choice.slice(1))
      .join(', ');
  },

  displayWelcomeMessage() {
    console.log(`Welcome to ${this.getGameName()}!`);
  },

  displayGoodbyeMessage() {
    console.log(`\nThanks for playing ${this.getGameName()}. Goodbye!`);
  },

  getWinner() {
    let humanWin = this.winRules[this.human.move].includes(this.computer.move);

    if (this.human.move === this.computer.move) {
      this.winner = 'tie';
    } else {
      this.winner = humanWin ? 'human' : 'computer';
    }
  },

  displayWinner() {
    console.log(`\nYou chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
    if (this.winner === 'human') {
      console.log('You win!');
    } else if (this.winner === 'computer') {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    let answer = readline.question('\nWould you like to play again? (y/n)\n');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    this.computer = createComputer(this.choices);
    this.human = createHuman(this.choices);

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.getWinner();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
