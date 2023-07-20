// eslint-disable-next-line max-lines-per-function
function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice: function(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log('Invalid Price');
      }
    },

    describe: function() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    }
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

scissors.describe();
drill.describe();
scissors.setPrice(11);
scissors.describe();
