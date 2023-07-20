function Ninja() {
  this.swung = true;
}

let ninja1 = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

let ninja2 = new Ninja();

console.log(ninja2.swingSword()); // true
console.log(ninja1.swingSword()); // TypeError: ninja1.swingSword is not a function
