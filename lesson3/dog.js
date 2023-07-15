function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

console.log(Dog.prototype); // {}
console.log(Dog.prototype.constructor === Dog); // true

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

console.log(Dog.prototype); // { bark: [Function (anonymous)] }

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

console.log(Dog.prototype.constructor === Dog); // true
