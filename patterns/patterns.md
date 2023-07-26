# Object Creation Patterns

[TOC]

---

## Pseudo-Classical with Constructors

### Object Creation

...

### Sub-type Creation

3 Steps:

1. `SuperType.prototype.call(this, prop1, ...)` within the sub-type constructor's body: sub-type objects will get the same instance properties as those in the super-type.
2. `SubType.prototype = Object.create(SuperType.prototype)` after the constructor: sub-type will inherit all the instance methods of the super-type.
3. `SubType.prototype.constructor = SubType` after the constructor: sub-type instance property `constructor` will point to the sub-type, not the super-type.

