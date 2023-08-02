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

OLOO is accomplished in JavaScript by having 3 things:

1. a prototype object,
2. an initializer method within the prototype object to customize the state for each object,
3. the use of `Object.create(protoObj).init(args)` to create objects that inherit from the prototype object.

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

## [4.7 Rewriting OO RPS with Constructors and Classes](https://launchschool.com/lessons/d5964d17/assignments/aadce82e)

### OO RPS With Constructors and Prototypes

Steps for converting factory-function code to constructors:

1. Write constructor function for each factory function.
2. Move initialization code to constructor function.
3. Move methods to constructor function.
4. Replace factory function invocations.

### OO RPS with Classes

Steps for converting constructor code to classes:

1. Write class for each factory function.
2. Move constructor function into the class.
3. Move prototype functions into the class.

---

## [4.8 Code Reuse with Mixins](https://launchschool.com/lessons/d5964d17/assignments/e7850b07)

**Single inheritance** occurs when an object (or class) can inherit from only one prototype object (or class). JavaScript is a single-inheritance language.

**Multiple inheritance** occurs when an object (or class) can inherit from multiple objects (or classes).

Single inheritance causes problems when two or more classes share the same method (with the same implementation) but that method is not appropriately contained within any class from which both those classes inherit.

### Mix-ins

A **mix-in** is a pattern that adds a property/method from one object to another (without using prototypal delegation to a class/constructor prototype object but instead approaches like `Object.assign`).

A **mix-in** is an object that has (as its own properties) one or more methods that can be mixed into a class such that all instances of the class can access those methods.

Steps to create and use a mix-in in JavaScript:

1. Create an object (a constant in title case) that defines a method to be mixed-in.
2. Define the class.
3. Use `Object.assign(Class.prototype, MixInObject)` to add the mix-in's method to the class's prototype object.

One *downside* to mix-ins is that they create a copy of methods, straining memory.

### Mix-ins vs. Inheritance

One OOP approach in JavaScript is to use factory functions with mix-ins, avoiding the use of inheritance.

But this approach has the two downsides of all factory functions:

1. tax on memory due to reduplication of methods, and
2. less easy debugging, since there is a lack of means to determine the type of an object.

Suggested approach:

1. Use inheritance for *is a* relationships.
2. Use mix-ins for *capabilities that transcend is-a relationships* or for *has-a relationships*.

---

## [4.9 Polymorphism](https://launchschool.com/lessons/d5964d17/assignments/22f0ecca)

### Polymorphism through Inheritance

**Polymorphism** in the general sense occurs when data of different types share a common interface. More specifically, it occurs when objects with different types respond in different ways to the same method invocation.

The *advantage* of polymorphism is that it enables more maintainable code, since the same method name can be invoked on any of the relevant objects.

### Polymorphism through Inheritance

**Polymorphism through inheritance** occurs when there is a class with an instance method and all instances of that class & its sub-types either 1. inherit the method from the class's prototype object, or 2. inherit a method with the same name from a sub-type's prototype object. In the latter case, the sub-type's method *overrides* the super-type's method.

Example: `toString`:

1. All instances of the `Object` type inherit the `toString` method from `Object.prototype`. This generic method returns the string `[object Object]`.
2. But the `Array` type defines a `toString` method name that overrides the generic `toString` method. When array instances invoke the `toString` method, a string is returned that contains string representations of each element of the array, separated by commas.

### Polymorphism through Duck Typing

**Duck typing** occurs when objects of unrelated types are intentionally designed to have methods that have the same name and the same number & type of arguments, and these methods have different but similar behavior. It is an informal manner of typing objects: if an object quacks like a duck, it can be treated like a duck.

Having a method of the same name does not suffice for duck typing. A further requirement is that the methods be intentionally designed to be polymorphic.

---

## [4.10 Summary](https://launchschool.com/lessons/d5964d17/assignments/227d4701)

---

## Questions

### Question about alternative mix-in syntax

Why not define a method to be mixed-in with a function and then pass the method with `Object.assign(className.prototype, {mixInFunction})`?

```javascript
function swim() {
  return `${this.name} is swimming.`;
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Fish.prototype, {swim});

let fish1 = new Fish("Nemo");

console.log(Fish.prototype.swim === swim);
```

### Question about memory use of mix-ins

It seems that mixed-in methods aren't reduplicated. (**LS doesn't ever say otherwise!**) That's because functions are objects, and objects are passed by reference. When a method is mixed-in to a class's prototype object, what is mixed-in is a reference to the same function in memory.

```javascript
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Fish.prototype, swimMixin);

let fish1 = new Fish("Nemo");

console.log(Fish.prototype.swim === swimMixin.swim); // returns true
```

### Question about alternative mix-in approach

(See previous question) Why not define the method to be mixed-in with a function, and then add the function as an instance method to the object? It seems that this would have the added benefit of 

```javascript
function swim() {
  return `${this.name} is swimming.`;
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim = swim;
}
```

Answer: this puts `swim` in every instance of the `Fish` class, so is inadvisable.

### Question about Duck-Typing

- Does duck-typing always involve creating two methods: one with the common name, which invokes another method of the object?

---

## TODO

- [ ] Redo [Pet Shelter](https://launchschool.com/exercises/2b521c67)
- [ ] Further exploration of [Banner Class](https://launchschool.com/exercises/398917ba).
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
