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
        choice = readline.question('Please choose rock, paper, or scissors:\n');
        if (this.choices.includes(choice)) break;
        console.log('Sorry, invalid choice.\n');
      }

      this.move = choice;
    },
  };
}


const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),
  winner: null,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors Goodbye!');
  },

  displayChoices() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  getWinner() {
    // TODO
  },

  displayWinner() {
    // TODO
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayChoices();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};


RPSGame.play();
