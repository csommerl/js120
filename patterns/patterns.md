## Object Creation Patterns

[TOC]

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

3 Steps:

1. `SuperType.prototype.call(this, prop1, ...)` within the sub-type constructor's body: sub-type objects will get the same instance properties as those in the super-type.
2. `SubType.prototype = Object.create(SuperType.prototype)` after the constructor: sub-type will inherit all the instance methods of the super-type.
3. `SubType.prototype.constructor = SubType` after the constructor: sub-type instance property `constructor` will point to the sub-type, not the super-type.

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
