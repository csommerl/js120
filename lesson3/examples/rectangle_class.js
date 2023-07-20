class Rectangle {
  static getDescription() {
    return 'A rectangle is a shape with 4 sides.';
  }

  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(10, 5);

console.log(typeof Rectangle);

console.log(rect instanceof Rectangle);
console.log(rect.constructor === Rectangle);
console.log(rect.constructor);
console.log(Object.getPrototypeOf(rect) === Rectangle.prototype);

console.log(rect.getArea());

console.log(Rectangle.getDescription());
