function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark: function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  },
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

console.log(
  maxi.hasOwnProperty('bark'),
  dexter.hasOwnProperty('bark'),
  biggie.hasOwnProperty('bark'),
  maxi.bark === dexter.bark,
  maxi.bark === biggie.bark,
  dexter.bark === biggie.bark,
  Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark,
);
