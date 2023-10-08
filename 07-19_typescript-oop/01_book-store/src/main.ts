const book1 = new Book({
    name: "The Great Gatsby",
    author: "Abc",
    publisher: "Def",
    price: 20,
});

book1.display();
let new_price: number = book1.no_iva(book1.price);
document.write(`New price: ${new_price}<hr>`);

const book2 = new Book({
    name: "Harry potter",
    author: "jeo",
    publisher: "xak",
    price: 230,
});

book2.display();
new_price = book2.no_iva(book2.price);
document.write(`New price: ${new_price}<hr>`);

const book3 = new Book({
    name: "Maze runner",
    author: "iejwbckw",
    publisher: "kndwc",
    price: 390,
});

book3.display();
new_price = book3.no_iva(book3.price);
document.write(`New price: ${new_price}<hr>`);