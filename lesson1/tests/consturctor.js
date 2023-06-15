const readline = require('readline-sync');


function createPlayer(playerType, choices) {
  return {
    playerType,
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
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    },

    humanChoose() {
      let choice;

      while (true) {
        choice = readline.question('\nPlease choose rock, paper, or scissors:\n');
        if (choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
}


const RPSGame = {
  choices: ['rock', 'paper', 'scissors'],
  winRules: { rock: ['scissors'], paper: ['rock'], scissors: ['paper'], },
  human: null,
  computer: null,
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

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n)\n');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();

    this.human = createPlayer('human', this.choices);
    this.computer = createPlayer('computer', this.choices);

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
