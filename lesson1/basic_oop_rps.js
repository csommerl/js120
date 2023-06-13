const readline = require('readline-sync');


function createPlayer(playerType) {
  return {
    playerType,
    choices: ['rock', 'paper', 'scissors'], // TODO: move to game object
    move: null,

    choose() {
      if (this.isHuman()) {
        this.humanChoose();
      } else {
        this.computerChoose();
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },

    computerChoose() {
      let randomIdx = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIdx];
    },

    humanChoose() {
      let choice;

      while (true) {
        choice = readline.question('\nPlease choose rock, paper, or scissors:\n');
        if (this.choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
}


const RPSGame = {
  winningCombos: {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper'],
  },
  human: createPlayer('human'),
  computer: createPlayer('computer'),
  winner: null,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('\nThanks for playing Rock, Paper, Scissors Goodbye!');
  },

  displayChoices() {
    console.log(`\nYou chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  getWinner() {
    if (this.winningCombos[this.human.move].includes(this.computer.move)) {
      this.winner = 'human';
    } else if (this.winningCombos[this.computer.move].includes(this.human.move)) {
      this.winner = 'computer';
    } else {
      this.winner = 'tie';
    }
  },

  displayWinner() {
    console.log(`\n${this.winner}`);
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayChoices();
    this.getWinner();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};


RPSGame.play();
