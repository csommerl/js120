function repeatThreeTimes(func) {
  // when greetings is invoked here, this references global, which has no firstName or lastName properties
  // also can't use func.call(john); john is out of scope
  func(); 
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); // Strips context: what is passed to repeatThreeTimes is only the greetings method, not john
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
