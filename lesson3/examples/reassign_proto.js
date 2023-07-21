function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Cat.prototype.meow = function() {
  console.log('meow!');
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy instanceof Cat); // true

Cat.prototype = {};
console.log(fluffy instanceof Cat); // true
