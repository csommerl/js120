# [What is This?](https://launchschool.com/exercises/a94dfdc1)

`NaN` is output by line 7. This is because of line 4. The execution context of the `let` statement is the global object, since that statement is within the global scope. So, instances of `this` that are within the object literal but not within any of its methods will reference the global object. Since the global object lacks the properties `firstName` and `lastName`, the value of the `fullName` property on line 4 resolves to the expression `undefined + undefined`, which in turn resolves to `NaN`.

Alternatively put: the `this` keyword is always bound to the global object when it is not contained within the body of a function or method.
