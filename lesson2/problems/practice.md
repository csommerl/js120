# 2.5

1. This code will print `2`. In line 3, the `foo` property of `baz` is added to the `foo` property of `qux`. Those are ultimately the same property, line 2 creates `baz` with `qux` as its prototype with no properties of its own. So when line 3 accesses the `foo` property of `baz`, it returns the value of the first property in its prototype chain named `foo`, which is `1`, the value of the `foo` property of the prototype `qux`.

2. This code will print `3`. Line 5 prints the sum of the values of the `foo` property of `baz` and the `foo` property of `qux`. The latter is `1`, as given in the initialization of `qux` in line 1. The former is `2`. Although `baz` has `qux` as its prototype, line 3 *has a property assignment that* gives `baz` its own `foo` property with the value of `2`. Thus, accessing the `foo` property of `baz` in line 5 will not search higher up within the prototype chain, since a proprety with that name is found within the calling object.

3. 
