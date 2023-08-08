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

## [ ] Computer AI: Defense

## [ ] Computer AI: Offense

## [ ] Another Computer Move Improvement

## [ ] Refactor the Move Methods

## [ ] Keep Score

## [ ] Take Turns Going First

## [ ] On Your Own Ideas

1. Minimax algorithm
2. Bigger board
3. More players

---
