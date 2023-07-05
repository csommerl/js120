let bar = {qux: 1};
let foo = Object.create(bar);
foo['lys'] = 2;

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});
