// https://launchschool.com/exercises/25bb8847

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car {
  getWheels() {
    return 4;
  }
}

class Motorcycle {
  getWheels() {
    return 2;
  }
}

class Truck {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}
