/*
input: obj, propName, new value
output: reset 

1. If prop not in prototype chain of obj, return undefined.
2. While obj:
  - If obj has prop as its own property,
    reset with new value
    break
  - Else, obj = prototype of obj.
*/

function assignProperty(obj, prop, newVal) {
  // if (!(prop in obj)) return undefined;

  while (obj) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = newVal;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
