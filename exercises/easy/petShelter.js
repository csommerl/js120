// https://launchschool.com/exercises/2b521c67

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  describe() {
    console.log(`a ${this.species} named ${this.name}`);
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  adoptPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  addToAdoptions(owner, pet) {
    this.adoptions[owner.name] = this.adoptions[owner.name] ?? [];
    this.adoptions[owner.name].push(pet);
  }

  adopt(owner, pet) {
    owner.adoptPet(pet);
    this.addToAdoptions(owner, pet);
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      for (let pet of this.adoptions[owner]) {
        pet.describe();
      }
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
