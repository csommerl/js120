function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return [];
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy.weight); // 15
