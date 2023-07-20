class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.constructor.count += 1;
  }

  static {
    console.log('The constructor has been initialized.');
    this.count = 0;
    this.getDescription = function() {
      return 'A rectangle is a shape with 4 sides.';
    };

  }

  // static getDescription() {
  //   return 'A rectangle is a shape with 4 sides.';
  // }

  getArea() {
    return this.length * this.width;
  }

  full = function() {
    console.log('full');
  }

  concise() {
    console.log('concise');
  }
}

let rect = new Rectangle(10, 5);

console.log(typeof Rectangle);

console.log(rect instanceof Rectangle);
console.log(rect.constructor === Rectangle);
console.log(rect.constructor);
console.log(Object.getPrototypeOf(rect) === Rectangle.prototype);

console.log(rect.getArea());

console.log('here');
console.log(Rectangle.getDescription());

console.log(Rectangle.count);

let rect2 = new Rectangle(3, 5);
console.log(Rectangle.count);

console.log(Rectangle.prototype.hasOwnProperty('full')); // false
console.log(Rectangle.prototype.hasOwnProperty('concise')); // true
console.log(rect.hasOwnProperty('full')); // true
console.log(rect.hasOwnProperty('concise')); // false
