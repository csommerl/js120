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
  winRules: { rock: ['scissors'], paper: ['rock'], scissors: ['paper'], },
  human: createPlayer('human'),
  computer: createPlayer('computer'),
  winner: null,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('\nThanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  getWinner() {
    if (this.winRules[this.human.move].includes(this.computer.move)) {
      this.winner = 'human';
    } else if (this.winRules[this.computer.move].includes(this.human.move)) {
      this.winner = 'computer';
    } else {
      this.winner = 'tie';
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

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.getWinner();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};


RPSGame.play();
