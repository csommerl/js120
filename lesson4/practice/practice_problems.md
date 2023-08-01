## Lesson 4 Practice Problems

## [4.3 Practice Problems: Object Creation with Prototypes](https://launchschool.com/lessons/d5964d17/assignments/02f965cb)

3. The objects in both programs have their own `animal` and `name` properties. But in the first program, the `sleep` and `wake` methods are in each object, whereas they are in the object prototype (along with `init`).

---

## [4.4 Subtyping with Constructors and Prototypes](https://launchschool.com/lessons/d5964d17/assignments/006358da)

See `greeting.js`

1.

In line 1, the global variable `hello` is declared and initialized to reference a new instance of the `Hello` constructor. In line 2, the object referenced by `hello` invokes the `hi` method. The `hi` method is not contained in `hello` itself, so JavaScript looks for it and finds it within the object prototype, the prototype object of the `Hello` constructor.

Within the `hi` method, the value of `this` invokes the `greet` method with `'Hello!'` passed as an argument. Since the implicit execution context within method bodies is the object that calls the method, `this` refers to `hello`. Again, JavaScript searches for `greet` within the prototypal chain of `hello`. It does not find it within `hello`, nor within its object prototype `Hello.prototype`, but instead finds it within the latter's prototype, `Greeting.prototype`. The `greet` method simply logs to the console the argument passed to it. Thus, `Hello!` is logged to the console.

2. The `bye` method is not within the prototypal chain of `hello`: it is in neither `hello`, `Hello`, nor `Greeting`. Thus, accessing `bye` returns `undefined`. But since `undefined` cannot be invoked, a `TypeError` is raised.

3. `greet` is found within `hello`'s prototypal chain within the `Greeting` constructor. Since no argument has been passed to the method, the value of `message` is `undefined`, which is logged to the console.

4. `Goodbye!` is printed.

5. A `TypeError` is raised, since `hi` is a property of `Hello`'s prototype object, not `Hello` itself.

---

## [4.6 Practice Problems: Subtyping with Classes](https://launchschool.com/lessons/d5964d17/assignments/16921628)

1. If we add a `play` method to the `Bingo` class, what would happen if we invoke the `play` method of an instance of `Bingo` would be that the `play` method of `Bingo` would be invoked, not that of `Game`. That's because of how prototypal delegation in JavaScript works. Namely, when an instance's class has a method (more precisely, when the object in the class's `prototype` property has the method), that method will be executed and JavaScript won't look for the method higher up in the prototypal chain.

2. 

---

## [4.8 Code Reuse with Mixins](https://launchschool.com/lessons/d5964d17/assignments/e7850b07)

1. 

2. When the `goFast` method is invoked by an object, the string printed will contain the evaluated expression of `this.constructor.name`. With that notation, the `constructor` property is accessed on the calling object, which for an instance of constructors/classes is an instance property that contains a reference to the instance's constructor. Then, the notation accesses the `name` property of the constructor function (or class). The `name` property is added to the constructor/class when it is defined, and its value is a string of the identifier name given to the constructor/class.

---
