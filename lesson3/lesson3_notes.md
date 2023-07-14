## [Lesson 3: Object Creation Patterns](https://launchschool.com/lessons/e3c64e3f/assignments)

[TOC]

---

## [3.1 Introduction](https://launchschool.com/lessons/e3c64e3f/assignments/05fce045)

Even though there's a `class` keyword in JavaScript, it doesn't use class-based inheritance (==for behavior sharing, specifically?==).

Two Highlighted Patterns for Creating Objects:

1. Classical approach
2. `class` syntax

---

## [3.2 Review - OOP Principles: Encapsulation](https://launchschool.com/lessons/e3c64e3f/assignments/4c121029)

OOP uses encapsulation to bundle together in logical units functions and the data they operate on, keeping them together.

So far, we've used only object-literal syntax with the **Factory Object Creation Pattern**.

---

## [3.3 Review - Factory Functions](https://launchschool.com/lessons/e3c64e3f/assignments/8eaad0b7)

There are *2 disadvantages* of the Factory Object Creation Pattern:

1. Each object created with a factory function has its own copy of all methods. Thus, methods are redundantly recreated and strain memory.
2. Objects created with factory functions only have particular characteristics and no mark of the type of object they are, i.e., it's not possible to tell that they've been made with a factory function. 

---

## [3.4 Practice Problems - Factory Functions](https://launchschool.com/lessons/e3c64e3f/assignments/bf77a962)

---

## [3.5 Object Orientation](https://launchschool.com/lessons/e3c64e3f/assignments/51ddce40)

OOP makes some questions easier to answer, e.g.,

1. What are the most fundamental concepts/entities in a program?
2. How do you create an entity?
3. What characterizes each entity, and what can they do?
4. Where do new features get added?

Advantages of OOP:

1. Organize related code (data & operations) into logical bundles.
2. Enables creating multiple instances of the same type.

---

## [3.6 Practice Problems: Object Orientation](https://launchschool.com/lessons/e3c64e3f/assignments/c8712db5)

---

## [3.7 Constructors](https://launchschool.com/lessons/e3c64e3f/assignments/5ca112a7)

### Introduction

An **object constructor** is a way to create objects in JavaScript that ...

A **constructor function** is ...

To create an object using a constructor function, you use the `new` keyword followed by an invocation of the constructor function.

Differences of a constructor function from a factory function:

1. 

...

### Calling a Constructor Function

...

### Who Can be a Constructor

...

### Constructors With Explicit Return Values

...

### Supplying Constructor Arguments with Plain Objects

...

### Determining an Object's Type

...

### `new` and Implicit Execution Context

...

### Problems

...

---

## TODO

- [ ] Summarize / enumerate object creation patterns.

...
