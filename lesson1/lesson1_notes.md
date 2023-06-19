# [Lesson 1: Introduction to Object Oriented Programming](https://launchschool.com/lessons/fb892747/assignments)

[TOC]

---

## [1.1 Introduction](https://launchschool.com/lessons/fb892747/assignments/78f95d7f)

Object-Oriented Programming (OOP) is useful for dealing with large, complex programs.

---

## [1.2 What is OOP?](https://launchschool.com/lessons/fb892747/assignments/454a3f12)

### Definitions

**Object-Oriented Programming** is a *programming paradigm* in which:

- problems are dealt with in terms of objects, and
- objects are used to organize a program.

An **object** is a type of data that has two features:

1. **state**, i.e., properties; and,
2. **behavior**, i.e., what it can do, or methods.

### Use-cases

Contrast with what has come so far:

1. **procedural programming** (step-by-step approach, e.g., with conditionals and loops)
2. **functional programming** (e.g., passing callback functions as arguments to methods)

Advantages of OOP:

1. easy to reason about (through abstraction)
2. easy to maintain, enabling the making of focused changes (to decrease the number of dependencies)

Disadvantages of OOP:

1. OOP programs are often larger
2. OOP programs are often less efficient (more memory, storage, and processing)

### [Clarification on what 'reducing dependencies' means](https://launchschool.com/posts/88de8643)

- A dependency exists when some bit of code depends on some other bit of code.
- How does OOP reduce dependencies? It confines them to exist within a single class/object.
- How is collaboration different from dependency? With collaboration, one object instructs another object to do something without depending on anything concerning the implementation details within the latter object. In contrast, with a dependency, the former object would look within the latter object and operate directly on the implementation details.

---

## [1.3 Encapsulation](https://launchschool.com/lessons/fb892747/assignments/d09dc4ed)

**Encapsulation** is the bundling together into a single structure (an object) of two things:

1. data (state)
2. operations on that data (behavior)

Purpose of encapsulation:

1. It ensures that you don't perform an operation suited for one type of data on another type of data for which it is unsuited.
   - That would occur when a function is defined outside an object, and it is passed data of an incorrect type. (*Example?*)
2. It provides a **public interface** for interacting with objects. Namely, it hides and restricts access to implementation details, thereby preventing objects from being changed through improper channels.
   - JavaScript does *not* officially/formally/syntactically support access restrictions.

---

## [1.4 Practice Problems: OOP and Encapsulation](https://launchschool.com/lessons/fb892747/assignments/bd81804d)

1. OOP is an approach to programming where problems are conceptualized in terms of objects and code solving those problems is thus organized in terms of those object. Objects are entities that combine together both states (data) and behaviors (operations that can be performed on that data).
2. OOP's advantages are: it makes it easier to reason about problems (by abstraction); it makes it easier to organize & maintain code (by reducing dependencies); it allows code to be restricted to particular domains/objects; and, it reduces dependencies. OOP's disadvantages are that it makes code more complex, larger, slower, and less efficient with respect to memory.
3. Encapsulation refers to how code is structured together: certain kinds of data (state) and certain kinds of operations (behavior) are bundled together in a single entity.
4. JavaScript differs from other OO languages insofar as there are no formal (syntactical) access restrictions, and so they must be devised using other means.

---

## [1.5 Creating Objects](https://launchschool.com/lessons/fb892747/assignments/20ed580c)

### Formal Characterization of Objects

Objects can be created in JavaScript by using object-literal syntax.

Objects' states are represented by typical key-value pairs, where the value is a type of data.

Objects' behaviors are represented by key-value pairs where the value is a function (enabled by functions being first-class).

- That is, objects' behaviors are methods.
- A **method** is a property of an object that is a function. Methods are invoked with dot notation.

### The General Pattern

```javascript
let obj = {
  prop: value,
  method: function() {
  },
};
```

### :loudspeaker: Quirk of JavaScript Objects

In many languages, it is not syntactically permitted to change directly an object's states (i.e., the values of its properties), and one must use an object's behaviors (i.e., methods) to do so. **But in JavaScript, the former is syntactically permitted.** The reason why we want to avoid changing states/properties directly is that we might mistakenly assign them to undesirable values. For example, we might accidentally change the data type or give a data type a value out of the intended range (e.g., setting a `fuelLevel` greater than `1`/`100%`).

### Full Method Syntax

```javascript
let obj = {
  state1: true,
  behavior1: function() {
    obj.state1 = obj.state1 ? false : true; // see below about the this keyword!
  },
}
```

:loudspeaker: Writing methods in this way does **not** require `return` statements in order to match LS's style guidelines.

If a behavior accesses a state of its own object, then the state should **not** be passed as an argument to that behavior.

Proper syntax would actually use the `this` keyword on line 4!

### Compact Method Syntax

Compact syntax is formed by:

1. omitting `:`
2. omitting the `function` keyword

Example:

```javascript
let obj = {
  state: true,
  behavior() { // method for changing the boolean of `state`
    obj.state = obj.state ? false : true; // see below about the this keyword!
  }
}
```

Proper syntax would actually use the `this` keyword on line 4!

#### :warning: Limitation of compact syntax

Compact method syntax **does not work the same** as using the full syntax with the `function` keyword.

Cf. [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) on MDN.

- MDN appears to call only the shorter syntax "method definition".
- It appears that the main limitation is that method definitions are not constructable.

### The `this` Keyword

The `this` keyword is used within an object's body to access the states/properties and behaviors/methods of an object. For example, the `this` keyword can be used in place of the variable name within method definitions:

```javascript
let obj = {
  state: true,
  behavior() { // method for changing the boolean of `state`
    this.state = this.state ? false : true;
  }
}
```

The benefit of using `this` is that the method definition will work as expected regardless of the variable name of the main object, e.g., even if the variable name changes.

#### :loudspeaker: More information on `this`

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) on MDN.
- [The `this` keyword in JavaScript made simple](https://medium.com/@eamonocallaghan/the-this-keyword-in-javascript-made-simple-320eaddecc22)
- [Using `this` in a key's (non-function) value to refer to the containing object: is it possible?](https://launchschool.com/posts/037459d4)
- [When to omit "this"](https://launchschool.com/posts/324563b8)

---

## [1.6 Collaborator Objects](https://launchschool.com/lessons/fb892747/assignments/675a4d9d)

A **collaborator object or collaborator** is an object that is a property/state of another object (i.e., an object that is the value of another object's key) and[^1] the latter object has a method that depends on that state.

- The two objects can be said to "collaborate" insofar as they work together.
- Collaborators help connect different classes with each other.
- Collaborators can be programmer-created objects, as well as built-in objects such as arrays, dates, etc.

[^1]: This second conjunct is supplied by [Pete's post in the discussion forum](https://launchschool.com/posts/d12c383f#comment-85901).

### Example

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

### :loudspeaker: More information on collaborators

- [Initial Concepts of OOP: From Properties and Methods to Collaboration](https://launchschool.com/posts/beeca25e)
- [When is a property value of an object NOT a collaborator?](https://launchschool.com/posts/d12c383f)
- [Primitive values as collaborators - Changing state?](https://launchschool.com/posts/e1b02d08)

---

## [1.7 Functions as Object Factories](https://launchschool.com/lessons/fb892747/assignments/3a7351ce)

An object's **type** refers to what is shared in common with other objects.

A **factory function** or **object factory** is a function that creates and returns an object of a particular type (i.e., having particular properties and methods). Thus, they can be used to create multiple objects of sharing the same kinds of states & behaviors. Commonly, the created objects will have the same methods, but they can be specified to have different property values by passing different values as arguments to the factory function.

### The General Pattern for Factory Functions

```javascript
function createObj(state1, state2) {
  return {
    state1,
    state2,
    method() {
      // function body
    },
  };
}
```

---

## [1.8 Practice Problems: Objects and Factories](https://launchschool.com/lessons/fb892747/assignments/957404de)

**Shorthand notation** can be used when writing a factory function that creates an object with a state that:

- has a name that is the same as one of the function's parameters; and,
- has a value that is the same as the value of that parameter.

In such cases, you can simply use the parameter name in the object without it being followed by a colon and a value. For example:

```javascript
function createBook(title, author) {
  return {
    title,     // same as `title: title,`
    author,    // same as `author: author,`
  };
}
```

---

## [1.9 Assignment: OO RPS](https://launchschool.com/lessons/fb892747/assignments/b65f1ede)

Three steps to making an object-oriented program:

1. Write a description of the problem.
2. Identify important nouns & verbs.
3. Organize nouns & verbs.
   - Nouns are (types of) objects.
   - Verbs are behaviors.

An **engine** is what coordinates the objects & their control flow, i.e., it is where the procedural programming goes.

---

## [1.10 Walk-through: OO RPS](https://launchschool.com/lessons/fb892747/assignments/a54702fd)

### Lesson 1

You *can't* use the key of one state in an object to pass that state's value to the value of another *state* of that object. For example:

```javascript
const cat = {
  name: 'Bella',
  color: 'grey',
  personality: 'gentle',
  description: `${this.name} is ${this.color} and ${this.personality}.`,
};

console.log(cat.description); // returns 'undefined is undefined and undefined.'
```

But you *can* use the key of one state in an object to pass that state's value to the function body of a *method* of that object. For example:

```javascript
const cat = {
  name: 'Bella',
  color: 'grey',
  personality: 'gentle',

  showDescription() {
    console.log(`${this.name} is ${this.color} and ${this.personality}.`);
  },
};

cat.showDescription();
```

### Lesson 2

When you have nested objects, `this` always refers to the innermost object in which it appears.

---

## [1.11 Walkthrough: OO RPS Design Choice](https://launchschool.com/lessons/fb892747/assignments/ae7e77a4)

In OOP, you typically want to avoid having factory functions create objects such that the behavior of those objects varies depending on the values of the properties of those objects. To avoid this, we can use *class inheritance* to create sub-types of types.

**Class inheritance** refers to how child objects inherit common states/properties and behavior/methods from a parent type.

- The benefit of class inheritance is that it avoids unwieldy code when different children have behavior that differs depending on a property of that object type.

It's good practice to set initial properties/states to `null` even though they will be set through some other behavior. This signals in the code that the objects are supposed to have those properties/states.

### The General Pattern of Class Inheritance with Factory Functions

Class inheritance can be devised with factory functions with the following pattern:

```javascript
function createChild(args) {
  let parentObject = createParent();

  let childObject = {
    // states & behaviors
  };

  return Object.assign(parentObject, childObject);
}
```

---

## [1.12 ESLint OO RPS](https://launchschool.com/lessons/fb892747/assignments/a9807753)

`$ npx eslint rps.js`

---

## [1.13 Assignment: OO RPS Bonus Features](https://launchschool.com/lessons/fb892747/assignments/805b45f6)

---

## 1.14 Summary

...

---

## 1.15 Lesson 1 Quiz 1

...

---
