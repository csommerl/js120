function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry', true);
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse');

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

book2.readBook();
console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());