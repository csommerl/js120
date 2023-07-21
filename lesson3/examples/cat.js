function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'catStr';
  // return [];
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy.weight); // 15

console.log(Cat('fluffy', 'Persian', 15));
