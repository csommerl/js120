My PEMDIAC
=====

[TOC]

---

# [Overview of PEMDIAC](https://launchschool.com/lessons/60e10aa5/assignments/73c01de6)

1. **Understand the Problem** (IODRFTQ)
   - inputs, outputs, definitions, rules, facts, tasks, and questions
2. **Examples/Test Cases** (EPC)
   - edge cases, patterns, confirmation
3. **Mental Model** (CFORSTV)
   - Count: `filter`, `match`, `reduce`
   - Find: `indexOf`/`lastIndexOf`, `findIndex`/`findLastIndex`, `find`/`findLast`, `search` (in special cases, `reduce`)
   - Order: `sort`, `reverse`
   - Reduce (calculate, construct, convert, count, find): `reduce`
   - Select: `filter`, `match`
   - Transform: `map`, `replace`
   - Verify: `includes`, `every`, `some`, `startsWith`/`endsWith`
4. **Data Structure** (ECMRC)
   - existing structures, conversions, methods, regex, constants
5. **Issues**
6. **Algorithm** (GHEGSR)
   - general steps of different models, helper functions, examples, guard clauses, simplification, review
7. **Code** (TR)
   - test, revision
   - `let sentences = text.match(/\w.*?[.!?]/g);`
   - `let words = text.match(/\w+/g)`

---

# Problem (IODRFTQ)

1. Identify expected **INPUTS**.
   - What kinds of inputs can be assumed?
   - specify facts about inputs with bullet points underneath
2. Identify expected **OUTPUTS / RETURN VALUES**.
   - specify facts about inputs with bullet points underneath
3. Formulate **DEFINITIONS** for key terms.
4. Articulate **RULES**.
   - explicit requirements
   - implicit requirements / assumptions
5. List all **FACTS** about inputs, outputs, and objectives.
   - helps with thinking of different / simpler solutions
6. Identify main **TASKS** (i.e., subproblems) that need to be performed.
7. Raise **QUESTIONS** about all the above.

## Rules & facts to look for

- When an argument is a reference to an object, should that object be **mutated** by operations in the function?
  - Especially consider when a transformed or sorted array is supposed to be returned.
- When dealing with strings, does **case-sensitivity** matter?
- Pay attention to indices, lengths, etc.

---

# Examples (EPC)

1. Identify **EDGE CASES**.
2. Look for **PATTERNS** that could be used for the algorithm.
   - walk through an example or two
3. **CONFIRM/REVISE** the understanding of the problem.

## Edge Cases

- Strings:
  - empty
  - special characters
  - uppercase / lowercase
- Numbers
  - `0`, `-0`, `0n`
  - `Infinity`
  - `NaN`
  - negative
  - floating point
- Arrays
  - `[]`
  - array elements of an unexpected type
  - array elements at the start or end
- Objects
  - `{}`
  - object values of an unexpected type
- Other
  - `null`
  - `undefined`

---

# Mental Model (CFORSTV)

## Count

- Arrays: `filter`, `reduce`
- Strings: `match`

## Find

- Arrays: `indexOf`/`lastIndexOf`, `findIndex`/`findLastIndex`, `find`/`findLast`, (in special cases `reduce`)
- Strings: `indexOf`/`lastIndexOf`, `search`

## Order

- Arrays: `reverse`, `sort`

## Reduce (calculate, construct, convert, count, find)

- Arrays: `reduce`, `reduceRight`
- Unique uses: calculate, construct, convert (CCC)
- Shared uses: count, find, select, transform
- Note: can pass a callback function

## Select

- Arrays: `filter`, `slice`
- Strings: `match`, `slice`, `substring`

## Transform

- Arrays: `map`, `fill`, `flat`, `join`
- Strings: `replace`, `split`, `toLowerCase`, `toUpperCase`

## Verify

- Arrays: `every`, `some`, `includes`, `isArray`
- Strings: `includes`, `startsWith`/`endsWith`

## Iteration Statements/Methods

- `for` loop (if indices are needed)
- `forEach` method (if indices are needed)
- `for ... of` loop (if indices are not needed / directly usable on strings instead of first using `split`)
- `for ... in` loop (if iterating over an object)
- `while` loop: if indefinite, consider how to make more definite

## Other

- Arrays
  - creative: `Array`, `Array.from`, `Array.of`
  - destructive: `pop`/`push`, `shift`/`unshift`, `splice`, `copyWithin`
  - non-destructive: `concat`
- Strings: `replaceAll`, `repeat`, `padEnd`/`padStart`, `trim`/`trimEnd`/`trimStart`, `fromCharCode`, `charCodeAt`
- Objects: `assign`, `create`, `fromEntries`, `values`, `keys`, `hasOwnProperty`

---

# Data Structures (ECMRC)

1. Identify **EXISTING DATA STRUCTURES**.
   - How will the data be represented in converting input to output?
2. Identify possible **CONVERSIONS** of data types.
   - Determine whether conversion is really necessary, e.g., from string to array.
3. Identify built-in **METHODS** based on mental models.
4. Consider whether **REGEX** is to be used.
5. Identify things that could be made **CONSTANTS**.

## Strings

- Is the operation or expected result case-sensitive?
- Can regex be used?

## Numbers

- If searching for a number, consider two options:
  1. construct it
  2. increment using start and end conditions (be careful to think about the proper conditions)

## Arrays

- Mutate or not?

## Objects

- Mutate or not?

---

# Issues

...

---

# Algorithm (GHEGSR)

What steps are needed to convert input to output?

1. Describe **GENERAL STEPS** of *different* mental models.
   - at a level higher than implementation
   - Compare different mental models.
   - Use identified data structures and clue words (e.g., every, some, includes) to identify methods.
2. Determine what **HELPER FUNCTIONS** to create.
3. Talk through an **EXAMPLE**.
4. Identify necessary **GUARD CLAUSES**.
5. Consider whether **SIMPLIFICATION** might help if stuck.
   - less efficient operation?
   - reverse operation?
   - brute force?
   - otherwise simplified?
6. **REVIEW** problem, mental models, examples.
   - problem step's rules, questions
   - mental model step's issues
   - the example step's edge cases

## Tips for crafting an algorithm

- Include **indices** of loops to make sure they are done correctly in the coding step.

## Questions to ask myself

- Is this **overly complicated** / do I really need to do this?
- Are there **other starting points**?
- If applicable, could an **indefinite loop be made more definite**, e.g., is there an end condition available or that could be constructed?
- When looping, could the loop **start or end with something else**?
- What **methods** might be useful?
- Do I have to **build something anew** or could I **take an existing thing and modify it**?
- Is there a **variation** on this that might work better?
- What are the options for **where to put / incorporate guard clauses** that deal with test cases, upfront or later?
- If a string processing problem is complicated, can regex be used?
- Do I use too many data structures?
- Are there any **potential issues** to be careful to deal with?

---

# Code (TR)

1. **TEST** the code throughout using `console.log`.
2. **REVISE** algorithm as needed.

---

# Various Algorithm/Code Tips

## Mental Models

### Count

- regex match won't work with special characters such as `(`

### Find
- When searching/finding something, try if possible to specify an end point.
- If something like `-1` is supposed to be returned by attempting to search/find something, consider 2 options:
  1. Guard clause right at the start.
  2. Return -1 at the end if nothing found. (sometimes better because attempting a solution like (1) might prompt a while loop that goes on indefinitely)
- `reduce` can be used for finding in special cases, e.g., finding the longest string in an array

### Order

- 

### Reduce
- can write a separate callback function
- You can compare two at a time, and use that in a reduce, cf. `02_02_common_chars_two_at_a_time.js`.
- Don't mix and match `reduce` and `for` loops
- When using reduce to compare two at a time, try to make the accumulator of the same data type as the elements
- You can use the `index` parameter to exclude some elements from the normal operations
  - Use guard clauses
  - e.g., when the first or last element is to be excluded
  - e.g., to calculate an average: for all elements, add to accumulator and for last element add to accumulator then set accumulator to accumulator / array length

- You can also pass an array of functions to perform function piping. Cf. https://northcoders.com/company/blog/reduce-five-unusual-uses
- 

### Select

- 

### Transform

- `leadingSubstrings` shows that we can understand `map` as transforming not the elements but the indices.

### Verify

- 

### Loops
- Be careful with `for` loops to specify start and end indices.
- Consider the options for different terminating conditions of loops.
  - When looping over an array, begin with `idx = 0`
  - When looping over a number, begin with `idx = 1` and go while `idx <= num`.
- Be careful with nested loops within array methods: especially be wary of when to return!
- For strings, often can use `for ... of`

## General

- Use guard clause with `continue`.
- You can use `...args` or the `arguments` object for guard clauses.
  - For example, `if (args.length === 0) return [];` to return an empty array when no arguments are given.
- `slice` can take a negative number as an argument, which then subtracts from length.
  - To get the last character of a string, use `str.slice(-1)` instead of `str[str.length - 1]`.

## Strings

- If checking every character in a string, can convert to array and use `every` method.
- Instead of `str.split('')`, you can use `[...str]`.
- When creating a new RegExp, call it `regex`.
- When creating a regular expression from a variable, use template literals with escape characters
  - let regex = new RegExp(`\\b${word}\\b`, 'gi');
- Get sentences
  - `let sentences = text.match(/\w.*?[.!?]/g);`
  - Use loop with  `let sentenceEndings = '.?!';`
- Get words
  - often use `split(' ')`
  - `let words = text.match(/\w+/g)`: can return `null` and can work unexpectedly if some words begin with special characters
    - e.g., `'my e-mail address is curtis.sommerlatte@gmail.com'.match(/\w+/g)` returns `['my', 'e', 'mail', 'address', 'is', 'curtis', 'sommerlatte', 'gmail','com']`
    - Can have a partial fix: `str.match(/[\w@.-]+/g)`, but this will also include `.` for ending sentences

## Numbers

- `toFixed` returns a string.
- Mathematical methods:
  - `Math.abs` and `Math.sign`
  - `Math.max` & `Math.min`
  - `Math.pow`
  - `Math.random`
  - `Math.round`, `Math.ceil`, and `Math.floor`
  - `Math.sqrt`
- Make sure to convert user input to numbers if necessary.
- When needing to loop over the digits of a number, consider both iterable options: converting to string or converting to array
- Disadvantage of converting numbers to arrays: If the digits are rearranged, and if some of the digits are 0s, then converting back to number can result in those zeroes being dropped off (because they are at the start).

## Booleans

- When having a tracker between two options, use a boolean value.

## Arrays

- `push` can take more than one argument.
- You don't always need to use `splice`; you can sometimes use simple reassignment!
- Don't forget to use `Array(arrayLength)`.
  - Example: `Array(count).fill(item)` creates an array containing item count number of times.
  - And that can be further leveraged: `list.concat(Array(count).fill(item))` adds `item` to `list` the number of times equal to `count`.

## Objects

- When working with objects, be careful to distinguish between `[]` and `.` notation.
- If creating an object of counts, can use `reduce`.
- If updating the value of a key that might not exist, you don't need two lines: `countObj[char] = countObj[char] ? ++countObj[char] : 1;`
  - Another option: `charMap[char] = (charMap[char] || 0) + 1;`
- When using objects, always be careful to consider what happens if the key doesn't exist and its reference returns `undefined`.

---

# [Debugging](https://launchschool.com/lessons/64655364/assignments/3b953f14)

1. Reproduce the Error
2. Determine the Boundaries of the Error
3. Trace the Code
   - Check spellings
   - Check return values and where things are returned!
   - Check arguments
4. Understand the Problem Well
5. Implement a Fix
  - Fix one problem at a time
  - Merely make a note of other problems
6. Test the Fix

---

# Refactoring

- Can anything be extracted to a helper function?
  - e.g., should anonymous functions passed to methods be extracted to helper functions?
- Can methods be chained?
- If brute force used, consider:
  - Bottlenecks
  - Unnecessary or repeat work
  - Duplicated work

---

# [Pseudocode](https://launchschool.com/lessons/64655364/assignments/fea216fc)

| Keyword    | Meaning                                        |
| ---------- | ---------------------------------------------- |
| START      | start of program                               |
| SET        | set a variable that we can use for later       |
| GET        | retrieve input from user                       |
| PRINT      | display output to user                         |
| READ       | retrieve a value from a variable               |
| IF/ELSE    | show conditional branches in logic             |
| WHILE      | show looping logic                             |
| SUBPROCESS | show that some other thing will perform a task |
| END        | end of the program                             |

---

# * Questions

How detailed should my algorithm be?
