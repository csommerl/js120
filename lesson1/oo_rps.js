function createPlayer(playerType) {
  return {
    playerType,

    choose() {
      if (this.isHuman()) {
        // TODO
      } else {
        
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
}

function createMove() {
  return {
    // TODO
  };
}

function createRule() {
  return {
    // TODO
  };
}

let compare = function(move1, move2) {
  // TODO
};

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    // TODO
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();