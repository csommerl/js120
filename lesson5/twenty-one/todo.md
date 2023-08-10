## [5.12 OOP Twenty-One Overview](https://launchschool.com/lessons/93a83d87/assignments/ab05d402)

## Description

See [JS101 5.9 Assignment: Twenty-One](https://launchschool.com/lessons/fb4809a8/assignments/62238c60)

- 21 is a *game* between two *participants*: a *player* and the *dealer*.
- When the game starts, the cards are *dealt*: each receives a *hand* of two cards from the deck.
  - The *hand's value* is the sum of the value of its cards.
- The *deck* consists of 52 *cards*:
  - 4 suits
  - 13 values
  - An ace's value will be 1 or 11 depending on the circumstances.
- The cards are *displayed*:
  - The player can only see 1 of the dealer's cards.
  - The player can see all of their own cards.
- Each participant takes *turns*.
- The *player's turn*:
  - The player can *hit* or *stay*.
  - If the player hits, they are *dealt* another card.
  - If the player stays, they don't receive any more cards.
- The *dealer's turn*:
  - hit until the total is at least 17 or bust.
- A player *busts* when their cards' value is greater than the *limit*, 21.
- The *winner* is the one who either does not bust or whose hand's value is greater, and the other player is the *loser*. If neither condition is met, it's a tie.

## Identify the Nouns and Verbs

## Organize

- Game: play, round, turn, round winner
- Participants: hand
  - Player: hit, stay
  - Dealer: move/hit,
- Hand: hand value, display, bust
- Deck: cards, deal hands, deal card
- Card: suit, value, points

## Additional Requirements

## Scaffolding and Spike

Where to put `dealHand`?
- Putting it in `deck` would require passing participant as an argument.
- So, to avoid dependency, it seems that it would be good to have it as a method of `TwentyOneGame`.

More general lesson?: When a method involves two objects interacting, put the method in an object that has those two objects as collaborators.

---

## My Summary of Steps for Creating an OOP program.

Steps:

1. Write a description of the problem.
2. Extract significant nouns & verbs.
3. Organize & associate nouns & verbs.
   - Distinguish between verbs and states.
4. Write scaffolding stubs and spike code.
    - Outline classes & their methods.
    - Write *stubs*, asking questions about data structures, relations between classes, etc.
    - Write a *spike* in the orchestration engine.
    - More general lesson?: When a method involves two objects interacting, put the method in an object that has those two objects as collaborators.
    - Test the code.
    - Take care of low-hanging fruit.
    - Work through the harder problems within the spike, and at each step, outline the pros and cons of different approaches.

---
