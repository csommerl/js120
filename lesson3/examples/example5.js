const Dog = {
  bark: function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  },
};

function createDog(name, breed, weight) {
  const newDog = Object.create(Dog);

  newDog.name = name;
  newDog.breed = breed;
  newDog.weight = weight;

  return newDog;
}

let maxi = createDog('Maxi', 'German Shepherd', 32);

maxi.bark();

console.log(Object.getPrototypeOf(maxi));
