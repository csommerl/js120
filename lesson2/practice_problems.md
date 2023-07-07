# [2.4 Practice Problems: Object Prototypes](https://launchschool.com/lessons/1eaf5e37/assignments/f7b8620b)

1. This code will print `2`. In line 3, the `foo` property of `baz` is added to the `foo` property of `qux`. Those are ultimately the same property, line 2 creates `baz` with `qux` as its prototype with no properties of its own. So when line 3 accesses the `foo` property of `baz`, it returns the value of the first property in its prototype chain named `foo`, which is `1`, the value of the `foo` property of the prototype `qux`.

2. This code will print `3`. Line 5 prints the sum of the values of the `foo` property of `baz` and the `foo` property of `qux`. The latter is `1`, as given in the initialization of `qux` in line 1. The former is `2`. Although `baz` has `qux` as its prototype, line 3 *has a property assignment that* gives `baz` its own `foo` property with the value of `2`. Thus, accessing the `foo` property of `baz` in line 5 will not search higher up within the prototype chain, since a proprety with that name is found within the calling object.

3. This code will print `4`. In line 5, what is logged to the console is the sum of the values of the `foo` property of `baz` and the `foo` property of `qux`. Since `baz` does not have `foo` as its own property, accessing that property will search within its prototype, `qux`. Thus, what is logged is the sum of adding the value of `foo` in `qux` to itself. That value is determined by the property assignment in line 3 of `qux.foo` to `2`. Accessing that property via `baz` will still return `2` even though `baz` had its prototype set to `qux` prior to line 3's reassignment of `foo`. This is because the internal property `[[Prototype]]` that keeps track of `baz`'s prototype contains a reference to `qux`, *which means that changes in its prototype are reflected within the inheriting object*.

4. See `2-4-4.js`.

5. These two loops will not log the same results to the console. This is due to the difference in which property keys are accessed by the `in` operator and the `Object.keys` function. The `for/in` loop will access every one of `foo`'s own properties, *as well as every property higher up in `foo`'s prototype chain*. In contrast, `Object.keys` returns an array containing only the name's of `foo`'s own properties and not the names of properties higher up in the prototype chain. Thus, the results will differ in a case such as the following:

```javascript
let bar = {qux: 1};
let foo = Object.create(bar);
foo['lys'] = 2;

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}
// logs
// lys: 2 
// qux: 1

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});
// logs
// lys: 2
```

6. To create an object that does not have a prototype, use `Object.create(null)`. To determine whether an object has a prototype, use `Object.getPrototypeOf()`. 

---

# [2.9 Practice Problems: Implicit and Explicit Function Execution Contexts](https://launchschool.com/lessons/1eaf5e37/assignments/a6c48cbb)

1. This code will output the global object, i.e., `global` in Node.js and `window` in the browser. This is because the implicit function execution context (in non-strict mode) is the global object. Thus, the value of `this` returned by `func` in line 2is `global`/`window`, which is then assigned to the global variable `context` in line 5 and logged to the console in line 7.

2. This code will output the object referenced by `obj`, `{ func: [Function: func] }`. This is ultimately because the implicit execution context for methods is the object that calls the method. Here, the method `func` is invoked on line 7 by the object referenced by the global variable `obj`, and the return value of that method invocation is assigned to the global variable `context`. The `func` method is anonymous function that returns the value assigned to `this`. Thus, since `obj` called the method, the value of `this` here is `obj`. Thus, line 9 prints `obj`.

3. This code will output two lines.

First, line 7's invocation of the function `deliverMessage` will output `'Hello from the global scope!'`. This is because that function's body consists of only line 4, which logs to the console the value of `this.message`. Due to implicit function execution context, the value of `this` on line 7 is the global object. Thus, line 7 prints the value of the global object's `message` property. That property's value is `'Hello from the global scope!'`. This is because line 1 creates the global undeclared variable `message`, which is assigned to the string `'Hello from the global scope!'`. Since `message` is an undeclared variable, it becomes a property of the global object. Thus, line 4/7 prints its value to the console.

Second, line 15 will output `'Hello from the function scope!'`. In that line, the object referenced by the global variable `foo` calls the method `deliverMessage`. That method was assigned to `foo` by line 13, which gave that method the value of the function `deliverMessage` defined on lines 3-7. Although the method `deliverMessage` is the same as the function `deliverMessage`, it outputs something different. This is because in JavaScript the implicit execution context for methods is the object that calls the method. Here, this means that the value of `this` within the method is the object referenced by `foo`. Thus, when that method logs the value of `this.message` to the console, the value printed is that of the `message` property of `foo`, which was assigned to `'Hello from the function scope!'` in line 10.

4. So far, we have learned about two built-in function methods that enable one to specify an explicit execution context for a function. These are `apply` and `call`. Each of these is called by a function and the first argument of each is the explicit execution context. `apply` takes one additional argument, an array whose elements are the arguments to be passed to the function. The additional arguments of `call` are the arguments to be passed to the function.

5. When `bar.add.call(foo)` is added to this code, the numerical value `3` is returned. This is because the `call` method sets the explicit execution context for the `add` method (and hence binds the value of `this` within that method invocation) to the object `foo`. Thus, when `add` is invoked in this manner, `this` within that function references the `foo` object. So, the addition `this.a + this.b` returned by line 10 has the value of `3`, since the `a` property of `foo` is `1` and the `b` property of `foo` is `2`.

---

## [2.11 Practice Problems: Hard Binding Functions with Contexts](https://launchschool.com/lessons/1eaf5e37/assignments/ed3a72f0)

1. The `bind` function method creates and returns a new function whose execution context is permanently set to its first argument.

2. This code will not log anything to the console. Line 9 creates and returns a new function, namely a copy of the `foo` function whose execution context is permanently set to `obj`. But since `bind` does not invoke either the original function or the new one, nothing is logged to the console.

If the new function were to be invoked, `'JavaScript'` would be printed. That's because within that new function, the value of `this` is permanently bound to `obj`; and so, logging to the console `this.message` prints the `message` property of `obj`, which is `'JavaScript'`.

3. This code will output two lines.

First, `NaN` will be printed by line 12. On that line, the return value of the invocation of `foo` is printed. That return value is the result of line 7, in which the `a` property of `this` is added to the `b` property of `this`. Since the implicit execution context for functions is the global object, the value of `this` on line 7 is the global object, which does not posess `a` or `b` as a property. Thus, line 7 will attempt to add `undefined` to itself, which results in `NaN`.

Second, line 13 logs to the console the return value of invoking the `bar` function, namely the numerical value `5`. `bar` is defined by a function expression on line 10 in which the `foo` function invokes the `bind` method with `obj` as an argument. The result is that the `bar` function is a copy of the `foo` function with its execution context permanently set to `obj`. Thus, invoking `bar` will execute line 7 but with `this` permanently set to reference `obj`. Thus, line 7 returns `5`, the sum of the `a` and `b` properties of `obj`.

4. Line 16 will print `'JavaScript makes sense!'`. Line 16 invokes the `logMessage` method of the `negativity` object. Line 15 set that method's value to the `bar` function. In turn, `bar` was created by the function expression on line 13, in which `bar` is assigned to a copy of the `foo` function whose execution context is permanently set to the `positivity` object. This means that the `logMessage` method invoked on line 16 is a function in which `this` is permanently bound to `positivity`. Thus, when that method prints the value `this.message`, what is printed is the `message` property of `positivity`.

5. ...

---
