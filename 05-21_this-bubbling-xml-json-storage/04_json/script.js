//* 1
const books_list = [
    {
        id: 1,
        title: "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "price": "49.99"
    },
    {
        id: 2,
        title: "The Dark Tower",
        author: "H. G. Wells",
        price: "29.99"
    },
    {
        id: 3,
        title: "The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        price: "39.99"
    },
    {
        id: 4,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        price: "35.99"
    }
];

function display_books(books_list) {
    document.write(`<h1>Books</h1>`);
    const books_JSON = JSON.stringify(books_list);
    const items = JSON.parse(books_JSON);
    for (const obj of items) {
        document.write(`Book ID: ${obj.id}<br>`);
        document.write(`Book Name: ${obj.title}<br>`);
        document.write(`Book Author: ${obj.author}<br>`);
        document.write(`Book Price: ${obj.price}<br>`);
        document.write("----------------------<br>");
    }
}

display_books(books_list);


//* 2
const my_cat = [
    {
        "name": "Pussy",
        "age": 2,
        "color": "Black",
        "sterile": true
    }
]

function display_cat(my_cat) {
    document.write(`<h1>Cats</h1>`);
    const cat_JSON = JSON.stringify(my_cat);
    const your_cat = JSON.parse(cat_JSON);
    for (const obj of your_cat) {
        document.write(`Name: ${obj.name}`);
        document.write(`Age: ${obj.age}`);
        document.write(`Color: ${obj.color}`);
        document.write(`Is sterile: ${obj.sterile}`);
    }
}

display_cat(my_cat);