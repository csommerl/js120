function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription: function() {
      return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },

    readBook: function() {
      this.read = true;
    },
  };
}


let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse', true);

// console.log(book1.getDescription());
// console.log(book2.getDescription());
// console.log(book3.getDescription());

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);

console.log(book1.getDescription());
book1.readBook();
console.log(book1.getDescription());
