// https://launchschool.com/exercises/0927135d

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003); // Ready to Go!
console.log(truck.year); // 2003
