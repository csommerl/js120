## [Lesson 4: Subclassing and Code Reuse Patterns](https://launchschool.com/lessons/d5964d17/assignments)

[TOC]

---

## [4.1 Introduction](https://launchschool.com/lessons/d5964d17/assignments/b68dadcf)

This lesson's focus is on 4 things:

1. creating object subtypes,
2. using mix-ins,
3. polymorphism, and
4. the OLOO object-creation pattern.

---

## [4.2 Object Creation with Prototypes (OLOO)](https://launchschool.com/lessons/d5964d17/assignments/3db48c51)

### The OLOO Pattern

The **Objects Linking to Other Objects (OLOO) Pattern** is a pattern for creating objects where properties common to all objects of the same type are extracted to a prototype object, from which objects of that type inherit those properties.

The `init` method ...

### Advantage of OLOO over Factory Function

...

- [ ] See private state explanation in next lesson.

---

## [4.3 Practice Problems: Object Creation with Prototypes](https://launchschool.com/lessons/d5964d17/assignments/02f965cb)

Objects created with OLOO do not have private state insofar as an object state can be accessed and modified with outside code.

Objects created with factory functions have private state insofar as the body of the factory function can have states?????

---

## [4.4 Subtyping with Constructors and Prototypes](https://launchschool.com/lessons/d5964d17/assignments/006358da)

...

---

## TODO

- [ ] [Read OLOO article](https://karistobias.medium.com/part-1-the-javascript-oloo-pattern-explained-with-pictures-34be175b7908)
- [ ] Summarize / enumerate object creation patterns, create separate markdown file
  1. RPS style with `createPlayer` and then `createHuman`
  2. Schaul
  3. constructor pattern
  4. class pattern
  5. OLOO
- [ ] Enumerate Object Factory Sub-patterns
  1. return object with object-literal syntax
  2. create empty object, use access notation, and return object
  3. use `Object.create` to create bare bones prototype relations (see video for example)??
