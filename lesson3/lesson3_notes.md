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

JavaScript treats a function as a **constructor function** when the function is called following the use of the `new` keyword and is not defined with an arrow function. If the `new` keyword is not used, the function is treated as an ordinary object.

### Calling a Constructor Function

Differences of a constructor function from an ordinary function:

1. they are conventionally named with a capital letter,
2. they are called with the `new` keyword,
3. they create a new object with a prototype of the constructor's `prototype` property,
4. `this` references the new object (to set properties and methods),
5. the new object is returned whether or not there is an explicit return value, and,
6. they don't usually have an explicit return value. 

What JavaScript does when invoking a function as a constructor:

1. A new object is created.
2. The new object's prototype is set to the object referenced by the constructor's `prototype` property.
3. The execution context (the value of `this`) within the function is set to the new object.
4. The function is invoked (and thereby any properties and methods are added to the new object).
5. The new object is returned, unless the function explicitly returns a different object (and any other explicit return values are ignored).

### Who Can be a Constructor

There are 3 kinds of functions cannot be constructors:

1. arrow functions, because they lack a `prototype` property,
2. concise methods (defined with concise syntax without the `function` keyword), and,
3. many built-in objects and methods.

### Constructors With Explicit Return Values

When functions are used as constructors, explicit return values that are primitive values are ignored, whereas those that are objects (including arrays) are returned instead of the constructed object.

### Supplying Constructor Arguments with Plain Objects

When a constructor function has many parameters, a good practice is to pass the function instead an `args` object whose property names match that of the object to be constructed. The properties can be either individually assigned to the new object or added en masse with `Object.assign`. One downside of the latter is that any superfluous properties within `args` will get added to the constructed object.

### Determining an Object's Type

Object types in JavaScript are looser and more dynamic than those in other OOP languages. Objects created solely with object-literal syntax will simply have the type `Object`.

An object created using a constructor function is an **instance** of the constructor function.

The `instanceof` operator returns a boolean for whether an object (the first operand) was created by a constructor (the second operand), or, more precisely, has in its prototype chain the `prototype` property of the constructor.

### `new` and Implicit Execution Context

The implicit execution context for functions used as constructors is the new object created by that constructor.

### Problems

---

## [3.8 Constructors with Prototypes](https://launchschool.com/lessons/e3c64e3f/assignments/bdc27fe0)

The *main disadvantage of object* factories is that, for every object created with them, they create a new copy of each method for each object. This is a strain on memory. Constructors do not have this problem.

### Method Delegation to Prototypes

Creating copies of methods can be avoided by using prototypes: when an instance calls a method within its prototype object, the execution of that method is delegated to that prototype object.

Constructors can use this feature of prototypes. Namely, they can do so by having a prototype object from which objects created by the constructor inherit properties and methods.

Here, this is illustrated in 2 ways (before seeing JavaScript's built-in implementation):

1. The (archetypal) prototype object is created prior to the constructor function, and the body of the latter sets the constructed object's prototype to the (archetypal) prototype object.
  - Disadvantage: relationship between the constructor and the prototype is loose: they are separate entities.
2. The constructor function sets the constructed object's prototype to a property of the constructor function, and then (after the function body terminates) the constructor function has that property assigned to the (archetypal) prototype object.
  - Advantage: constructor & prototype are no longer separate entities.

### The Constructor `prototype` property

...

they are contained within the **function prototype** / the **constructor's prototype object**. Each object delegates the execution of methods of the object type to its **object prototype**, since JavaScript searches for the method name within the prototype chain.

### Overriding the Prototype

...

---

## TODO

- [ ] Summarize / enumerate object creation patterns.
- [ ] Watch [video from 39:00 to 1:25](https://www.youtube.com/watch?v=-N9tBvlO9Bo&feature=youtu.be)
- [ ] Read [article](https://medium.com/@patel.aneeesh/a-shallow-dive-into-the-constructor-property-in-javascript-b0a89747058b)
- [ ] Enumerate Object Factory Sub-patterns
  1. return object with object-literal syntax
  2. create empty object, use access notation, and return object
  3. use `Object.create` to create bare bones prototype relations (see video for example)??
- [ ] Create Scapple Diagram of constructor structure

...
