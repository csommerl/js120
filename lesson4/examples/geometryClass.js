class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
    console.log(super.constructor);
  }

  toString() {
    return `[Square ${this.length} x ${this.width}]`;
  }

  describe() {
    console.log(`The square has sides with a length of ${this.length} and an area of ${super['getArea']()}.`);
  }
}

let rect = new Rectangle(5, 3);
let sq = new Square(8);

sq.describe();
