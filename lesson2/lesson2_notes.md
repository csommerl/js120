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

1. Computed member access notation accepts expressions (which are e

TODO

(, whereas non-computed doesn't (unclear if this is a difference).
2. Member access notation is limited insofar as it accepts as keys only strings that meet JavaScript's rules for valid variable names, whereas computed member access notation accepts any UTF-8 compatible string.

Example of (1):

```javascript
let obj = {5: 'five'};
let strExp = '5';
let numExp = 5;

obj.'5'; // throws `SyntaxError`
obj.5; // throws `SyntaxError`
obj.strExp; // undefined
obj.numExp; // undefined

obj['5']; // 'five'
obj[strExp]; // 'five'
obj[numExp]; // 'five'
obj[5]; // 'five': bracket notation implicitly coerces non-strings to strings
```

Example of (2):

```javascript
TODO
```

### Property Existence

...

---

## Later

- Go through discussion board questions
