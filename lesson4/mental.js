function Animal() {
  this.type = "mammal";
}

Animal.prototype.breathe = function() {
  console.log("I'm breathing");
}

function Dog() {
  this.legs = 4;
}

function Terrier() {}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Terrier.prototype = Object.create(Dog.prototype);

let d = new Dog();
console.log(d.type, d.legs);

let t = new Terrier();
console.log(t.type, t.legs);
