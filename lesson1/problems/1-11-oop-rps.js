const readline = require('readline-sync');


function createPlayer() {
  return {
    choices: ['rock', 'paper', 'scissors'],
    move: null,
  };
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIdx = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIdx];
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
        choice = readline.question('\nPlease choose rock, paper, or scissors:\n');
        if (this.choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}


const RPSGame = {
  winRules: { rock: ['scissors'], paper: ['rock'], scissors: ['paper'], },
  human: createHuman(),
  computer: createComputer(),
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
    let answer = readline.question('\nWould you like to play again? (y/n)\n');
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
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
