let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john
let foo = john.greetings; // Strips context
foo();                    // context is now the global object

// Solution 1
foo.call(john);

// Solution 2
let bar = john.greetings.bind(john);
bar();
