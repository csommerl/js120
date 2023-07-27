// https://launchschool.com/lessons/d5964d17/assignments/16921628

class Greeting {
  greet(msg) {
    console.log(msg);
  }
}

class Hello extends Greeting {
  hi() {
    super.greet('Hello');
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    super.greet('Goodbye');
    this.greet('Goodbye');
  }
}

let h = new Hello();
h.hi();

let b = new Goodbye();
b.bye();
