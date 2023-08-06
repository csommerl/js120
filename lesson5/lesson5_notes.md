## [Lesson 5: More Object Oriented Programming](https://launchschool.com/lessons/93a83d87/assignments)

[TOC]

---

## [5.1 Introduction](https://launchschool.com/lessons/93a83d87/assignments/09362e48)

---

## [5.2 OOP Tic Tac Toe Overview](https://launchschool.com/lessons/93a83d87/assignments/360f434c)

Difference with RPS: need to represent *game state* because there is a board.

### Game Description

- 2 players
- 1 game board, consisting of 9 squares each at a location relative to the others
- each player makes moves after the other
- if a player's marker is three in a row, then they win
- win conditions
  - any three in the same row
  - any three in the same column
  - three, each of which has a column number matching its row number (1st diagonal)
  - three, 
- tie if no one wins

### Nouns & Verbs

Nouns
- player
- computer
- human
- board
- square
- marker
- row
- column

Verbs
- move
- win
- play

---

## [5.3 OOP Tic Tac Toe with Classes - Part 1](https://launchschool.com/lessons/93a83d87/assignments/56f620e5)

### Scaffolding

A class that is the orchestration engine is commonly placed as the last class in a file, and it has a unique name.

### Orchestrating the Game

Since OOP code doesn't have a procedural step-by-step flow, it can help to write spikes and stubs.

A **spike** is exploratory code that provides a general outline of the flow of a program, providing its structure & general logic.

A **stub** is a placeholder for a function or method that needs to be written or removed later, and they typically are empty or return a constant value.

It's good practice to insert comments indicating both stubs and spikes: `STUB` and `SPIKE`.

### Initial Test

After writing stubs & spikes, it's good to test the code.

---

## [5.4 OOP Tic Tac Toe with Classes - Part 2](https://launchschool.com/lessons/93a83d87/assignments/ea59159e)

At each step, outline the pros and cons of different approaches.

For example, in choosing a data structure for the board, there are 3 options:

1. matrix represented by nested subarrays
   - pro: matches visually
   - con: have to map user choice to 2 indices
   - con: difficult to use 2 indices
2. array of 9 square objects
   - pro: avoid multiple indices
   - con: array indices start at 0, user choice is best starting with 1
3. object with 9 properties

---

## My Summary of Steps for Creating an OOP program.

Steps:

1. Outline classes & their methods.
2. Write *stubs*, asking questions about data structures, relations between classes, etc.
3. Write a *spike* in the orchestration engine.
4. Test the code.
5. Take care of low-hanging fruit.
6. Work through the harder problems within the spike.
   - At each step, outline the pros and cons of different approaches.


## Questions

---

## To Do

---
