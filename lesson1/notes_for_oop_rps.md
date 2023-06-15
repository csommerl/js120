# OOP RPS Notes and Questions

[TOC]

---

## [1.10 Walk-through: OO RPS](https://launchschool.com/lessons/fb892747/assignments/a54702fd)

### When to create new object types?

It seems unclear whether having a factory function for both the human player and the computer player is a good idea, since the two players are very different in some respects. (Lesson 1.11 addresses this worry!)

*Advantages* of making one factory function for both:

- The factory function reduces the amount of redundant code, for example:
  - `choices`
  - `move`

*Disadvantages* of doing so:

- But the factory function also leads to creating a bunch of extra code, for example:
  - `playerType`
  - `isHuman`
  - `choose`

### How to organize nouns with complex relationships?

The RPS game has both players and rules (valid moves and conditions for winning). But these sub-objects interact with each other. For example, the players have the `move` behavior, but that behavior is defined in terms of `validMoves`.

The walkthrough embeds the rules within the player objects. That seems to have two problems: 1) it's unintuitive, since the rules are part of the game overall; and, 2) it might lead to redundant code, e.g., the array of possible moves being duplicated within the code for the `choose` method: once for the human player and once for the computer player.

*The problem* then becomes how to capture my intuition in code.

For example, the idea can't be captured by having the choices be a state/property of `RPSGame`. That's because of a general limitation (in JavaScript) of how code for objects can be written.

Namely, you *can't use the key of one state in an object to pass that state's value as an argument for the value of another key*. Here, if `validMoves` where made a state of `RPSGame`, its value is not accessible by the `createPlayer` function within the states `human` and `computer`.

But you *can* use the value of one key within the value of other keys, including the function bodies of methods.

TODO: Could this be solved by making `createPlayer` a method of the game as a whole?

### How to avoid global constants?

TODO: To deal with the previous problem, one solution might be to have a factory function of `RPSGame`. Then, at the top of that function body, a constant of `validMoves` could be declared. It seems that then closure could be used to access the constant within the values of `RPSGame`'s keys.

- But then ESLint would complain about the function being too long.

- Or maybe only if `createPlayer` is a nested function within the factory function for creating `RPSGame`?
- Or maybe only if `createPlayer` is a method of `RPSGame`?

---

## [1.13 Assignment: OO RPS Bonus Features](https://launchschool.com/lessons/fb892747/assignments/805b45f6)

### [ ] Keeping score

- [ ] Create `match` object.
  - [ ] Create `score` as state.
  - [ ] Create `playMatch` as behavior.
  - Problem: nested `this`, e.g., when accessing the players?
- [ ] Create `playRound`.
  - [ ] Rename `getWinner` and `displayWinner`.
  - [ ] Reset human and computer `move` to `null` after each round?
- [ ] Create `score` noun (new object or state of existing object?).
  - Create an object only if it should have both behavior and state.
  - No behavior of score.
  - One behavior needed is `updateScore`, but that could simply be a behavior of a different object.
  - Perhaps create a `round` object and a `match` object.8
- [ ] Whoever reaches 5 points first wins.

### [ ] Add [Lizard and Spock](http://www.samkass.com/theories/RPSSL.html)

- [ ] Add to `validMoves`.
- [ ] Add to `winRules`.

### [ ] Keep track of a history moves for the game session

- [ ] Create data structure (new or existing object?).
- [ ] Keep track of which moves correlate with winning or losing? (for next bonus feature)
- [ ] Display history.

### [ ] Adjust computer choice based on history: Use history of moves to help computer make its moves

- [ ] Option 1: Based on history, give weights to each of the possible moves, e.g., computer plays proportionately less often moves that cause the human to win.
- [ ] Option 2: Computer plays what will beat the most common human move.

---
