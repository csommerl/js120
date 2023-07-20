// https://launchschool.com/exercises/94c9e258

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info()); // My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotch.info()); // My cat Butterscotch is 10 years old and has tan and white fur.
