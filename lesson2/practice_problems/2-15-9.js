let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    };

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
