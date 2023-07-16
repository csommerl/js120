let ninjaProto = {
  swingSword: function() {
    return this.swung;
  },
};

let ninja = Object.create(ninjaProto);
ninja.swung = true;

console.log(ninja.swingSword());

ninjaProto = {};

console.log(ninja.swingSword());
