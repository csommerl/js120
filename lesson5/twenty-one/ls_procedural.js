const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log('==============');
  prompt(`Dealer has ${dealerCards}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${playerCards}, for a total of: ${playerTotal}`);
  console.log('==============');

  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('-------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  while (!/^[y|n]$/i.test(answer)) {
    prompt('Invalid input. Enter one of y/Y/n/N.');
    answer = readline.question();
  }
  
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

// Main Program
while (true) {
  prompt('Welcome to Twenty-One!');

  // declare and initialize vars
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${playerTotal}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards, dealerTotal, playerTotal);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  // dealer turn
  prompt('Dealer turn...');

  while (dealerTotal < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards are now: ${dealerTotal}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${dealerTotal}`);
    displayResults(dealerCards, playerCards, dealerTotal, playerTotal);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  // both player and dealer stays - compare cards!
  displayResults(dealerCards, playerCards, dealerTotal, playerTotal);

  if (!playAgain()) break;
}