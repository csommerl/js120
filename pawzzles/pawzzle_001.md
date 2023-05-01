# [Pawzzle #001: JavaScript](https://mailchi.mp/7a486b57d789/pawzzle001-task-master-cheddar?e=ca39a131f4)

## Question

Q. Examine the following code:

```js
let cat = {
  name: 'Cheddar',
  coat: 'orange tabby'
};

let petNames = ['Cheeseball', 'Fuzzball', 'Boss'];

for (cat.name of petNames) {
  console.log(cat.name);
}

console.log(cat);
```

We expect this code to log the following:

```js
Cheeseball
Fuzzball
Boss
{ name: 'Cheddar', coat: 'orange tabby' }
```

Instead, it prints:

```js
Cheeseball
Fuzzball
Boss
{ name: 'Boss', coat: 'orange tabby' }
```

How do you explain this result?

## Answer

This unexpected output is due to line 8. The `for...of` loop iterates over each element of the array `petNames`. On each iteration, that element is assigned to `cat.name`. Usually in `for...of` loops, the keyword `let` is used to declare a new local variable and initialize it to the value of the current element. But here, `cat.name` accesses the `name` property of the object `cat`. Thus, on each iteration of the loop, that property is reassigned to the current element of `petNames`. Since the last element of `petNames` is `'Boss'`, that is the value of `cat.name` after the loop is complete. Accordingly, that is what is printed on line 4.