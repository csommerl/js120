Lesson 1: Introduction to Object Oriented Programming
=====

[TOC]

---

# 1.1 Introduction

Object-Oriented Programming (OOP) is useful for dealing with large, complex programs.

---

# 1.2 What is OOP?

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

# 1.3 Encapsulation

**Encapsulation** is the bundling together into a single structure of two things:
1. data (state)
2. operations on that data (behavior)

Purpose of encapsulation:
1. It ensures that you don't perform an operation suited for one type of data on another type of data for which it is unsuited.
2. They have a **public interface** for interacting with them, whereas it hides and restricts access to implementation details, thereby preventing objects from being changed through improper channels.
   - JavaScript does *not* officially/formally/syntactically support access restrictions.

---

# 1.4 Practice Problems: OOP and Encapsulation

1. OOP is an approach to programming where problems are conceptualized and solved in terms of objects, which are entities that combine together both data and operations.
2. The advantages are that it is easier to reason about problems, organize code, and to restrict operations to particular domains/objects. The disadvantages are that it makes code more complex and less efficient.
   - another advantage: *reduce dependencies*
3. Encapsulation refers to how code is structured together: certain kinds of data (state) and certain kinds of operations (behavior) are bundled together in a single entity.
4. JavaScript differs from other OO languages insofar as there are no formal access restrictions.
   - So, they must be devised using other means.

---

# 1.5 Creating Objects

Objects' state are represented by typical key-value pairs, where the value is a type of data. Objects' behavior is represented by key-value pairs where the value is a function (enabled by functions being first-class).

A **method** is a property of an object that is a function. They are invoked with dot notation.

In many languages, it is not syntactically permitted to change directly an object's states (i.e., the values of its properties), and one must use an object's behaviors (i.e., methods) to do so. **But in JavaScript, the former is syntactically permitted.** The reason why we want to avoid changing states/properties directly is that we might assign them to undesirable values, by changing the data type or giving a data type a value out of the intended range (e.g., setting a `fuelLevel` greater than `1`/`100%`).

## Compact Method Syntax

...

## The `this` Keyword

...

---

# 1.6 Collaborator Objects

...

---

# 1.7 Functions as Object Factories

...

---

# 1.8 Practice Problems: Objects and Factories

...

---

# 1.9 Assignment: OO RPS

...

---

# 1.10 Walk-through: OO RPS

...

---

# 1.11 Walkthrough: OO RPS Design Choice

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

