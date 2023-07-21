const carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
};

let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);

car1.start();
console.log(car1.started); // => true

car1.stop();
console.log(car1.started); // => false
