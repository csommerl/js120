let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);
bar.call(otherObj); // call cannot change the permanently bound execution context

let baz = bar.bind(otherObj);
baz(); // bind cannot change the permanently bound execution context
