## Practice Problems

[TOC]

---

## [3.4 Practice Problems - Factory Functions](https://launchschool.com/lessons/e3c64e3f/assignments/bf77a962)

1. The two disadvantages of using factory functions are, first, that they require more memory because they reduplicate any methods for each object created by a factory function, and, second, that they do not give any way of determining whether a given object is of a particular type (i.e., created by a factory function).

2. See `3-4-2.js`.

3. ...

4. ...

5. ...

---

## [3.6 Practice Problems: Object Orientation](https://launchschool.com/lessons/e3c64e3f/assignments/c8712db5)

1. A `product` data type could be created with the properties `id`, `name`, `stock`, and `price`. If another drill is added, you could use a different name. You could also create a `type` property that has the value `drill`.

---

## [3.7 Constructors](https://launchschool.com/lessons/e3c64e3f/assignments/5ca112a7)

1. Constructor functions conventionally have capitalized names.

2. When this code is run, a `TypeError` is thrown. This is because line 7 does not execute `Lizard` as a constructor function, since the `new` keyword is not used. Thus, in line 7, the global variable `lizzy` is assigned to `undefined`, the return value of the `Lizard` (had implicitly because it lacks a `return` statement and because it's not executed as a constructor). Since `undefined` is not of the object type, methods cannot be called by it. So, the exception is raised.

3. ...

---

## [3.9 Practice Problems - Constructors and Prototypes](https://launchschool.com/lessons/e3c64e3f/assignments/ee0fee9d)

1. This code will log `NaN` twice. `rect1` is created in line 17 as an instance of the `Rectangle` constructor defined on lines 10-15. As such, it receives its `area` and `perimeter` properties from lines 13 and 14 respectively. The values of these properties are the result of using the `RECTANGLE` object to call its `area` and `perimeter` methods. The key point here is that those methods are defined within `RECTANGLE` using `this`, whose value is determined by the implicit execution context: namely, the object that calls the methods. Since `RECTANGLE` was used to call the methods, the value of this is the `RECTANGLE` object. And since that object lacks `width` and `height` objects, `this.width` and `this.height` both evaluate to `undefined`. Since mathematical operations with `undefined` return `NaN`, that is the value of the `area` and `perimeter` properties of `rect1`.

4. This code will print `true`, which is the value returned by using `ninja` to call the `swingSword` method. Line 5 creates `ninja` as an instance of the `Ninja` constructor, which created `ninja` with a single property of its own: `swung` with the value `true`. Lines 7-9 add the `swingSword` method to `Ninja`'s function prototype, and this method simply returns the value of `swung` of `this`. When `ninja` calls the `swingSword` method, it delegates the execution of that method to its prototype, which is `Ninja`'s function prototype. Despite that, the value of `this` within the method is `ninja`, since the implicit execution context of method execution is the object that calls the method.

Furthermore, `ninja` is able to delegate the execution of `swingSword` to the function prototype, even though that method is added to `Ninja`'s function prototype after `ninja` was created. That's because it is only in line 11 that the JavaScript engine attempts to access `swingSword` within `ninja` or its prototype chain, and by that point `swingSword` already is a method of the function prototype.

5. This code will 

BAD ANSWER: This code will also output `true`. The only difference with the last code snippet consists in lines 7-11, where instead of adding the `swingSword` method to `Ninja`'s function prototype, that function prototype is assigned to a new object that contains the `swingSword` method. This does not change what happens when `ninja` delegates the execution of `swingSword` to the function prototype, since JavaScript still looks within the object referenced by the `prototype` property of `Ninja`.

---
