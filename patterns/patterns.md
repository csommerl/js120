## Object Creation Patterns

[TOC]

---

## Overview

1. Non-inheritance
   a. Factory functions
2. Inheritance
   a. OLOO
   b. Pseudo-classical
      i.  constructors
      ii. classes
3. Hybrid
   a. Factory functions with mix-ins

Each of the above can also be complemented by the use of mix-ins.

---

## Factory Function (FF)

Definition
No inheritance?

### Type Creation

### Instance Creation

### Sub-Type Creation

?????

---

## Objects Linking to Other Objects (OLOO)

Definition
Pure prototypal inheritance / prototypal delegation / object inheritance

OLOO is accomplished in JavaScript by having 3 things:

1. a prototype object;
2. an initializer method within the prototype object to customize the state for each object; and,
3. the use of `Object.create(protoObj).init(args)` to create objects that inherit from the prototype object.

### Advantage of OLOO over Factory Function

The *advantage* of OLOO over the factory function pattern is *memory efficiency* insofar as there is only one copy of instance methods within the prototype object, instead of each instance having its own copy.

### Type Creation

### Instance Creation

### Sub-Type Creation

?????

---

## Constructors

Definition
Pseudo-classical inheritance / constructor inheritance
Difference from pure classical?
Constructor/Prototype Pattern

### Type Creation

2 Steps:

1. `function Constructor(prop) {this.prop = prop}`.
2. `Constructor.prototype.method = function() {}`.

### Object Creation

### Sub-type Creation

6 Steps:

1. Create the sub-type's constructor.
2. Within the constructor's body, assign properties shared with the super-type by using using `Supertype.call(this, prop1, ...)`.
3. Within the constructor's body, add any additional properties specific to the sub-type by using `this`.
4. Assign the sub-type's prototype object to an object that inherits from the super-type's prototype object by using `Subtype.prototype = Object.create(Supertype.prototype)`.
5. Set the constructor property to the sub-type constructor by using `Subtype.prototype.constructor = Subtype`.
6. Add methods to the sub-type's prototype object.

---

## Classes

Definition
Pseudo-classical inheritance / constructor inheritance
Difference from pure classical?
Constructor/Prototype Pattern

### Type Creation

### Object Creation

### Sub-Type Creation

---
