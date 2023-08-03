// https://launchschool.com/exercises/cfc6d4e2

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}
Object.assign(Truck.prototype, towMixin);

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

// console.log(Truck.prototype.getOwnPropertyNames());
console.log(Object.getOwnPropertyNames(Truck.prototype));
