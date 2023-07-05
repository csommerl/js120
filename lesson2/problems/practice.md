# 2.5

1. This code will print `2`. In line 3, the `foo` property of `baz` is added to the `foo` property of `qux`. Those are ultimately the same property, line 2 creates `baz` with `qux` as its prototype with no properties of its own. So when line 3 accesses the `foo` property of `baz`, it returns the value of the first property in its prototype chain named `foo`, which is `1`, the value of the `foo` property of the prototype `qux`.

2. This code will print `3`. Line 5 prints the sum of the values of the `foo` property of `baz` and the `foo` property of `qux`. The latter is `1`, as given in the initialization of `qux` in line 1. The former is `2`. Although `baz` has `qux` as its prototype, line 3 *has a property assignment that* gives `baz` its own `foo` property with the value of `2`. Thus, accessing the `foo` property of `baz` in line 5 will not search higher up within the prototype chain, since a proprety with that name is found within the calling object.

3. This code will print `4`. In line 5, what is logged to the console is the sum of the values of the `foo` property of `baz` and the `foo` property of `qux`. Since `baz` does not have `foo` as its own property, accessing that property will search within its prototype, `qux`. Thus, what is logged is the sum of adding the value of `foo` in `qux` to itself. That value is determined by the property assignment in line 3 of `qux.foo` to `2`. Accessing that property via `baz` will still return `2` even though `baz` had its prototype set to `qux` prior to line 3's reassignment of `foo`. This is because the internal property `[[Prototype]]` that keeps track of `baz`'s prototype contains a reference to `qux`, *which means that changes in its prototype are reflected within the inheriting object*.

4. 4.js

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
