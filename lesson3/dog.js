// Create constructor
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

console.log(Dog.prototype); // {}
console.log(Dog.prototype.constructor === Dog); // true

// Create instance method
Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

console.log(Dog.prototype); // { bark: [Function (anonymous)] }

// Create instance 1
let maxi = new Dog('Maxi', 'German Shepherd', 32);

// maxi.bark(); // 'Woof!'

console.log(maxi instanceof Dog); // true
console.log(maxi.constructor === Dog); // true
console.log(Dog.prototype.isPrototypeOf(maxi)); // true

console.log(Dog.prototype instanceof Dog); // false
console.log(Dog.prototype.constructor === Dog); // true

let dexter = new Dog('Dexter', 'Rottweiler', 50);

// Create instance 2
dexter.bark = function() {
  console.log('WOOF!');
};

dexter.bark();

// Create static method
Dog.describe = function(dog) {
  console.log(`${dog.name} is a ${dog.breed} and weighs ${dog.weight}.`);
};

Dog.describe(maxi);
