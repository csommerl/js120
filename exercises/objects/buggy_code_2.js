// https://launchschool.com/exercises/9b032102

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

console.log(item.discount(20));   // returns 40 and should return 40
console.log(item.discount(50));   // returns 20 but should return 25
console.log(item.discount(25));   // returns 15 but should return 37.5
