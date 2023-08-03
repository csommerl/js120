const Swimmable = {
  swim() {}
};

const Flyable = {
  fly() {}
};

class Bird {}

class Stork extends Bird {}
Object.assign(Stork.prototype, Flyable);

class Parrot extends Bird {}
Object.assign(Parrot.prototype, Flyable);

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends Bird {}
Object.assign(Duck.prototype, Flyable, Swimmable);

class Goose extends Bird {}
Object.assign(Goose.prototype, Flyable, Swimmable);
