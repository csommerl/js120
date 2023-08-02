// https://launchschool.com/exercises/5f6126cd

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  },
};

class Truck {}
Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
console.log(truck.tow());
