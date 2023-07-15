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

// maxi.bark(); // 'Woof!'

console.log(maxi instanceof Dog); // true
console.log(maxi.constructor === Dog); // true
console.log(Dog.prototype.isPrototypeOf(maxi)); // true

console.log(Dog.prototype instanceof Dog); // false
console.log(Dog.prototype.constructor === Dog); // true

let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF!');
};

dexter.bark();
