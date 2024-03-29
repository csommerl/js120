## [5.11 OOP Tic Tac Toe with Bonus Features](https://launchschool.com/lessons/93a83d87/assignments/9123ba93)

[TOC]

## [x] Improved Prompt

```javascript
// obj is the context for `joinOr`; replace it with the correct context.
obj.joinOr([1, 2])                   # => "1 or 2"
obj.joinOr([1, 2, 3])                # => "1, 2, or 3"
obj.joinOr([1, 2, 3], '; ')          # => "1; 2; or 3"
obj.joinOr([1, 2, 3], ', ', 'and')   # => "1, 2, and 3"
```

                                     PEDAC
input:
  1. array
  2. optional separator (`'; '` or `', '`), default `", "`
  3. optional conjunction (`"and"`), default `"or"`
output:
  - string containing each of the elements of the input array
  1. If array length <= 1, return string containing just its elements.
  2. If array length = 2, return string containing the elements separated by conjunction surrounded by spaces. 
  3. Otherwise, all elements separated by separator & last 2 separated by conjunction.

Mental model:
- reduce
- transform

Algorithm:
1. If array length <= 1, return coerced string.
2. If array length is 2, return join with ` conj `.
3. Otherwise:
   a. Use default join with all elements except last.
   b. Append `sep conj `.
   c. Append last element.
   d. Return.

## [x] Play Again

Rules:
1. Display welcome message only once.
2. Display goodbye message only once.
3. After each game, ask whether to play again.
  - accept y,n,Y,N

## [x] Computer AI: Defense

### First model:

- let `threat` = `getWinningKey(HUMAN_MARKER)`. If not `null`, play threat. Otherwise play random. 
- Use `countMarkersFor` to get threats. If a row in `POSSIBLE_WINNING_ROWS` returns `2` for `HUMAN_MARKER`, then play the 3rd square in that row. Otherwise, play random choice.
- To get the 3rd square, find the first square for which `isUnused`.

                                     PEDAC

`getWinningKey` / `getWinningSquare`

### Alternative model:

- Iterate through `validChoices`. If any choice would result in the human winning, play that choice. Otherwise, play random choice.
- A choice would result in human winning when `countMarkersFor` would return `3` for some row with that choice.
- Advantage of this approach is that it would very straightforwardly help with next bonus feature.

## [x] Computer AI: Offense

## [x] Another Computer Move Improvement

## [x] Refactor the Move Methods

## [x] Keep Score

- [x] `playIndefinitely`
- [x] `playMatch`
- keep score as a state of each player
  - [x] `updateScore` as method of player
  - [x] call method with `updateScore` method in `TTTGame`
  - [x] `resetScore`
  - [ ] use `resetScore`
- [x] `getMatchWinner` in `TTTGame`
  - [x] use `getScore` method in each player
  - [x] use `winningScore` property of `TTTGame`
- [x] `displayScore` method in the `TTTGame` object

## [ ] Take Turns Going First

- use for loop?
  - problem: break statement needs to go to outer while loop
- human goes first in first round, then it alternates
- create `moveOrder` instance property
  - array of `humanMoves` and `computerMoves`
- `updateMoveOrder`

## [ ] On Your Own Ideas

1. Minimax algorithm
2. Bigger board
3. More players

---
