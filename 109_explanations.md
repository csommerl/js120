# JS101/9 explanations

[TOC]

---

## Data types

### Primitive values

A **primitive value** is a piece of data that is atomic.

There are five primitive values: strings, numbers, booleans, `undefined`, and `null`.

#### Immutability

Primitive values are **immutable** and can't be changed. This means that operation performed on a primitive value will produce a new primitive value.

---

### Objects

An **object** is a complex value composed of other values (whether primitive values or other objects). Alternatively put, objects are every data type that is not a primitive value.

Objects are collections of **properties** or key-value pairs, where the key is a label for an associated value. ("Property" can sometimes refer to just the key name).

#### Mutability

Objects are **mutable**, i.e., their component values can be changed. For example, an array's elements, as well as an object's key-value pairs can be added, removed, or changed.

#### Shallow vs. deep copy

A **shallow copy** of an object is one that duplicates only the outermost values in an object (or array). This means that any values that are themselves objects (or arrays) will be the same objects (arrays) in the original object and the shallow copy.

A **deep copy** of an object is one that duplicates every item in an object (or array). This means that completely new instances are created of all of the source object's values that are themselves objects (or arrays).

##### Shallow copy and mutability

When a shallow copy is created of an object that contains nested objects, changes to the nested object in the latter will be reflected in the corresponding nested object within the shallow copy.

##### Prototypes

An object has another object as a **prototype** when the former object (the child object) inherits properties of the latter object (the parent object).

This means that properties of the parent object can be accessed through the child object, even though the child does not contain the keys for those properties.

The static method `Object.create` returns a new object that has as its prototype the object passed as an argument to the method.

An object's **own properties** refer to those of its properties that it does not inherit from a prototype.

---

#### Arrays

**Arrays** are a special kind of object. They are ordered, indexed lists of (possibly heterogeneous) elements.

**Sparse arrays** are ones with **empty slots**, which means that those slots don't have memory allocated to them and hence also have no values in them. (Alternatively: their elements do not have contiguous indices)

---

## Naming conventions

### Legal naming conventions

**Legal naming conventions** for syntactically valid names in JavaScript dictate that a name must contain only letters, digits, `$` and `_`, and it must not begin with a number. Declarations of invalid names will raise a `SyntaxError`.

### Idiomatic naming conventions

An **idiomatic name** is one that follows standardized naming conventions, including prescriptions to:

- use **camelCase** for most variable and function names;
- use **PascalCase** for constructor function names;
- use **SCREAMING_SNAKE_CASE** for constants whose values are configured prior to execution of any code; and,
- begin names with letters rather than `_` or `$`.

Non-idiomatic names are to be used only within libraries in order to prevent conflicts with a user's idiomatic names.

---

## Variables: declaration, initialization, and assignment

A **variable** is a specific place in memory in which data is stored, namely either a (primitive) value or a pointer/reference to (memory address for) an object/array.

Variables include parameters and function names.

### Declaration

A **variable declaration** is a statement that creates a scoped variable. Namely, it sets aside space in memory labeled with the name specified by the variable declaration. Variables are declared using one of three keywords: `let`, `const`, and `var`.

### Undeclared variables

An **undeclared variable** is a variable that is created and assigned to a value without the use of a keyword.

### Initialization

An **initialization** is a command or operation that optionally accompanies variable declaration, and it specifies the initial value to which the variable is assigned.

### Lack of initialization

When a variable declaration is not accompanied by an initialization to assign a value to the variable, the variable gets automatically assigned to the value `undefined`.

### Assignment

When a variable is **assigned** to a value, this means that the value gets stored in the variable.

---

## Constants

### Constants as immutably bound

**Constants** are variables that have immutable binding to their values (or references). This means that it is not permitted to reassign a constant to a different value (or object reference).

A `TypeError` is raised when such a reassignment is attempted.

### Constants that point to objects

Constants, i.e., variables declared with the `const` keyword, are compatible with object mutability. Although constants for objects are immutably bound to point to a particular object, that object can nevertheless be mutated. This is because a constant is technically assigned to a reference/pointer to an object. A constant for an object is immutably bound to this reference, and so the constant cannot be cannot be reassigned either to a different reference or to a primitive value. Yet, the object to which the constant points can change,[^1] e.g., its keys and values can be changed.

[^1]: unless the object is frozen

---

## Variables: scope

**Variable scope** refers to where in a program a variable is available. It is determined by both the keyword used to declare the variable as well as where the variable declaration occurs.

At the most general level, there are two kinds of scope:

1. Variables that have **global scope** are accessible anywhere within a program.
2. Variables that have **local scope** are accessible only within a block or function. Thus, there are two kinds of local scope: block scope and function scope.

### Block scope

Variables declared with `let` and `const` have block[^2] scope. This means that such variables are only available within the innermost block (or function body) in which they are declared, as well as any of that block's nested blocks or functions. Alternatively put, they are not accessible outside of the block (or function body) in which they are declared.

Functions defined with expressions using `let` or `const` also have block scope.

[^2]: A `block` is a related set of statements and expressions between two curly braces, i.e., `{` and `}`. But not everything between `{}` is a block, e.g., function bodies and object literals are not blocks.

### Function scope

Variables declared with `var` have function scope. This means that variables declared with `var` are available anywhere within the innermost function body in which they are declared. That means that even if they are declared within a block within a function body, their scope is not limited to that block and they can be accessed outside of that block.

Functions defined with *expressions* using `var` also have function scope. Functions defined with function *declarations* have function scope.

### Scope of undeclared variables

Undeclared variables have global scope, no matter where they are created.

---

### Variable scoping rules

#### Outer scope available within inner scopes

Variables declared in an outer scope are accessible within nested inner scopes.

#### Inner scope variables are not available within outer scopes

Variables declared within an inner scope are not available in outer scopes.

#### Local scopes at the same level are independent

Local scopes at the same level are independent of one another. This means that variables declared in one are not available in the other.

#### Nested functions have their own scope

Nested functions have their own variable scope.

---

## Variables: shadowing

When a variable is declared within a nested inner scope and has the same name as a variable declared in the outer scope, the former variable "**shadows**" the latter. Thus, the two names represent two distinct variables. This has two implications:

1. Within the nested inner scope, JavaScript prevents access to the outer scope variable, and so the variable name always accesses the locally-scoped variable; and,
2. When the nested inner scope terminates, the local variable is discarded from memory, and so the variable name thereafter accesses the original outer-scope variable.

The only names that don't get involved in shadowing are property names for objects.

---

## Variables: hoisting

All ==declared== variables in JavaScript are **hoisted**, which means that they are virtually moved to the beginning of the scope in which they are declared.[^3] More technically, this means that memory is reserved for them during the execution of the code within the scope.

But how variables are hoisted (i.e., what values they have when hoisted) depends on the keyword used to declare them.

[^3]: Cf. [the MDN entry on hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### Hoisting of `var`-declared variables

When variables declared with `var` are hoisted, they are assigned to the value `undefined` within their scope prior to their declaration. This means that from the beginning of the scope in which they are declared up to the variable declaration, `var`-declared variables are assigned to `undefined`, even if the variable declaration initializes the variable to some other value.

Alternatively put, such variables have "declaration hoisting".

### Hoisting of `let`- and `const`-declared variables

When variables declared with `let` or `const` are hoisted, they are not assigned to any value, not even the value `undefined`. This means that from the beginning of the scope in which they are declared up to the variable declaration, there exists a "temporal dead zone". This means that although the variable exists in memory, any attempt to access the value of the variable within that zone will raise a `ReferenceError` with the message that the variable cannot be accessed before its initialization.

Alternatively put, they are "lexically hoisted", which means that the variable names are reserved throughout the entire scope. (For example, if such a variable shadows another variable in the outer scope, the variable name is reserved for the locally-scoped variable within the local scope even prior to the locally-scoped variable's declaration.

### Hoisting and undeclared variables

==Undeclared variables are not hoisted. This means that they do not exist prior to the code in which they are assigned a value. Thus, any attempt to access the value of an undeclared variable before its assignment will raise a `ReferenceError` with the message that the variable name is not defined.==

### Hoisting of functions

Functions defined with function declarations have "value hoisting". This means that they are hoisted to the top of their scope *with their values*, so that they can be invoked prior to their definition within their scope.

Functions defined with function expressions are hoisted according to the keyword used. Accordingy, functions defined with the `var` keyword are hoisted to the top of the scope and are assigned to the value `undefined` within their scope prior to the keyword declaration. Those defined with `let` and `const` are hoisted but not assigned to any value.

---

## Variables as pointers

### Variables for objects are pointers

Variables for objects (including arrays) are **pointers**. This means that a variable for an object does not contain the object itself but instead contains the value of the memory address in which the object is stored. Thus, the variable acts as a reference or pointer to the place in memory where the object is stored.

A consequence of this is that the same object can be referenced by multiple variables. So, mutating the object referenced by one of these variables also mutates the object referenced by the other variables (since they are the same object).

### Variables for primitive values are not pointers

A variable for a primitive value stores that primitive value directly within the variable's memory location.

This means that although the same primitive value can be stored in different variables, changes to the value of one variable will not affect the value of the other variables containing the original primitive value.

### Assignment of a variable to a pointer to an object

When a variable is assigned to the value of another variable that references an object, the memory address of that object gets copied and placed in the former variable. The result is that both variables reference or point to the same object.

Thus, when the object referenced by either variable is mutated, the object referenced by the other variable will also be mutated, since they are the same object.

### Assignment of a variable to a primitive value

When a variable is assigned to the value of another variable that contains a primitive value, a new instance of that primitive value gets placed in the former variable.

Thus, when any changes are made to the value of one of the variables, the other variable's value will remain unaffected.

### Nested collections and pointers

Similar to how a variable for an object does not contain that object but instead the memory address for that object, objects nested within another object are not actually contained in the latter object. Instead, the outer object contains references to the nested objects.

This means, for example, that variables can be assigned to reference those nested objects. Those nested objects can thus be mutated using those variables and such mutations will affect the nested objects within the outer object "containing" those nested objects.

---

## Statements vs. expressions

An **expression** is anything that evaluates to a value that can be captured and stored for later use (e.g., by assigning the expression to a variable). **Statements**, by contrast, primarily do something; although they can sometimes evaluate to values, such values cannot be captured. This means that most attempts of capturing those values will raise a `SyntaxError`.

Statements ==typically== consist of a keyword followed by an expression. But some keywords followed by expressions are not statements. For example, `typeof 'Bella'` evaluates to the value 'string', which can be captured and assigned to a variable.

The term "statement" is often used in a *broad sense* to refer to any line or unit of code that commands a task.

---

## Type coercion

### Explicit

**Explicit type coercion** occurs when the programmer deliberately converts a value of one data type to a corresponding value of another data type, namely by using code whose primary purpose is to perform that conversion.

### Implicit

**Implicit type coercion** occurs when a value of one data type is implicitly (i.e., automatically and regardless of the programmer's knowledge) converted to another data type, so that some other operation can be performed.

---

## Equality

### Strict equality operator

The strict equality operator `===` returns `true` if and only if the operands *both* are of the same type *and* have the same value; otherwise, the operator returns `false`.

### Non-strict equality operator

The non-strict or loose equality operator `==` returns `true` if and only if the operands have the same value after those operands undergo any necessary implicit type coercion (which occurs according to a complex set of rules).

---

## Truthiness

**Truthiness** is the concept that all expressions in JavaScript are either truthy (evaluate as true) or falsy (evaluate as false) when evaluated in boolean contexts (e.g., when they are operands for logical operators or are supplied as conditions within conditional statements).

All values in JavaScript are truthy except for the following 8 values: `false`, `0`, `-0`, `0n`, `undefined`, `null`, `NaN`, and `''`.

---

## Functions

A **function** is a named and defined body of statements and expressions that can be invoked an unlimited number of times. The function body is usually (viz., always except in arrow functions) placed between curly braces (`{}`).

An **argument** is a value passed to a function.

A **parameter** is a placeholder for an argument, or more precisely is a local variable initialized to the argument and whose scope is restricted to the function body.

### Function definitions

**Function declarations** define functions by using the `function` keyword at the *start* of the function definition.

A **function expression** assigns a function to a variable and does not begin with the `function` keyword.

An **arrow function expression** is a function expression that uses more compact syntax and also permits implicit returns.

An **anonymous function** is one that lacks a name/identifier.

### Explain a function without implementation

1. input, i.e., arguments
2. output, i.e., side effects
3. return values

### JS functions are first-class

All functions in JavaScript are first-class. A **first-class function** is one that is an object. So, it is treated like any other variable in three respects:

1. variables can be assigned to a first-class function (and similarly they can be added as elements of data structures);
2. a first-class function can be passed as an argument to other functions; and,
3. a first-class function can be returned from function invocations.

A **callback function** is one that is passed as an argument to another function. This latter function, the **caller**, invokes the callback function to accomplish some operation.

A **higher order function** is one that takes other functions as arguments or that returns other functions.

**Function composition** occurs when a function invocation is passed as an argument to another function invocation. This means that the return value of the former function's invocation is passed as an argument to the latter function invocation.

### Hoisting of functions

Functions defined with function declarations are hoisted, which means that they are virtually moved to the top of the scope in which they are declared. Thus, such functions can be invoked prior to their definition within the scope in which they are declared.

In contrast, functions defined with function expressions (including arrow functions) are not hoisted. This means that any attempt to invoke them prior to their definition raises a `ReferenceError`.

---

## Return values

A **return value** is the evaluated value of an expression. Return values can usually (but not always) be captured in order to be stored and used.

### Implicit return values

A function invocation has an **implicit return value** when no explicit `return` statement is executed within the function body; in JavaScript, this implicit return value is always `undefined`.

### Arrow functions and implicit return values

In arrow functions, the `return` keyword can be omitted and yet there can be an implicit return value besides the usual `undefined`. The `return` keyword can be omitted in arrow functions if and only if the function body contains a single expression not surrounded by braces. In such cases, the return value is the evaluated value of that single expression.

---

## Output and side effects

A function has a **side effect** when it depends on or affects something beyond its parameters.

A function's **output** is whatever the function does beyond generating a return value, i.e., the output amounts to its side effects.

### Examples of side effects

1. a function **reassigns a non-local variable** to a different value: This is a side effect because that variable was not passed as an argument to the function.

2. a function **mutates an object referenced by a non-local variable**: This is a side-effect because that mutation persists outside the function and its return value.

3. a function **reads or write to a file**, including logging to the console: That's a side effect because the console exists beyond the parameters of the function.

4. a function **throws an error without handling it**

5. a function **invokes another function that has a side effect**

### Return values vs. side effects

A function's return value is what it implicitly or explicitly returns, in contrast to its output or side effects. A function's return value can always be revealed by passing a function invocation as an argument to an invocation of `console.log`.

Return values are distinct from side effects when they are produced as a result of only the parameters supplied to a function.

A function typically should have either a return value or a side effect, *but not both*.

### `console.log`

The `console.log` method has both a side effect (output) and a return value. Its **side effect** or **output** is to print in the console a textual representation of the values of the expressions passed to it as arguments. Its **return value** is the evaluated value of the whole `console.log` expression, which is always `undefined`. This return value can be captured and used by whatever initiated the execution of the `console.log` method.

---

## Pass-by-reference vs. pass-by-value

### Pass-by-value

#### Pass-by-value for arguments

When dealing with primitive values, JavaScript **passes by value**. In the context of when a variable is used to pass a primitive value as an argument to a function, this means that no operation within that function can change the value to which the original variable is assigned.

This is because the primitive value contained in the variable is passed to initialize the parameter, which contains its own instance of the primitive value.

Consequently, the original variable's value and the parameter's value are independent of one another such that changes to the value of one do not affect the other.

#### Pass-by-value for return values

When dealing with primitive values, JavaScript **passes by value**. In the context of when a variable is assigned to a primitive value returned by a function, this means that the variable's assignment to that primitive value is independent of the value of any variable passed as an argument to that function.

This is because each variable contains its own instance of the primitive value.

Consequently, changes to the value of either variable do not affect the value of the other variable.

### Pass-by-reference

#### Pass-by-reference for arguments

When dealing with objects (including arrays), JavaScript **passes by value of the reference**. In the context of when a variable is used to pass an object as an argument to a function, this means that operations within the function that mutate the argument will mutate the object referenced by the original variable.

This is because what is passed to initialize the parameter is a reference to the object (namely, a memory address). This means that the parameter and the variable used for passing an argument point to the very same object.

Consequently, changes to the object referenced by either are changes to the object referenced by the other, since they are the same object.

#### Pass-by-reference for return values

When dealing with objects (including arrays), JavaScript **passes by value of the reference**. In the context of when a variable is assigned to an object returned by a function, this means that operations that mutate that variable's object will mutate the object passed as an argument to the function, when they reference the same object.

This is because the return value to which the variable is assigned is a reference or memory address. This means that that variable can point to the same object referenced by one of the variables used to pass an argument to the function, namely when they contain the same memory address.

Consequently, when that occurs, changes to the object referenced by either variable are changes to the object referenced by the other variable, since they are the same object.

---

## Working with strings

### Iterating over strings

To iterate over a string using a `for` loop, each of the indices of the string must be used to access the characters of the string. Thus, a variable is needed for storing the index to be accessed, and this numerical value must be incremented with each iteration of the loop, up to (but not including) the point at which the counter's numerical value is equal to the length of the string.

### Template literals

**Template literals** use backticks (``) to surround a string value in which expressions can be embedded as placeholders (using a syntax of `${}`). When the template literal is evaluated to a value, the expressions contained within these placeholders are evaluated and then interpolated within the string.

---

## Methods

**Methods** in JavaScript are functions that are properties of objects. They are invoked by appending to a value or variable name a dot (`.`) and the method's function invocation.

A method **mutates the caller** when it permanently changes the object that invoked the method.

**Method chaining** refers to code in which the return value of a method invokes yet another method.

A **static method** is one that is called by a constructor.

An **instance method** is one that is called by ==an instance of a constructor class==.

---

## Array methods

### Iteration / `forEach`

The `forEach()` array method is an iteration method that takes a callback function as an argument and executes that callback function once for each array element (or fewer times if array elements are removed by the callback function). In each iteration, an array element is passed to the callback function as an argument. This method always returns `undefined`.

Longer: The `forEach()` array method is an iteration method that takes a callback function as an argument and executes that callback function once per each index until the end of the array is reached. In each iteration, an array element is passed to the callback function as an argument. This method always returns `undefined`.  (It typically iterates once for each element, but it can execute fewer times if elements are removed; and it it won't iterate over elements added beyond the last element of the original elements of the array.)

### Transformation / `map`

The `map` array method is a transformation method that creates and returns a new array whose elements are transformed values of the calling array's elements. These transformed values are determined by the callback function passed to `map` as an argument. Namely, on each iteration of the callback function, an element of the calling array is passed as an argument to the callback function, and the return value generated as a result is added to the new array returned by the `map` method.

### Selection / `filter`

The `filter` array method is a selection method that creates and returns a new array whose elements pass a specified test. This test is supplied by a callback function that is passed as an argument to the `filter` method. This callback function is invoked once per element of the calling array. An element of the calling array passes the callback function's test when the callback function returns a truthy value as a result of being passed that element as an argument.

### Search / `find`

The `find` array method returns the value of the first element in the calling array that passes a specified test. This test is provided by the callback function that is passed as an argument to the `find` method. Until the test is passed, each element of the calling array is passed as an argument to the callback function. An element passes the callback function's test when the callback function returns a truthy value as a result of being passed that element as an argument. If no iteration of the callback function returns a truthy value, `undefined` is returned.

### Sorting / `sort`

Short: The `sort` array method is a *destructive* method that sorts the elements of the caller array in place. It takes an optional callback function as an argument, and it returns the mutated, sorted array. The order of sorted elements is determined either by the return values of the callback function or by a default algorithm.

Long: The `sort` array method is a *destructive* method that takes a callback function as an argument and returns the mutated array with its elements sorted in place, as determined by the return values of each iteration of the callback function. A sorting algorithm can be supplied by passing a callback function as an argument to the `sort` method. This callback function must take two arguments, corresponding to two elements of the array. These two elements are sorted depending on the callback function's return value:

- the first element will be sorted before the second when the callback function returns `-1`,
- the second will be sorted before the first when the callback function returns `1`, and
- the order of the two elements will be preserved when the callback function returns `0`.

When the `sort` method is not passed a callback function as an argument, `sort`'s default algorithm is performed. Namely, all elements (except `undefined`) are coerced to strings and those strings' Unicode character codes are compared. Regardless of the sorting algorithm, `undefined` will always be placed at the end of the sorted/returned array.

---

## working with Objects

### `for ... in` loop

The `for ... in` loop iterates over all the keys (enumerable properties) of an object, as well as the keys of the object's prototype. In each iteration, it assigns the key to a variable, permitting you to access the object's values associated with that key.

### `Object.keys`

`Object.keys` is a static method that takes an object as an argument and returns a new array whose elements are the object's own keys (not those of a prototype).

### `Object.values`

`Object.values` is a static method that takes an object as an argument and returns a new array whose elements are the values of each of the object's own properties.

### `Object.entries`

`Object.values` is a static method that takes an object as an argument and returns a new array whose elements are nested arrays, each of which contains a pair of elements: one of the object's own keys and the value of that key.

### `Object.assign`

`Object.assign` is a static method that takes one or more objects as its arguments. The first argument is a target object that receives copies of each of the enumerable own properties of the other objects passed as arguments. The method mutates and returns the target object.
