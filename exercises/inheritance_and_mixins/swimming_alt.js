// https://launchschool.com/exercises/b745f609

function swim() {
  return `${this.name} is swimming.`;
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim = swim; // adds the `swim` method to every instance, not the class's prototype object
}

let fish1 = new Fish("Nemo");

console.log(fish1.swim());
console.log(fish1.swim === swim);
