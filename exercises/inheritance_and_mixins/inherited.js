// https://launchschool.com/exercises/4455e4ab

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}

class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
