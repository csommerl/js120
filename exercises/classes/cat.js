// https://launchschool.com/exercises/2f68f88c

class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sophie');

Cat.genericGreeting();
kitty.personalGreeting();
