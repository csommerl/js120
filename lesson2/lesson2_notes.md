## [Lesson 2: Functions, Objects, and Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments)

[TOC]

---

## [2.1 Introduction](https://launchschool.com/lessons/1eaf5e37/assignments/db4e23e5)

Two main topics of Lesson 2:

1. execution context (value of `this`)
2. object prototypes (only way JavaScript implements OOP)

---

## [2.2 Review - Objects](https://launchschool.com/lessons/1eaf5e37/assignments/57181bd4)

### Property Access

**Member access notation** is the dot notation syntax for accessing object properties, e.g., `obj.prop`.

**Computed member access notation** is the bracket notation syntax for accessing object properties, e.g., `obj["prop"]`.

Differences between the forms of notation:

1. Computed member access notation accepts expressions, which are evaluated and (if necessary) implicitly coerced to strings. Member access notation only accepts strings.
2. The two also differ with respect to the kinds of strings they accept. Member access notation is limited insofar as it accepts as keys only strings that meet JavaScript's rules for valid variable names, whereas computed member access notation accepts any UTF-8 compatible string.

Example of (1):

```javascript
let obj = { 5: 'five', };
let strExp = '5';
let numExp = 5;

obj.'5'; // throws `SyntaxError: Unexpected string`
obj.5; // throws `SyntaxError: Unexpected number`
obj.strExp; // undefined (no key in `obj` is the string `strExp`)
obj.numExp; // undefined (no key in `obj` is the string `numExp`)

obj['5']; // 'five'
obj[strExp]; // 'five'
obj[numExp]; // 'five'
obj[5]; // 'five': implicit coercion of non-string to string
```

Example of (2):

```javascript
let obj = { 1x: 'one ex', key-name: 'hello', };

obj.key-name; // `ReferenceError: name is not defined`
obj['key-name']; // 'hello'

obj.1x; // `SyntaxError: Invalid or unexpected token`
obj['1x']; // 'one ex'
```

### Property Existence

You cannot use property access notation to determine whether an object has a property. That's because that notation will evaluate to `undefined` for non-existent properties, yet existent properties can also have the value `undefined`.

So, one must use other approaches for determining whether a property exists within an object.

#### Direct Ways

Instead of property access notation, there are two *direct* ways to determine whether an object has a property:

1. the `in` operator: `prop in obj`
2. the `hasOwnProperty` method: `obj.hasOwnProperty(prop)`

Each returns `true` if the specified property name (or key) is in the specified object. The main difference between them is that `in` will also return `true` if the property is anywhere in the object's prototype chain, whereas `hasOwnProperty` will not look for the property within the prototype chain.

#### Indirect Ways

There are also two *indirect* ways to check whether an object has a key, by getting an array of the object's property names:

1. `Object.getOwnPropertyNames(obj).includes(prop)`
2. `Object.keys(obj).includes(prop)`

Both of these will retrieve only the object's own properties, and not any properties higher in the prototype chain. But the difference between them is that whereas `Object.getOwnPropertyNames` will get all the object's properties (whether enumerable or not), `Object.keys` will get only the object's enumerable properties.

#### Enumerability (supplemented with material from 2.3)

An **enumerable property** is one that will be visited by the most common iterative procedures performed upon objects, such as a `for ... in` loop. Thus, enumerable properties are those over which it is useful to iterate.

More precisely, an enumerable property is one whose internal enumerable flag is set to `true` (the default when creating properties in the most common ways). Most properties and methods of JavaScript's built-in data types are not enumerable.

`Object.prototype.propertyIsEnumerable(prop)` returns a boolean for whether an object's property is enumerable.

#### Summary

The four approaches above are ordered from the *most to least inclusive* of the properties they test for.

1. `prop in obj`: returns `true` if `prop` is in `obj`'s *prototype chain*, whether or not `prop` is enumerable
2. `obj.hasOwnProperty(prop)`: returns `true` if `prop` is `obj`'s *own* property, whether or not `prop` is enumerable
3. `Object.getOwnPropertyNames(obj).includes(prop)`: returns `true` if `prop` is `obj`'s *own* property, whether or not `prop` is enumerable
4. `Object.keys(obj).includes(prop)`: returns `true` if `prop` is `obj`'s *own enumerable* property

---

## [2.3 Object Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments/ccf2e4a7)

### Prototypes

**Prototype inheritance** is a feature of JavaScript objects that can be used in order to avoid rewriting duplicate code for objects of the same type (i.e., objects that have some of the same properties and methods).

A **prototype** is an object from which another object inherits properties and methods.

Inherited properties are not part of an object's own properties. Instead, access to inherited properties and methods is *delegated* to the prototype.

JavaScript keeps track of object prototypes by means of the internal `[[Prototype]]` property. Although that property is not directly accessible, it can be accessed indirectly by means of two object functions:

1. `Object.getPrototypeOf(obj)` returns `obj`'s prototype object.
2. `Object.setPrototypeOf(obj, newProtoObj)` sets the prototype of `obj` to `newProtoObj`.

Using `setPrototypeOf` to set a prototype of an empty object is equivalent to using `Object.create`. This function implies that an object can have *only one* prototype at the next level up in the prototype chain. But an object's prototype can itself have a prototype. See The Prototype Chain below.

The `[[Prototype]]` property stores a *reference* to the object's prototype, which means that any changes to the prototype object are inherited by the child object.

### The Default Prototype

All JavaScript objects (created by object literal syntax) inherit from a prototype, the **default prototype** supplied by `Object.prototype`. The value of `Object.prototype` is `null` and it contains several built-in non-enumerable properties for objects, such as `toString` and `hasOwnProperty`.

### Iterating Over Objects with Prototypes

There are two main ways to iterate over objects:

1. `for/in` loop: iterates over all enumerable properties of an object, as well as its prototype chain (unless a guard clause with `Object.hasOwnProperty` is used).
2. `Object.keys`: provides an array of an object's *own enumerable* properties.

### The Prototype Chain

Since an object's prototype can itself have a prototype, and so on, there exists a **prototype chain**. Usually, the complete prototype chain terminates in `null`, since the default prototype(`Object.prototype`) has as its prototype `null`.

### The `__proto__` Property

The **dunder proto**, `__proto__`, is a deprecated, non-hidden (i.e., directly accessible) version of the `[[Prototype]]` property.

### Property Look-Up in the Prototype Chain

When attempting to access a property of an object, JavaScript first looks within the object's own properties. If it doesn't find the property there, it then looks within the properties of the object's prototype. It continues this process until it reaches `Object.prototype`, and if the property is not found there, `undefined` is returned.

Thus, if two objects within a prototype chain share a property with the same name, accessing or assigning that property name will access the property of the object in the prototype chain that is closer to the calling object.

### Methods on Object.prototype

`Object.prototype` has several useful built-in non-enumerable methods for objects that have it as a prototype. These include:

1. `Object.prototype.hasOwnProperty(prop)`: returns a boolean representing whether the calling object has as its own property `prop`
2. `Object.prototype.toString()`: returns a string representation of the object
3. `Object.prototype.isPrototypeOf(obj)`: returns a boolean representing whether the ==calling object== is a prototype of `obj`

### Objects Without Prototypes

**A clean or bare object** is one whose prototype is set to `null` and so does not have `Object.prototype` within its prototype chain. It thus does not have the built-in properties or methods of JavaScript objects.

To test for whether an object has the usual built-in properties, use a guard clause with `Object.getPrototypeOf()`.

---

## [2.4 Practice Problems](https://launchschool.com/lessons/1eaf5e37/assignments/f7b8620b)

---

## [2.5 Function Expressions](https://launchschool.com/lessons/1eaf5e37/assignments/be77df06)

### Function Declarations vs. Function Expressions

Functions that are defined by function declarations can be called in code prior to where they are declared. This is because, prior to executing the code, the JavaScript engine runs a first pass over the code to prepare for the execution. This preparation includes internally **hoisting** function declarations, i.e., virtually moving them to the top of the scope within which they are defined.

Function declarations include only those statements in which the `function` keyword is the *very first thing on a line* and the statement is *not embedded* within another statement (e.g., a `return` statement) or expression (e.g., `console.log`) from the preceding lines. All other function definitions are function expressions. Function expressions include even some function definitions that use the `function` keyword, namely those for which the `function` keyword is not the first thing on the line (regardless of whether the function is assigned to a variable).

A **named function** is one whose definition consists of the `function` keyword followed by a progammer-defined name. All other functions are **anonymous functions**. Even functions that have been assigned to a variable can be anonymous, since a variable name is not the same thing as a function name. The function name is what follows the `function` keyword.

All function declarations create named functions, since the JavaScript engine prohibits a function declaration/statement from not assigning a name.

Not all function expressions create anonymous functions. Namely, those created using the `function` keyword can be given a name. This name is invisible in the surrounding scope of the function. But there are two uses for naming a function defined by a function expression:

1. for debugging: the function name will be provided in the stack trace
2. for recursive functions: the function name will be accessible within the function body

### Arrow Functions

Arrow functions are always both function expressions and anonymous functions.

### First-Class Functions

All JavaScript functions are **first-class functions** or **first-class objects**, which means that they are like any other value insofar as they can be:

1. assigned to variables *and properties*,
2. passed as arguments to other functions, and
3. returned from other functions.

To accomplish each of these three things, invocation syntax, i.e., `()`, should not be used. That's because invocation syntax calls the function, and it would be the function's return value that would be assigned to a variable (etc.) instead of the function itself.

### Type of a Function Value

All functions in JavaScript are of the `function` data type, which are in fact a type of object (i.e., a complex data type that has both properties and methods).

---

## [2.6 Higher Order Functions](https://launchschool.com/lessons/1eaf5e37/assignments/0d10f0ef)

A **higher-order function** is one that either takes another function as an argument of returns another function.

The advantage of such functions is that they allow for a greater level of abstraction.

### Functions That Accept Functions as Arguments

One benefit of creating functions that accept other functions as arguments is that it creates a way to not duplicate code and to abstract away some of the implementation details of particular operations. For example, array methods such as `map` allow one not to reduplicate code for creating a new array, iterating over the calling array, etc.

### Functions that Return a Function

Functions that return other functions are *function factories*, where the arguments passed determine specific features of the functions produced.

---

## [2.7 The Global Object](https://launchschool.com/lessons/1eaf5e37/assignments/a83079aa)

The **implicit execution context for function invocations** in JavaScript is the global object. The global object is `global` in Node.js and `window` in the browser. For the notion of *execution context* more generally, see Lesson 2.8 below.

The `global` object is available everywhere throughout a program. JavaScript's built-in values (such as `undefined`), functions (such as `parseFloat`), and ==types== (such as `String`) are properties of `global` (i.e., `global.undefined`, `global.parseFloat`, and `global.String`).

### The Global Object and Undeclared Variables

Undeclared variables are added as properties to the global object. When accessing a variable, JavaScript first looks for the variable within local scope, the global scope, and finally within the global object. 

---

## [2.8 Implicit and Explicit Execution Context](https://launchschool.com/lessons/1eaf5e37/assignments/49869006)

### Execution Context

The **execution context** is the environment in which code is executed, and in JavaScript this consists in the current value of the `this` keyword. Every function/method call has an execution context.

JavaScript's rule for how execution context is determined/set: what matters is *how* a function/method is invoked, *not where or when* it is defined or invoked.

There are two ways that (execution) context is determined or set:

1. implicit: the default execution context provided by the JavaScript engine, for when the program's code doesn't explicitly determine the context
2. explicit: the code written overrides the default/implicit execution context with a programmer specified context

**Binding or setting the binding of `this`** refers to determining or setting the execution context of `this` to a particular object for invoking a function/method.

### Function Execution Context (Implicit)

The implicit execution context for regular function execution is the global object (`global` in Node.js or `window` in the browser). This means that for regular function invocations `this` refers to the global object when it appears within the function body.

#### Strict Mode and Implicit Context

When strict mode is enabled, the implicit function execution context is `undefined` instead of the global object.

### Method Execution Context (Implicit)

The implicit execution context for regular method execution is the object used to call the method. This means that for regular method invocations, `this` refers to the calling object.

Since what matters for execution context is *how* a method is invoked, the execution context of a method can change if it is invoked by something other than the object in which the method is defined (e.g., when it invoked on its own by assigning it to a variable).

### Explicit Function and Method Execution Context

The two main ways to explicitly determine the execution context / bind `this`: `call` and `apply`.

#### Explicit Execution Context with `call`

The function method `call` invokes a function/method with an explicit execution context provided as an argument. The calling function/method can be passed arguments by passing them to `call` after the execution context argument. Its syntax is as follows:

- for functions: `someFunction.call(context, arg1, arg2, arg3, ...)`
- for methods: `someObject.someMethod.call(context, arg1, arg2, arg3, ...)`

#### Explicit Execution Context with `apply`

The function method `apply` works like `call`, except that arguments to be passed to the calling function/method are passed to `apply` within an array. Its syntax is as follows:

- for functions: `someFunction.apply(context, [arg1, arg2, arg3, ...])`
- for methods: `someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])`

Since spread syntax has been introduced, `apply` isn't necessary to use.

### Summary

Since the binding of `this` in JavaScript is determined by how a function/method is invoked, JavaScript does not (==strictly?==) use lexical scoping in determining the value of `this`.

---

## [2.9 Practice Problems: Implicit and Explicit Function Execution Contexts](https://launchschool.com/lessons/1eaf5e37/assignments/a6c48cbb)

--- 

## [2.10 Hard Binding Functions with Contexts](https://launchschool.com/lessons/1eaf5e37/assignments/155c4ab6)

The `bind` function method creates and returns a new function whose execution context is *permanently* set to the method's first argument. Since the execution context is permanent, the value of `this` will always be bound to the explicitly specified context, no matter how the function/method is invoked, even if `apply`, `bind`, or `call` is used another time.

Its syntax is: `someFunction.bind(context, arg1, arg2, arg3, ...)`.

Since `bind` creates a new function, the original function and its execution context remains unchanged.

---

## [2.11 Practice Problems: Hard Binding Functions with Contexts](https://launchschool.com/lessons/1eaf5e37/assignments/ed3a72f0)

---

## [2.12 Dealing with Context Loss I](https://launchschool.com/lessons/1eaf5e37/assignments/624e2099)

### Overview of Context Loss

**Context loss** occurs in JavaScript when the execution is not what is intuitively expected.

Context loss occurs in (at least) 3 ways, namely when:

1. a method is copied from an object & used elsewhere,
2. a function is nested within an object's method, and,
3. a function is passed as an argument to another function

### The Problem: Method Copied from Object

Context loss can occur when a method is copied from an object and used elsewhere (e.g., as a function or as a method of another function). This is because the method/function's execution context is no longer the original object.

More particularly, it occurs when a method is passed as an argument to a function. The method's context is no longer then the original object but instead the global object.

### Solution 1: add `thisArg` to the function and use `call`

One solution is to pass the object / expected execution context as a second argument and use the `call` method. This also works for array methods such as `forEach`, `map`, and `filter`, which take an optional `thisArg` argument for setting the execution context.

There are 2 disadvantages of this solution:

1. Can't pass a context argument to the function, e.g., with functions from libraries.
2. It's good to use fewer arguments if possible. 

### Solution 2: use `bind` and pass the resulting function

There is 1 disadvantage of this solution:

1. You can't tell the function's context by looking at how the function is invoked.

## [2.13 Dealing with Context Loss II](https://launchschool.com/lessons/1eaf5e37/assignments/dc50753a)

### The Problem: Inner Function Not Using the Surrounding Context

A function nested within a method will have the implicit execution context for functions. So, within such a function the value of `this` will be the global object instead of the object of the outer method. So, when that function is invoked within the method, the context of the object will be lost.

### Solution 1: Preserve Context with a Variable in Outer Scope

The method's context can be preserved by assigning it to a variable in the method before the nested function:

- `let self = this`
- `let that = this`
- `let context = this`

Then, the inner function can use the variable instead of `this`.

### Solution 2: Call Inner Function with Explicit Context

The method's context can also be preserved by calling the function within the method by using `apply` or `call`.

### Solution 3: Use `bind`

The nested function's context can be permanently set by using `bind`, either with function expression and method chaining or with a function declaration followed by a function expression.

Advantage over Solution 2: don't have to repeatedly call the function with the context as an argument.

### Solution 4: Using an Arrow Function

Instead of having the implicit function execution context of the global object, arrow functions receive the execution context **lexically**, i.e., they receive it from the surrounding context in which they are defined. So, the nested function will keep the expected context if it is defined with an arrow function.

### Note on Arrow Functions and Execution Context outside of Functions & Methods

Outside of the bodies of functions and methods, the implicit execution context is always the global object (or, when executing a file with `node`, it is the *module*). See [here](https://launchschool.com/posts/be164a87) and [here](https://launchschool.com/posts/1355d9b8).

One implication of this is that instances of `this` that are within an object literal but not within any of its methods will reference the global object. Thus, `this` within the value of any property/state will be a reference to the global object, not the object of that property.

Similarly, since arrow functions receive their execution context lexically, their execution context will be the global object when they are used to define a method. Thus, arrow functions should be avoided for defining methods.

## [2.14 Dealing with Context Loss III](https://launchschool.com/lessons/1eaf5e37/assignments/72c5b578)

### The Problem: Function as Argument Losing Surrounding Context

Context can be lost when a function whose body refers to `this` is passed as an argument to another function. That can occur when/because the execution context of the former function is not the global object, and passing the function as an argument results in a new execution context that is the global object.

### Solution 1: Preserve the Context with a Variable in Outer Scope

### Solution 2: Use `bind` within the function argument

### Solution 3: Use an Arrow Function

### Solution 4: Use the optional `thisArg` argument for methods like `forEach`

### Summary

## Overview of Dealing with Context Loss

The 3 problems and their solutions:

1. Context is lost when a method is copied from an object & used elsewhere (e.g., passed as an argument to a function).

   A. Use `call`/`apply` and if necessary modify the target function to accept the intended context as a `thisArg` argument.
   B. Use `bind` to create a new function from the method.

2. Context is lost when a function is nested within the method of an object, so that the value of `this` within that function is not the method's object but instead the global object.

   A. Assign the outer context to a variable, e.g., `let self = this`, and use the variable within the function.
   B. Call the nested function with `apply` or `call`.
   C. Create the nested function (with a function expression) with `bind(this)` to set a permanent binding.
   D. Use an arrow function to define the nested function.

3. Context can be lost when a function whose body refers to `this` is passed as an argument to another function.

  A. Preserve the Context with a Variable in Outer Scope.
  B. Use `bind` within the function argument.
  C. Use an Arrow Function.
  D. Use the optional `thisArg` argument for methods like `forEach`.

Synthesis of the problems: context loss occurs
  - either when a function/method is passed as an argument to a function (problems 1 & 3)
  - or when a function is nested within another function.

Synthesis of the solutions: there are 5 ways of dealing with context loss:

1. arrow function (not to be used for methods but instead for functions that are nested or arguments)
2. `call`/`apply` (for methods passed as function arguments)
3. `thisArg` to pass context as argument
4. `bind`
5. outer variable `let self = this`

---

## [2.15 Practice Problems: Dealing with Context Loss](https://launchschool.com/lessons/1eaf5e37/assignments/408c20c3)

---

## [2.16 Summary](https://launchschool.com/lessons/1eaf5e37/assignments/7dae69f0)

JavaScript's first-class functions are dynamically bound to a context when they are executed.

---

## [2.17 Lesson 2 Quiz 1](https://launchschool.com/lessons/1eaf5e37/assignments/39b60e49)

An object whose `[[Prototype]]` property is set to `null` does not have an object prototype. That's because an object prototype must itself be an object.

"entity" and "object" and "value" are all the same: all JavaScript functions are first-class *entities*.

---

## [2.18 Lesson 2 Quiz 2](https://launchschool.com/lessons/1eaf5e37/assignments/69e660e6)

`global` is a property of the global object.

---

## Questions

### Question about `bind`

What do the additional arguments passed to the `bind` method do? Is it that the new function has its first arguments permanently set to the arguments passed to the `bind` method?

### Question about `bind`'s use for context loss with nested functions within methods

- Does `bind` have the disadvantage that it prevents the outer function/method from being used as a method for another object?
- Answer: No. See my `bind_question.js`. What presumably explains this is that the nested function is not created until the outer function/method is invoked.

---

## Tasks

- [ ] Add my own examples, especially for context loss.
- [ ] Backup Pages
- [ ] Watch [video on prototypes](https://www.youtube.com/watch?v=-N9tBvlO9Bo)
- [x] Add Anki cards
- [ ] Go through discussion board questions, continue [here](https://launchschool.com/lessons/1eaf5e37/home?page=2)

---
