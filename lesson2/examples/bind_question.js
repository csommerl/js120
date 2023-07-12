let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

let obj2 = {
  a: 'bye',
  b: 'everyone',
};

obj2['foo'] = obj.foo;

obj2.foo();
// => bye everyone
// => bye everyone
