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

### Display the Board

### Getting Started with the Board Class

### The Board's State

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

### The Square Class 

`toString` is called implicitly if it is not called explicitly in string interpolations.

### Refactor: Eliminate Magic Constants

Magic constants in OOP can often be added as static properties of classes/constructors.

### Refactor: DRY Board Initialization

**DRY** refers to "Don't Repeat Yourself", the principle that you should simplify repetitive code by using procedural techniques.

### What's Next?

---

## [5.5 OOP Tic Tac Toe with Classes - Part 3](https://launchschool.com/lessons/93a83d87/assignments/64827a63)

### Creating the Players

### Get the Human's Move

Always use the radix argument of `parseInt`.

### Placing the Player's Move on the Board

### Defining the Player's Marker

### Testing the Human Player's Moves

### The Computer's Move

### Possible Refactor: Move the Move Methods?

### Refactor: Remove the Marker Class

### What's Next?

---

## [5.6 OOP Tic Tac Toe with Classes - Part 4](https://launchschool.com/lessons/93a83d87/assignments/8a2901c6)

### Taking Turns

### Validating Moves

### Refactor: Remove `play` Method from `Player` Class

### What's Next?

---

## [5.7 OOP Tic Tac Toe with Classes - Part 5](https://launchschool.com/lessons/93a83d87/assignments/527c4a79)

### Is the Game Over?

### Is the Board Full?

### Did Someone Win the Game?

### Who Won the Game?

### Refactor: Clean Up `someoneWon`

### Refactor: Remove the Row Class

### Improving the UI: Clearing the Screen

### ESLint

### The Completed Game

### What's Next?

---

## [5.8 OOP Tic Tac Toe Code Discussion](https://launchschool.com/lessons/93a83d87/assignments/7e30fda9)

1. **Regression** refers to the reappearance of a bug after it was previously fixed. Testing will help with regression.

2. **Indirection** refers to the ability to reference something indirectly, e.g., to invoke an action with a function or method. An advantage of OOP is that indirection can be used to isolate a problem and devise a solution that leaves the rest of the program unaffected.

3. Generic names are generally to be avoided in order to avoid conflicts with other names in the global namespace. But *modules* also help prevent this issue.

4. A **dependency graph** is the data structure that formed by the dependencies of a program. In OOP, it is best to avoid spiderweb dependency graphs, i.e., avoid having all classes depend on (or collaborate with) many others. Following this practice helps isolate changes.

5. Sometimes these is no clear advantage or disadvantage to placing a method in one class or another.

6. Passing an object as an argument of another object's method creates a dependency. This isn't wrong, but it comes with tradeoffs.

---

## [5.9 OOP Tic Tac Toe with Constructors and Prototypes](https://launchschool.com/lessons/93a83d87/assignments/88d58d62)

---

## [5.10 OOP Tic Tac Toe with OLOO](https://launchschool.com/lessons/93a83d87/assignments/9c3dd72f)

---

## [5.11 OOP Tic Tac Toe with Bonus Features](https://launchschool.com/lessons/93a83d87/assignments/9123ba93)

### Improved Prompt

### Play Again

### Computer AI: Defense

### Computer AI: Offense

### Another Computer Move Improvement

### Refactor the Move Methods

### Keep Score

### Take Turns Going First

### On Your Own Ideas

1. Minimax algorithm
2. Bigger board
3. More players

---

## [5.12 OOP Twenty-One Overview](https://launchschool.com/lessons/93a83d87/assignments/ab05d402)

### Description

### Identify the Nouns and Verbs

### Organize

### Additional Requirements

### Scaffolding and Spike

---

## [5.13 OOP Twenty-One: Reference Implementation with Classes](https://launchschool.com/lessons/93a83d87/assignments/83ff3989)

---

## [5.14 Exercise Sets](https://launchschool.com/lessons/93a83d87/assignments/903c0997)

[the Object Oriented JavaScript exercise sets](https://launchschool.com/exercises#js120_object_oriented_javascript)

1. [Easy](https://launchschool.com/exercise_sets/d4280aad)
2. Objects
3. Function Context
4. OO Basics: Classes
5. OO Basics: Inheritance and Mixins
6. Object Creation Patterns

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
    - Test the code.
    - Take care of low-hanging fruit.
    - Work through the harder problems within the spike, and at each step, outline the pros and cons of different approaches.

## Questions

### Ordering of classes

The lesson [5.4 OOP Tic Tac Toe with Classes - Part 2](https://launchschool.com/lessons/93a83d87/assignments/ea59159e) says that we need the `Square` class before the `Board` class, but that's not true. That's because although the `Board` class contains references to the `Square` class, no code is executed when each is defined. The names of each (along with their properties and methods) are hoisted prior to execution. Thus, when the board class is initialized, the `Square` class can be referred to.

### Coupling

The lesson [5.8 OOP Tic Tac Toe Code Discussion](https://launchschool.com/lessons/93a83d87/assignments/7e30fda9) refers to **tight coupling** and **loose coupling** but doesn't define them.

## How to deal with collaborators and dependencies?

Is this correct?: When a method involves two objects interacting, put the method in an object that has those two objects as collaborators. Otherwise, a dependency is created.

- But isn't there still a dependency of sorts, just a different kind?

Similarly, is it correct that you shouldn't access properties of a collaborator object directly? Instead, define a method in the collaborator object and use that. This also seems to apply when a collaborator object itself has a collaborator object.

---

## To Do

- [ ] Redo [Circular Queue](https://launchschool.com/exercises/1becc424) with hard solution
- [ ] [Banner Class](https://launchschool.com/exercises/398917ba) further exploration
- [ ] [Use All Object Creation Patterns](https://fine-ocean-68c.notion.site/Use-All-Object-Creation-Patterns-9e431d9a2c4842b9b75af32f8c96a623)
- [ ] [Questions about Theory](https://fine-ocean-68c.notion.site/JS120-Questions-about-various-concepts-theory-How-the-backpropagation-algorithm-works-aed422b1bd4447498e09850634ac161f)
- [ ] [Tigers and Lions and Ligers](https://fine-ocean-68c.notion.site/Tigers-and-Lions-and-Ligers-Oh-My-b11a93b231d149beba22d51692d029ee)

---
