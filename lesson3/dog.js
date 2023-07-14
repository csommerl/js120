function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

console.log(
  maxi.hasOwnProperty('bark'),   // true
  dexter.hasOwnProperty('bark'), // true
  biggie.hasOwnProperty('bark'), // true
  maxi.bark === dexter.bark,     // false
  maxi.bark === biggie.bark,     // false
  dexter.bark === biggie.bark,   // false
);
