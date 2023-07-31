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

Namely, You *can't* use the key of one state in an object to pass that state's value to the value of another *state* of that object. Here, if `validMoves` where made a state of `RPSGame`, its value is not accessible by the `createPlayer` function within the states `human` and `computer`.

But you *can* use the key of one state in an object to pass that state's value to the function body of a *method* of that object.

Solutions:

- Option 1: Given the previous point, one option that works is to make `createPlayer` a method of the game as a whole.
- Option 2: Another option that works is to keep `createPlayer` as a separate global function that has a `choices`/`validMoves` parameter. Then, to avoid the general limitation above, each of the player states of the game can initially be `null` but later assigned using the `createPlayer` function (passed `this.choices`) within the orchestration engine (`play`).
- Option 3: A third option that is unclear whether it works: use `Object.assign` to add `choices` as a state of the player objects after they are created.
- Option 4: Perhaps `validMoves` doesn't need to be passed, but instead it can just be accessed from the global constant?
- Option 5: Pass `rules` / `validMoves` / `choices` to `choose` method.
- Option 6: Create the value prior to creating the object, and then add the value to the object.
  - Problem: this will only work within an object factory, not an object literal like `RPSGame`.
- **Option 7: Classes can be used.**
  - the rules can be put into a static property of the class `RPSGame`, which can be accessed within the `constructor` function.
  - they can also be put into an instance property within the constructor function, followed by adding the players: this works since the constructor function works line by line.
- Option 8: you don't have to add all the properties at once, see `multiline.js`.

### How to avoid global constants?

TODO: To deal with the previous problem, one solution might be to have a factory function of `RPSGame`. Then, at the top of that function body, a constant of `validMoves` could be declared. It seems that then closure could be used to access the constant within the values of `RPSGame`'s keys.

- But then ESLint would complain about the function being too long.

- Or maybe only if `createPlayer` is a nested function within the factory function for creating `RPSGame`?
- Or maybe only if `createPlayer` is a method of `RPSGame`?

---

## [1.13 Assignment: OO RPS Bonus Features](https://launchschool.com/lessons/fb892747/assignments/805b45f6)

### [x] Keeping score

- [x] Create `match` object.
  - [x] Create `score` as state.
  - [x] Create `playMatch` as behavior.
  - Problem: nested `this`, e.g., when accessing the players?
- [x] Create `playRound`.
  - [x] Rename `getWinner` and `displayWinner`.
  - [x] Reset human and computer `move` to `null` after each round?
- [x] Create `score` noun (new object or state of existing object?).
  - [x] Reset score.
  - Create an object only if it should have both behavior and state.
  - No behavior of score.
  - One behavior needed is `updateScore`, but that could simply be a behavior of a different object.
  - Perhaps create a `round` object and a `match` object.8
- [x] Whoever reaches 5 points first wins.

### [x] Add [Lizard and Spock](http://www.samkass.com/theories/RPSSL.html)

- [x] Add to `validMoves`.
- [x] Add to `winRules`.

### [x] Keep track of a history moves for the game session

- [x] Create `rules` and `choices` will just be `Object.keys(rules)`.
- [x] Pass `choices` to `choose` method.
  - But maybe I want `rules` to be available to the player object as a whole,
    e.g., in order to create a history?
- [x] Do PEMDAC.
- [x] Create data structure (new or existing object?).
- [x] Keep track of which moves correlate with winning or losing? (for next bonus feature)
- [ ] Display history.

#### PEMDAC

Inputs:

- player objects
- match, round, score

Output:

1. history of moves for a session of the game, across matches & rounds
  - for human and computer
  - ability to display
2. advanced rules for computer `choose`
  - for each human choice, percentage of wins
  - for computer choose, weighting of choices, based on percentage of wins for each human choice

Data Structures

- For each move:
  - times played
  - wins

```js
this.history = {
  'rock': {
    count: 5,
    wins: 1,
    percWins: 0.2,
  },
  'paper': ...
};
```

### [x] Adjust computer choice based on history: Use history of moves to help computer make its moves

- [x] Option 1: Based on history, give weights to each of the possible moves, e.g., computer plays proportionately less often moves that cause the human to win.
- [ ] Option 2: Computer plays what will beat the most common human move.

PEMDAC

inputs
- history
- rules (pass to `createComputer` instead of `Object.keys(rules)`?
- choose

outputs
- `weights` object: use current `choices` array
- `weightedChoices`: use weights

weights:
```js
{
  'rock': 1, // multiplier of 1, i.e., include only once in weigtedChoices
  'paper': 3,
  ...
}
```

weightedChoices:
```js
['rock', 'paper', 'paper', 'paper', ...]
```

Overall algo
1. Pass humanHistory to computer.choose().
2. Call getWeightedChoices.
    a. Call updateWeights.
        - 
    b. Use weights to get weightedChoices.
3. Get random from weightedChoices.


Algorithm for weights
1. Create initial weights obj with all choices having a value of 1.
2. Iterate over humanMove in humanHistory.
  - if percWins < 50, continue
  - Declare multiplier and initializse to 0.
  - +1 to multiplier for every 10 percentage points above 50
  - Iterate over move in rules:
    - If humanMove is in array of the value of move,
    increment weight of move by multiplier


Example
```js
humanHistory = {
  'rock': { count: 5, wins: 1, percWins: 0.2, },
  'paper': { count: 5, wins: 4, percWins: 0.8, },
  : { count: , wins: , percWins: , },
  : { count: , wins: , percWins: , },
  : { count: , wins: , percWins: , },
};
```
---
