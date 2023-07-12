/*
 * Functions lose their context when passed as arguments to other functions.
 * Thus, the function passed to the `map` method in line 6 no longer has
 * `franchise` as its execution context but instead the implicit execution
 * context for functions, the global object. Since the global object lacks
 * a `name` property, the value of `this.name` in line 7 is `undefined`.
 * Thus, the method `allMovies` returns the array:
 * [ 'undefined 1', 'undefined 2', 'undefined 3', ]
 *
 */

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());
