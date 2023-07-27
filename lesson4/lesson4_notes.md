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

A sub-type constructor can reuse its super-type constructor's body by using function instance methods such as `call`.

### Prototypal Inheritance vs. Pseudo-Classic Inheritance

There are two different kinds of inheritance in JavaScript:

1. prototypal, and
2. pseudo-classical.

#### Prototypal Inheritance

**Prototypal inheritance** or **object inheritance** occurs when each object inherits from another object (the prototype object), which in turn inherits from another object, etc.

**Prototypal delegation** refers to how a prototypal chain is traversed once objects have been created with prototypal inheritance. Namely, the JavaScript engine will look in an object's prototypal chain for a property until the property is found or the prototypal chain terminates.

#### Classical Inheritance

**Classical inheritance** occurs when object *types* inherit from other object *types*.

JavaScript does not strictly have classical inheritance, since all inheritance in JavaScript ultimately works through prototypal inheritance.

JavaScript does have pseudo-classical inheritance. 

#### Pseudo-Classical Inheritance

**Pseudo-classical inheritance** or **constructor inheritance** occurs when one constructor's prototype object inherits from another constructor's prototype object. This mimics classical inheritance insofar as objects of the former constructor are a sub-type that inherits from the super-type of objects created by the latter constructor.

**Pseudo-classical object construction** or the **constructor/prototype pattern** refers to creating objects based on pseudo-classical inheritance.

### Steps for creating a sub-type with constructors

1. Create the sub-type's constructor.
2. Within the constructor's body, assign properties shared with the super-type by using `Supertype.call(this, prop1, ...)`.
3. Within the constructor's body, add any additional properties specific to the sub-type by using `this`.
4. Assign the sub-type's prototype object to an object that inherits from the super-type's prototype object by using `Subtype.prototype = Object.create(Supertype.prototype)`.
5. Set the constructor property to the sub-type constructor by using `Subtype.prototype.constructor = Subtype`.
6. Add methods to the sub-type's prototype object.

### Practice Problem

---

## [4.5 Subtyping with Classes](https://launchschool.com/lessons/d5964d17/assignments/7054ee88)

See the [Gist](https://launchschool.com/gists/cdba6a8e).

### Inheritance with Class Declarations

The syntax for creating a sub-type with a class declarations is as follows:

```javascript
class Subtype extends Supertype {
  constructor(prop1, ...) {
    super(prop1, ...);
  }

  methodName() {
    ...
  }
}
```

### `extends` keyword

The `extends` keyword is used in class declarations & expressions to create a class that is a child of another class.

Its syntax is: `class Child extends Parent`.

The only limitation is that the parent class must be callable with `new` and have a `prototype` property.

### `super` keyword

When used within the `constructor` method, the `super` keyword refers to the constructor method within the parent class. It is used to add to the child's instance the same properties that parents' instances have.

Its syntax is: `super(prop1, ...)`.

A `ReferenceError` will be thrown by using `super` within the `constructor` method when it is not invoked prior to:

1. accessing `this`,
2. accessing properties using `super`, or
3. returning from derived constructor.

Overall, `super` has 3 uses:

1. to invoke a superclass's constructor method
2. to access properties & methods on a class's `[[Prototype]]` (e.g., when defining instance methods of the subclass)
3. to access properties & methods on an object literal's `[[Prototype]]`.

### Inheritance with Class Expressions

### Other

If a sub-type does not add any new properties beyond the super-type, the sub-type's class statement need not include a `constructor` method. That's because the execution of the `constructor` function is delegated to the super-type. See [Complete the Program - Cats!](https://launchschool.com/exercises/94c9e258).

---

## [4.6 Practice Problems: Subtyping with Classes](https://launchschool.com/lessons/d5964d17/assignments/16921628)

**Method overriding** occurs when a subclass has a method with the same name as the superclass: what happens is that the subclass's method is accessed/invoked by subclass instances, rather than the superclass's method.

---

## TODO

- [ ] Add to Anki:
  - [ ] classes are blueprints / instructions, whereas constructors (or their prototypes) are objects
  - [ ] difference between setting a sub-type's function prototype to an instance of a super-type (using `new`) versus a child of the super-type's function prototype object (using `Object.create`): former executes constructor body, latter doesn't; alternatively, the former creates an instance of the super-type whereas the latter doesn't.
- [x] [Read article on Constructors](https://tobyho.com/2010/11/22/javascript-constructors-and/)
- [x] [Read OLOO article](https://karistobias.medium.com/part-1-the-javascript-oloo-pattern-explained-with-pictures-34be175b7908)
- [x] [Read Karis on Pseudo-Classical](https://karistobias.medium.com/part-2-the-javascript-pseudo-classical-pattern-explained-with-pictures-70dfda6c6351)
- [x] [Read article on Mental Model](https://medium.com/launch-school/javascript-design-patterns-building-a-mental-model-68c2d4356538)
- [ ] Figure out what private state means.
- [ ] Summarize / enumerate object creation patterns, create separate markdown file
  1. RPS style with `createPlayer` and then `createHuman`
  2. Schaul
  3. constructor pattern
  4. class pattern
  5. OLOO
  - advantages and disadvantages of each
- [ ] Enumerate Object Factory Sub-patterns
  1. return object with object-literal syntax
  2. create empty object, use access notation, and return object
  3. use `Object.create` to create bare bones prototype relations (see video for example)??