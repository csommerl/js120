/*
 * https://launchschool.com/exercises/f387cdf5
 *
 * input: two objects
 * output: boolean representing if the two objects have the same key-value pairs
 *
 * rules:
 * - the two have the same keys
 *   - same number of keys
 *   - every key in one is a key in the other
 * - for every value of a key in one, the other has the same value for that key
 * - empty objects are equal (met by rules above?)
 *
 * Questions:
 *  - what about values that are objects?
 *  - what about prototypes?
 *
 * Overall Algorithm:
 * 1. Return sameKeys and sameValues
 *
 * sameKeys
 * 1. If lengths not the same, return false.
 * 2. Iterate over the keys in the obj1, and if key not in obj2, return false.
 * 3. Return true
 */

function objectsEqual(obj1, obj2) {
  // TODO: check here whether the two objects are the same.

  // TODO: Check all properties, not just enumerable
  let [obj1Keys, obj2Keys] = [Object.keys(obj1), Object.keys(obj2)];

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key of obj1Keys) {
    if (!obj2Keys.includes(key)) return false;

    let [obj1Val, obj2Val] = [obj1[key], obj2[key]];
    if (obj1Val !== obj2Val) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

console.log(objectsEqual({a: 'foo'}, {a: 'bar'}));                      // false
