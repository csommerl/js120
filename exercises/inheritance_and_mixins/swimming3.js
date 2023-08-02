// https://launchschool.com/exercises/b745f609

function swim() {
  return `${this.name} is swimming.`;
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Fish.prototype, {swim});

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}
Object.assign(Maltese.prototype, {swim});

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

console.log(Fish.prototype.swim === swim);
console.log(Fish.prototype.swim === Maltese.prototype.swim);
