// https://launchschool.com/exercises/2b521c67

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  info() {
    return `a ${this.species} named ${this.name}`;
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

  printPets() {
    for (let pet of this.pets) {
      console.log(pet.info());
    }
  }
}

class Shelter {
  constructor() {
    this.owners = [];
  }

  adopt(owner, pet) {
    owner.adoptPet(pet);
    if (!this.owners.includes(owner)) {
      this.owners.push(owner);
    }
  }

  printAdoptions() {
    for (let owner of this.owners) {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.printPets();
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
