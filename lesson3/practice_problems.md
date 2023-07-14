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