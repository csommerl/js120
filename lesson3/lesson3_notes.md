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

JavaScript treats a function as a **constructor function**  or **object constructor** when the function is called following the use of the `new` keyword and is not defined with an arrow function. If the `new` keyword is not used, the function is treated as an ordinary object.

### Calling a Constructor Function

Differences of a constructor function from an ordinary function:

1. they are conventionally named using PascalCase,
2. they are called with the `new` keyword,
3. they create a new object with a prototype of the constructor's `prototype` property,
4. `this` references the new object (to set properties and methods),
5. the new object is returned whether or not there is an explicit return value, and,
6. they don't usually have an explicit return value. 

JavaScript's steps for what happens when a function is invoked as a constructor:

1. A new object is created.
2. The new object's prototype is set to the function prototype object that is currently assigned to the constructor's `prototype` property (if that property is reassigned to a different object, the new object will still reference the original function prototype).
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

Constructors in JavaScript have a built-in `prototype` property whose value is the **function prototype** or the **constructor's prototype object**. This is the object that the constructor uses as the object prototype for the objects it creates.

The concept of function prototype is to be contrasted with that of the **(object) prototype**, which is the object from which another object inherits properties & methods. This latter concept refers to the objects within an object's prototype chain. Moreover, an object can have an (object) prototype without that prototype being a function prototype.

Objects that are instances of constructors have the constructor's prototype object as their (object) prototype. This enables *method execution delegation*. That is, instances delegate the execution of (object type) methods to that prototype, since JavaScript searches for the method name within the prototype chain. Alternatively put, objects created by constructors *inherit* from the function prototype.

The syntax for adding a method to a function prototype is `Constructor.prototype.methodName = function() {...}`.

A constructor does not inherit from the function prototype, rather only a constructor's instances do.

Arrow functions do not have function prototypes (i.e., they do not have a `prototype` property), and so they cannot be used as constructors.

Reminder: the execution context of methods in the function prototype is determined by the object that calls the method. Thus, the value of `this` in the method's definition is not always bound to the function prototype. When an instance calls the method, `this` references the instance.

To determine the type of an object created by a constructor use the `constructor` property: the object instance property `Object.prototype.constructor` returns a reference to the constructor function that created the instance object. The `constructor` property can be reassigned, with no effect upon the `instanceof` operator.

### Overriding the Prototype

If a property or method is added to an instance and that property/method shares the same name as one in the function prototype, the instance's property/method overrides that of the function prototype. This means that two instances of the same constructor can have different behavior with respect to the same method names. This is made possible by how JavaScript accesses properties/methods (by beginning with the calling object and the searching up the prototype chain).

---

## [3.9 Practice Problems - Constructors and Prototypes](https://launchschool.com/lessons/e3c64e3f/assignments/ee0fee9d)

When a function prototype is reassigned to a new object (i.e., when the constructor's `prototype` property is reassigned to a different object):

- Any instances of that constructor created prior to the reassignment will still have as their prototype the original function prototype object.
- Any instances created after that reassignment will have as their prototype the new function prototype.

This means that when an instance is created, its `[[Prototype]]` property is *set to reference directly* the object that is currently assigned to the constructor's `prototype` property. The `[[Prototype]]` property "directly references" the function prototype object insofar as accessing the instance's prototype does not indirectly access the prototype by accessing the constructor's `prototype` property (that property is accessed only once, namely when the instance is created).

A **scope-safe** constructor is one that will return an instance of the constructor even if the `new` keyword is not used.

A scope-safe constructor is created by using a guard clause that checks whether the execution context of the constructor's body is an instance of the constructor, and if it isn't then it returns the result of calling the constructor with the `new` keyword.

---

## [3.10 Static and Instance Properties and Methods](https://launchschool.com/lessons/e3c64e3f/assignments/ad75ca54)

### Instance Properties

An **instance** is any object that is created by something that can create multiple objects of the same type, whether a constructor or a factory function.

An **instance property** is a property that belongs to (is stored directly in) a specific instance of some type.

### Instance Methods

An object's **instance methods** are those that are contained within the object's prototype chain.

### Static Properties

A **static property** is a property that is defined & directly accessed on a constructor (not on an instance or the function prototype).

The syntax for adding a static property is:

```javascript
ConstructorName.propName = val;
```

One useful static property is one whose value is an array that contains references to each of the instances created of the constructor.

### Static Methods

A **static method** is a method that is defined & directly accessed on a constructor (not on an instance or the function prototype).

The syntax for adding a static method to a constructor

```javascript
ConstructorName.methodName = function() {...};
```

---

## [3.11 Built-in Constructors](https://launchschool.com/lessons/e3c64e3f/assignments/14cdc112)

JavaScript's built-in constructors work by using the `new` keyword. Even though they often work without that keyword, it is best practice to *always use the `new` keyword*.

### The `Array` constructor

`new Array()` creates and returns a new array, which will be

1. a sparse array (i.e., one with unset elements) whose length is the single non-negative integer passed as an argument to the constructor; or,
2. an array containing as elements each of the arguments passed to the constructor.

`Array.prototype` is the `Array` constructor's function prototype, from which all arrays inherit instance methods.

#### Array Instance Methods

`Array.prototype.fill` takes any value as an argument and replaces all of the calling array's elements with that value. It can be used with the `Array` constructor: `(new Array(lengthNum)).fill(val)`.

#### Array Static Methods

`Array.isArray` takes one argument and returns a boolean representing whether the argument is an array object. Using the `typeof` operator does not work, since it will return `'object'` for an operand that is an array.

An **array-like object** is any object that both: 

1. has a `length` property and
2. has some property keys that are non-negative integers.

`Array.from` takes an array-like object and returns a new array whose length is the length property of the object and whose elements are those properties of the object whose keys are less than the length. It is useful for *node lists*.

### The `Object` Constructor

`Object.prototype` is the function prototype of the `Object` constructor, from which *nearly all* instances of objects (including arrays, other built-in objects, & custom-created objects) inherit instance methods. The only ones that don't have it in their prototype chain are those whose prototype chain ends with `null`.

#### Object Instance Methods

`Object.prototype.toString` returns a string representation of the calling object.

#### Object Static Methods

### The `Date` Constructor

#### Date Instance Methods

`Date.prototype.toString` is a method that returns a string representing the date, interpreted into the local timezone.

`Date.prototype.getFullYear`

`Date.prototype.getDay` is a method that returns the day of the week for the calling `Date` according to the local time, where `0` represents Sunday.

### The `String` Constructor

There are 2 kinds of strings in JavaScript:

1. string primitives, created with string-literal syntax (quotation marks or backticks)
2. `String` objects, created with the `String` constructor

`String` objects are necessary in JavaScript because they provide string primitives with access to string instance methods and properties. When those methods are called or properties accessed, JavaScript wraps the string primitive in a `String` object, performs the operation, and then discards `String` object. `String` objects, however, should generally not be used by programmers.

#### `String` without `new`

When using the `String` constructor without the `new` keyword, a new string is returned (following, if necessary, a conversion of a non-string argument to a string), not an object.

### The `Number` and `Boolean` Constructors

The `Number` and `Boolean` constructors work like the `String` constructor insofar as they create new Number and Boolean objects if used with `new` or they return the argument converted to a new number/boolean if not used with `new`. They also should not be used to create new objects.

### Extending Built-In Prototypes

Although *it's best practice to avoid doing so*, JavaScript's built-in prototypes can be extended by adding to them new properties and methods. The syntax for doing so is:

```javascript
ConstructorName.prototype.propOrMethodName = ...
```

### Borrowing Array Methods for Strings

Since functions in JavaScript are first-class, they enable **method borrowing**: a method of one object type can sometimes be used by objects of a different type. This can be done by using explicit context-binding techniques such as `call` and `apply`.

For example, `String` objects can use *some* array methods because they are array-like (have a `length` property and index-based access to their characters). Two syntactical forms for doing so are:

```javascript
Array.prototype.methodName.call(str, callbackFunction);
[].methodName.call(str, callbackFunction);
```

---

## [3.12 ES6 Classes](https://launchschool.com/lessons/e3c64e3f/assignments/6bb902cd)

Lesson is contained in [Modern JavaScript: Classes](https://launchschool.com/gists/6ba85481)

**Syntactic sugar** is syntax that is designed to be easier to read or use.

### Class Declarations

A **class declaration** has the following syntax:

```javascript
class ConstructorName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  static staticMethodName() {
    ...
  }

  instanceMethodName() {
    ...
  }
```

Notes:

- The class's name is not followed by parentheses.
- The `constructor` method is used to create the properties of the instance, based on the arguments passed to it.
- Instance methods are written using concise method syntax (or by using function expressions).
  - When the `static` keyword is *not* used, there is a difference between using full and concise method syntax. Full method syntax creates the method within every instance, whereas concise method syntax creates it only within the function prototype.
- No commas or semi-colons are used between the properties of the class.
- The `new` keyword must be used to call a constructor defined by `class`; otherwise, a `TypeError` is raised.
- Static methods are created using the `static` keyword.

### Class Expressions

```javascript
let ConstructorName = class {...};
```

### Classes as First-Class Citizens

A **first-class citizen** is a value that is treated like any other value insofar as they:

1. can be assigned to a variable,
2. can be passed as an argument to a function, and
3. can be returned by a function.

JavaScript classes are first-class values/citizens.

The data type of classes is function.

### Static Methods and Properties

Instance methods are also called **object methods**.

Within classes, the `static` keyword defines:

- static properties,
- static methods, and
- static initialization blocks.

A **static initialization block** is a block containing statements to be evaluated during class initialization. A class is initialized only once, when it is created with a declaration or expression. So, a static initialization block is *executed only once*. The implicit execution context within static initialization blocks is the class, i.e., `this` within the block refers to the class constructor. Thus, code within these blocks can be used to create static properties and methods.

### A Few Caveats

1. Code in `class` bodies always executes in strict mode.
2. Class declarations are not hoisted (but the *name* of the class is, just like with `let` and `const` declarations).
3. If the `new` keyword is not used when calling a class constructor, a `TypeError` is raised.
4. The `prototype` object of a class cannot be reassigned, since the `prototype` property is read only. The result will vary depending on the mode:
   - In strict mode, attempting to reassign that property raises a `TypeError`.
   - In sloppy mode, any attempt to reassign it fails.

---

## [3.13 Practice Problems - Classes](https://launchschool.com/lessons/e3c64e3f/assignments/b29488f2)

---

## [3.14 Summary](https://launchschool.com/lessons/e3c64e3f/assignments/d9d4b6a3)

...

---

## [Ryan Schaul Object Creation Pattern](https://youtu.be/-N9tBvlO9Bo?t=2420)

```javascript
const protoObj = {
  method1: function() {...},
  method2: function() {...},
};

function createInstance(prop1, prop2) {
  let newInstance = Object.create(protoObj);

  newInstanc.prop1 = prop1;
  newInstanc.prop2 = prop2;

  return newInstance;
}

let instance = createInstance(prop1, prop2);
```

## TODO

- [ ] Summarize / enumerate object creation patterns, create separate markdown file
  1. RPS style with `createPlayer` and then `createHuman`
  2. Schaul
  3. constructor pattern
  4. class pattern
- [ ] Watch [video from 1:02:00 to end](https://www.youtube.com/watch?v=-N9tBvlO9Bo&feature=youtu.be)
- [ ] Read [article](https://medium.com/@patel.aneeesh/a-shallow-dive-into-the-constructor-property-in-javascript-b0a89747058b)
- [ ] Enumerate Object Factory Sub-patterns
  1. return object with object-literal syntax
  2. create empty object, use access notation, and return object
  3. use `Object.create` to create bare bones prototype relations (see video for example)??
- [ ] Create Scapple Diagram of constructor structure
