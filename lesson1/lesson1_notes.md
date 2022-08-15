# [Lesson 1: Introduction to Object Oriented Programming](https://launchschool.com/lessons/fb892747/assignments)

[TOC]

---

# [1.1 Introduction](https://launchschool.com/lessons/fb892747/assignments/78f95d7f)

Object-Oriented Programming (OOP) is useful for dealing with large, complex programs.

---

# [1.2 What is OOP?](https://launchschool.com/lessons/fb892747/assignments/454a3f12)

## Definitions

**Object-Oriented Programming** is a *programming paradigm* in which:

- problems are dealt with in terms of objects, and
- objects are used to organize a program.

An **object** is a type of data that has two features:
1. **state**, i.e., properties
2. **behavior**, i.e., what it can do

## Use-cases

Contrast with what has come so far:
1. **procedural programming** (step-by-step approach, e.g., with conditionals and loops)
2. **functional programming** (e.g., passing callback functions as arguments to methods)

Advantages of OOP:
1. easy to reason about (through abstraction)
2. easy to maintain (to decrease the number of dependencies)

Disadvantages of OOP:
1. OOP programs are often larger
2. OOP programs are often less efficient (more memory, storage, and processing)

#### :information_source: [Clarification on what 'reducing dependencies' means](https://launchschool.com/posts/88de8643)
- A dependency exists when some bit of code depends on some other bit of code.
- How does OOP reduce dependencies? It confines them to exist within a single class/object.
- How is collaboration different from dependency? With collaboration, one object instructs another object to do something without depending on anything concerning the implementation details within the latter object. In contrast, with a dependency, the former object would look within the latter object and operate directly on the implementation details.

Example:

```javascript
```

---

# [1.3 Encapsulation](https://launchschool.com/lessons/fb892747/assignments/d09dc4ed)

**Encapsulation** is the bundling together into a single structure of two things:
1. data (state)
2. operations on that data (behavior)

Purpose of encapsulation:
1. It ensures that you don't perform an operation suited for one type of data on another type of data for which it is unsuited.
   - That would occur if when a function is defined outside an object, and it is passed data of an incorrect type.

Example:

```javascript
```

2. It provides a **public interface** for interacting with objects, and it hides and restricts access to implementation details, thereby preventing objects from being changed through improper channels.
   - JavaScript does *not* officially/formally/syntactically support access restrictions.

---

# [1.4 Practice Problems: OOP and Encapsulation](https://launchschool.com/lessons/fb892747/assignments/bd81804d)

1. OOP is an approach to programming where problems are conceptualized and solved in terms of objects, which are entities that combine together both data and operations.
2. The advantages are that it is easier to reason about problems, organize code, and to restrict operations to particular domains/objects. The disadvantages are that it makes code more complex and less efficient.
   - another advantage: *reduce dependencies*
3. Encapsulation refers to how code is structured together: certain kinds of data (state) and certain kinds of operations (behavior) are bundled together in a single entity.
4. JavaScript differs from other OO languages insofar as there are no formal access restrictions.
   - So, they must be devised using other means.

---

# [1.5 Creating Objects](https://launchschool.com/lessons/fb892747/assignments/20ed580c)

Objects' states are represented by typical key-value pairs, where the value is a type of data. Objects' behavior is represented by key-value pairs where the value is a function (enabled by functions being first-class). That is, the latter is represented by methods.

A **method** is a property of an object that is a function. Methods are invoked with dot notation.

In many languages, it is not syntactically permitted to change directly an object's states (i.e., the values of its properties), and one must use an object's behaviors (i.e., methods) to do so. **But in JavaScript, the former is syntactically permitted.** The reason why we want to avoid changing states/properties directly is that we might assign them to undesirable values, by changing the data type or giving a data type a value out of the intended range (e.g., setting a `fuelLevel` greater than `1`/`100%`).

## Full Method Syntax

```javascript
let obj = {
  state1: true,
  behavior1: function() {
    obj.state1 = obj.state1 ? false : true; // see below about the this keyword!
  }
}
```

:information_source: Notice that methods like this do **not** require `return` statements in order to match LS's style guidelines.

## Compact Method Syntax

Compact syntax is formed by:

1. omitting `:`
2. omitting the `function` keyword

Example:

```javascript
let obj = {
  state1: true,
  behavior1() {
    obj.state1 = obj.state1 ? false : true; // see below about the this keyword!
  }
}
```

#### :warning: Limitation of compact syntax

*Compact syntax does not fully work the same as the full syntax of having a function as a value of a property.*

Cf. [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) on MDN.
- It appears that one of the main limitations is that method definitions are not constructable.

## The `this` Keyword

The `this` keyword can be used in place of the variable name within method definitions:

```javascript
let obj = {
  state1: true,
  behavior1() {
    this.state1 = obj.state1 ? false : true;
  }
}
```

The benefit of using `this` is that the method definition will work as expected regardless of the variable name.

- e.g., even if the variable name changes

#### :information_source: More information on `this`

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) on MDN.
- [The `this` keyword in JavaScript made simple](https://medium.com/@eamonocallaghan/the-this-keyword-in-javascript-made-simple-320eaddecc22)
- [Using `this` in a key's (non-function) value to refer to the containing object: is it possible?](https://launchschool.com/posts/037459d4)
- [When to omit "this"](https://launchschool.com/posts/324563b8)

---

# [1.6 Collaborator Objects](https://launchschool.com/lessons/fb892747/assignments/675a4d9d)

A **collaborator object or collaborator** is an object that is a state of another object (i.e., an object that is provided as a value/property of another object's key) and the latter object has a method that depends on that state.
- The two objects can be said to "collaborate" insofar as they work together.
- Collaborators help connect different classes with each other.
- Collaborators can be programmer-created objects, as well as built-in objects such as arrays, dates, etc.

Example:

```javascript
let cat = {
  name: 'Bella',
  whine() {
    console.log('mwaooooooh');
  },
};

let person = {
  name: 'Curtis',
  pet: cat,
  displayPersonInfo() {
    console.log(`My name is ${this.name} and my pet's name is ${this.pet.name}.`);
  },
};
```

Here, `cat` is a collaborator of `person` because:

1. `cat` is a state of `person` on line 10; and,
2. the function `displayPersonInfo` defined on lines 11-13 depends on that state.

#### :information_source: More information on collaborators

- [Initial Concepts of OOP: From Properties and Methods to Collaboration](https://launchschool.com/posts/beeca25e)
- [When is a property value of an object NOT a collaborator?](https://launchschool.com/posts/d12c383f)
- [Primitive values as collaborators - Changing state?](https://launchschool.com/posts/e1b02d08)

---

# [1.7 Functions as Object Factories](https://launchschool.com/lessons/fb892747/assignments/3a7351ce)

An object's **type** refers to what it shared in common with other objects.

A **factory function** or **object factory** is a function that creates and returns an object, and thereby can be used to create multiple objects of the same type that share the same kinds of states & behaviors.

#### :question: Question about factory functions

*Are there additional techniques?*

---

# [1.8 Practice Problems: Objects and Factories](https://launchschool.com/lessons/fb892747/assignments/957404de)

When using a factory function: if the property name is supposed to be the name of the parameter, you can use **shorthand notation** like so:

```javascript
function createObj(behavior1, behavior2) {
  return {
    behavior1,
    behavior2,
  };
}
```

---

# [1.9 Assignment: OO RPS](https://launchschool.com/lessons/fb892747/assignments/b65f1ede)

Three steps to making an object-oriented program:

1. Write a description of the problem.
2. Identify important nouns & verbs.
3. Organize nouns & verbs.
   - Nouns are (types of) objects.
   - Verbs are behaviors.

An **engine** is what coordinates the objects & their control flow.

---

# [1.10 Walk-through: OO RPS](https://launchschool.com/lessons/fb892747/assignments/a54702fd)

...

---

# [1.11 Walkthrough: OO RPS Design Choice](https://launchschool.com/lessons/fb892747/assignments/ae7e77a4)

**Class inheritance** refers to how child objects inherit common properties and methods from a parent type.

- The benefit of class inheritance is that it avoids unwieldy code when different children have behavior that differs depending on a property of that object type.

It's good practice to set properties / initial states to `null` even though they will be set through some other behavior.

---

# [1.12 OO RPS](https://launchschool.com/lessons/fb892747/assignments/a9807753)

...

---

# [1.13 Assignment: OO RPS Bonus Features](https://launchschool.com/lessons/fb892747/assignments/805b45f6)

- [ ] Keeping score
  - [x] Add match object
  - [ ] Update players
    - [ ] have a state of `RPSGame` that is `players`
    - [ ] pass `...players` to `createMatch` in order to populate the `score` object's keys.
    - [ ] Then pass players to `createScore`?
    - [ ] When should arguments get passed?
  - [x] make the score a state of each player instead of the game?
  - [x] create round object?
  - [x] Create separate methods for playMatch and playRound
  - [x] playMatch
  - [ ] Add instructions for match
  - [ ] Move constants
    - [ ] Is there any way to make `VALID_MOVES` a local constant? Maybe a state of `RPSGame`, that is then passed as an argument to `createComputer` and `createHuman`?
  - [ ] By passing human as an argument, a dependency is created because one must access the internal workings of human
    - [ ] Define `playMatch` not within `match` but in `RPSGame`?
    - [ ] But is this a dependency in the relevant sense? All that must be accessed is the method `choose`. So, `playRound` does not actually deal with the inner workings within the human object.
    - [ ] But more worrisome is that `playRound` does seem to have a dependency with respect to `score`: `score[this.roundWinner] += 1;`
      - [ ] Solution: create `updateScore` method.
- [ ] Improve logic of `getRoundWinner`
  - [ ] git branch
  - [ ] PEDAC
  - [ ] add rule
- [ ] Add Lizard and Spock
  - [ ] git branch
- [ ] Keep track of a history moves
  - [ ] git branch
- [ ] Adjust computer choice based on history
  - [ ] git branch

Questions for code review

- For the 'keeping score' bonus feature, I initially tried to create objects for `match` and `round`. Something like this:

```javascript

```

- My motivations were that that seems to be in the spirit of OOP, and that `score` should be a state of `match` instead of `RPSGame` as a whole. But I had some difficulty with doing this. In part, one of the main worries was how to deal with the `human` and `computer` properties/states of `RPSGame`. Namely, it seemed like I would have to pass those properties as arguments to a method 


---

# 1.14 Summary

...

---

# 1.15 Lesson 1 Quiz 1

...

---

# Questions & Reflections

## Dependency vs. Collaboration

Is it correct that a program has less dependency when an object method changes its own state rather than something else directly changing the state?

### Example 1

Code Snippet 1:

```javascript
const hair = {
  color: 'brown',
  length: 'long',
};

const curtis = {
  hair,
  cutHair() {
    this.hair.length = 'short';
  }
};

console.log(curtis.hair.length);
curtis.cutHair();
console.log(curtis.hair.length);
```

Code Snippet 2:

```javascript
const hair = {
  color: 'brown',
  length: 'long',
  cutHair() {
    this.length = 'short';
  }
};

const curtis = {
  hair,
};

console.log(curtis.hair.length);
curtis.hair.cutHair();
console.log(curtis.hair.length);
```

Questions:

- Should `cutHair` be a method of `hair` rather than `curtis`, as in Example 2?
- Does Example 1 have a dependency since line 9 directly modifies a state of another object?

### Example 2

(pass arguments)

## Fix Attempt for Match

Code that doesn't work:

```javascript
function createMatch(player1, player2) {
  return {
    player1,
    player2,
    score: 0,
    playMatch() {
      console.log(`${this.player1.name} vs. ${this.player2}, score = ${this.score}`);
    },
  };
}

const game = {
  player1: {name: 'Curtis'},
  player2: {name: 'Opie'},
  match: createMatch(this.player1, this.player2),

  play() {
    this.match.playMatch();
  },
};

console.log(game);
game.play();
```

Another attempt:

```javascript
const game = {
  player1: {name: 'Curtis'},
  player2: {name: 'Opie'},
  match: null,

  createMatch() {
    this.match = {
      score: 0,
      displayMatch() {
        console.log(`${this.player1.name} vs. ${this.player2.name}, score = ${this.score}`);
      },
    };
  },

  play() {
    this.createMatch();
    this.match.displayMatch();
  },
};

console.log(game);
game.play();
```

