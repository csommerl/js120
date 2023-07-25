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

To avoid manually creating instance properties of objects created by OLOO, the prototype can be given an `init` method whose parameters are the instance's property values and whose body sets the instance's properties to those values (and returns the instance object).

### Advantage of OLOO over Factory Function

The *advantage* of OLOO over the factory function pattern is *memory efficiency* insofar as there is only one copy of instance methods within the prototype object, instead of each instance having its own copy.

The *advantage* of the factory function pattern over OLOO is that it creates objects with *private state*.

---

## [4.3 Practice Problems: Object Creation with Prototypes](https://launchschool.com/lessons/d5964d17/assignments/02f965cb)

Objects created with OLOO do not have private state insofar as an object state can be accessed and modified with outside code.

Objects created with factory functions have private state insofar as the body of the factory function can have states?????

---

## [4.4 Subtyping with Constructors and Prototypes](https://launchschool.com/lessons/d5964d17/assignments/006358da)

Constructors and prototypes in JavaScript only resemble classes in other OOP languages. Likewise with the concept of inheritance.

A class is a **sub-type** of another class when it inherits from the latter. A class is a **super-type** of another class when the latter inherits from it.

A class inherits from another class insofar as the former's function prototype inherits from the latter's.

### Restoring the `constructor` property

A sub-type's `constructor` instance property is assigned to its super-type unless you reassign the sub-type's function prototype to have a `constructor` property set to the subtype (`Subtype.prototype.constructor = Subtype`).

### Constructor Reuse

A sub-type can reuse its super-type's body by using function instance methods such as `call`.

### Prototypal Inheritance vs. Pseudo-Classic Inheritance

There are two different kinds of inheritance:

1. prototypal, and
2. pseudo-classical.

**Prototypal inheritance** or **prototypal delegation** or **object inheritance** occurs when each object's inheritance is set one at a time.

**Prototypal delegation** occurs insofar as the JavaScript engine will look in an object's prototypal chain for a property until the property is found or the prototypal chain terminates.

**Pseudo-classical object construction** or the **constructor/prototype pattern** mimics classes in other OOP languages insofar as instance objects inherit from a constructor function's prototype object.

**Pseudo-classical inheritance** or **constructor inheritance** occurs when a constructor's prototype object inherits from another constructor's prototype object.

### Steps for creating a sub-type

1. Create the sub-type's constructor.
2. Assign the sub-type's prototype object to an object that inherits from the super-type's prototype object (`Subtype.prototype = Object.create(Supertype.prototype)`).
3. Assign the `constructor` property of the sub-type's prototype object to the sub-type constructor.
4. Add methods to the sub-type's prototype object.

Alternatively, the `class` keyword with the `extends` keyword can be used for pseudo-classical inheritance.

### Practice Problem

---

## TODO

- [x] [Read article on Constructors](https://tobyho.com/2010/11/22/javascript-constructors-and/)
- [ ] [Read OLOO article](https://karistobias.medium.com/part-1-the-javascript-oloo-pattern-explained-with-pictures-34be175b7908)
  - classes are blueprints / instructions, whereas constructors (or their prototypes) are objects
- [ ] [Read Karis on Pseudo-Classical](https://karistobias.medium.com/part-2-the-javascript-pseudo-classical-pattern-explained-with-pictures-70dfda6c6351)
- [ ] [Read article on Mental Model](https://medium.com/launch-school/javascript-design-patterns-building-a-mental-model-68c2d4356538)
  - difference between setting a sub-type's function prototype to an instance of a super-type (using `new`) versus a child of the super-type's function prototype object (using `Object.create`).
- [ ] Figure out what private state means.
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
