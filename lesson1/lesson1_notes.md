[Lesson 1: Introduction to Object Oriented Programming](https://launchschool.com/lessons/fb892747/assignments)
=====

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

Benefits of OOP:
1. easy to reason about (through abstraction)
2. easy to maintain (to decrease the number of dependencies)

Tradeoffs:
1. OOP programs are often larger
2. OOP programs are often less efficient (more memory, storage, and processing)

---

# [1.3 Encapsulation](https://launchschool.com/lessons/fb892747/assignments/d09dc4ed)

**Encapsulation** is the bundling together into a single structure of two things:
1. data (state)
2. operations on that data (behavior)

Purpose of encapsulation:
1. It ensures that you don't perform an operation suited for one type of data on another type of data for which it is unsuited.
2. They have a **public interface** for interacting with them, whereas it hides and restricts access to implementation details, thereby preventing objects from being changed through improper channels.
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

Objects' state are represented by typical key-value pairs, where the value is a type of data. Objects' behavior is represented by key-value pairs where the value is a function (enabled by functions being first-class).

A **method** is a property of an object that is a function. They are invoked with dot notation.

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

:information_source: Notice that methods like this do **not** require `return` statements.

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

:warning: *Compact syntax does not fully work the same as the full syntax of having a function as a value of a property.*

Cf. [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) on MDN.

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

Cf. [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) on MDN.

---

# [1.6 Collaborator Objects](https://launchschool.com/lessons/fb892747/assignments/675a4d9d)

A **collaborator object or collaborator** is an object that is a state of another object.
- The two objects can be said to "collaborate" insofar as they work together.
- Collaborators help connect different classes with each other.
- Collaborators can be programmer-created objects, as well as built-in objects such as arrays, dates, etc.

---

# [1.7 Functions as Object Factories](https://launchschool.com/lessons/fb892747/assignments/3a7351ce)

An object's **type** refers to what it shared in common with other objects.

Since objects of the same type share things in common (e.g., types of states and behavior), functions that are **object factories** (or, more simply, **factory functions**) can be used to create them.

:question: *Are there additional techniques?*

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

...

---

# 1.12 OO RPS

...

---

# 1.13 Assignment: OO RPS Bonus Features

...

---

# 1.14 Summary

...

---

# 1.15 Lesson 1 Quiz 1

...

---

