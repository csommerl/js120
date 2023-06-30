# [Lesson 2: Functions, Objects, and Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments)

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

So, instead of property access notation, there are two *direct* ways to determine whether an object has a property:

1. the `in` operator: `prop in obj`
2. the `hasOwnProperty` method: `obj.hasOwnProperty(prop)`

Each returns `true` if the specified property name (or key) is in the specified object. The main difference between them is that `in` will also return `true` if the property is anywhere in the object's prototype chain, whereas `hasOwnProperty` will not look for the property within the prototype chain.

There are also two *indirect* ways to check whether an object has a key, by getting an array of the object's property names:

3. `Object.keys(obj).includes(prop)`
4. `Object.getOwnPropertyNames(obj).includes(prop)`

The main difference between them is that `Object.keys` will get only the object's enumerable properties, whereas `Object.getOwnPropertyNames` will get all the object's properties (whether enumerable or not).

An **enumerable property** is one that will be visited by the most common iterative procedures performed upon objects. More precisely, an enumerable property is one whose internal enumerable flag is set to `true` (the default when creating properties in the most common ways).

---

## [2.3 Object Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments/ccf2e4a7)

...

---

## Later

- add to anki
- Go through discussion board questions
