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

instead of property access notation, there are two *direct* ways to determine whether an object has a property:

1. the `in` operator: `prop in obj`
2. the `hasOwnProperty` method: `obj.hasOwnProperty(prop)`

Each returns `true` if the specified property name (or key) is in the specified object. The main difference between them is that `in` will also return `true` if the property is anywhere in the object's prototype chain, whereas `hasOwnProperty` will not look for the property within the prototype chain.

#### Indirect Ways

There are also two *indirect* ways to check whether an object has a key, by getting an array of the object's property names:

1. `Object.getOwnPropertyNames(obj).includes(prop)`
2. `Object.keys(obj).includes(prop)`

Both of these will retrieve only the object's own properties, and not any properties higher in the prototypal chain. But the difference between them is that whereas `Object.getOwnPropertyNames` will get all the object's properties (whether enumerable or not), `Object.keys` will get only the object's enumerable properties.

#### Enumerability (supplemented with material from 2.3)

An **enumerable property** is one that will be visited by the most common iterative procedures performed upon objects, such as a `for ... in` loop. Thus, enumerable properties are those over which it is useful to iterate.

More precisely, an enumerable property is one whose internal enumerable flag is set to `true` (the default when creating properties in the most common ways). Most properties and methods of JavaScript's built-in data types are not enumerable.

`Object.prototype.propertyIsEnumerable(prop)` returns a boolean for whether an object's property is enumerable.

#### Summary

The four approaches above are ordered from the *most to least inclusive* of the properties they test for.

1. `prop in obj`: returns `true` if `prop` is in `obj`'s *prototypal chain*, whether or not `prop` is enumerable
2. `obj.hasOwnProperty(prop)`: returns `true` if `prop` is `obj`'s *own* property, whether or not `prop` is enumerable
3. `Object.getOwnPropertyNames(obj).includes(prop)`: returns `true` if `prop` is `obj`'s *own* property, whether or not `prop` is enumerable
4. `Object.keys(obj).includes(prop)`: returns `true` if `prop` is `obj`'s *own enumerable* property

---

## [2.3 Object Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments/ccf2e4a7)

### Prototypes

**Prototypal inheritance** is a feature of JavaScript objects that can be used in order to avoid rewriting duplicate code for objects of the same type (i.e., objects that have some of the same properties and methods).

A **prototype** is an object from which another object inherits properties and methods.

Inherited properties are not part of an object's own properties. Instead, access to inherited properties and methods is *delegated* to the prototype.

JavaScript keeps track of object prototypes by means of the internal `[[Prototype]]` property. Although that property is not directly accessible, it can be accessed indirectly by means of two object functions:

1. `Object.getPrototypeOf(obj)` returns `obj`'s prototype object.
2. `Object.setPrototypeOf(obj, newProtoObj)` sets the prototype of `obj` to `newProtoObj`.

Using `setPrototypeOf` to set a prototype of an empty object is equivalent to using `Object.create`. This function implies that an object can have *only one* prototype at the next level up in the prototypal chain. But an object's prototype can itself have a prototype. See The Prototype Chain below.

The `[[Prototype]]` property stores a *reference* to the object's prototype, which means that any changes to the prototype object are inherited by the child object.

### The Default Prototype

All JavaScript objects (created by object literal syntax) inherit from a prototype, the **default prototype** supplied by `Object.prototype`.

### Iterating Over Objects with Prototypes

There are two main ways to iterate over objects:

1. `for/in` loop: iterates over all enumerable properties of an object, as well as its prototype chain (unless a guard clause with `Object.hasOwnProperty` is used).
2. `Object.keys`: provides an array of an object's *own enumerable* properties.

### The Prototype Chain

Since an object's prototype can itself have a prototype, and so on, there exists a **prototype chain**. Usually, the complete prototype chain terminates in `null`, since the default prototype(`Object.prototype`) has as its prototype `null`.

### The `__proto__` Property

The **dunder proto**, `__proto__`, is a deprecated, non-hidden (i.e., directly accessible) version of the `[[Prototype]]` property.

### Property Look-Up in the Prototype Chain

...

### Methods on Object.prototype

`Object.prototype` supplies several useful built-in methods for objects that have it as a prototype. These include:

1. `Object.prototype.hasOwnProperty(prop)`: seen above
2. `Object.prototype.toString()`: returns string representation of the object
3. `Object.prototype.isPrototypeOf(obj)`: returns a boolean representing whether the ==calling object== is a prototype of `obj`

### Objects Without Prototypes

...

---

## [2.4 Practice Problems](https://launchschool.com/lessons/1eaf5e37/assignments/f7b8620b)

(Backup page)

...

---

## Tasks

- Backup Pages
- Add Anki cards
- Go through discussion board questions

---
