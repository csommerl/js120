function createCat(name, color, personality, noise = 'meow') {
  return {
    name,
    color,
    personality,

    makeNoise(sound = noise) {
      console.log(sound);
    },
  };
}

let bella = createCat('Bella', 'grey', 'gentle', 'meooooow');
bella.makeNoise();
let sylvie = createCat('Sylvie', 'calico', 'feisty',);
sylvie.makeNoise('arstins');
