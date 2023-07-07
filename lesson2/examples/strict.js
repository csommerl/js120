"use strict"; // the quotes are required

console.log(this);

function foo() {
  console.log("this refers to: " + this);
}

foo(); // this refers to: undefined
