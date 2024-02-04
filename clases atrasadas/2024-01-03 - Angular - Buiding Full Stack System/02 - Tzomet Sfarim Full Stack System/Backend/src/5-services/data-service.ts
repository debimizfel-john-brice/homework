import { ResourceNotFoundError } from "../2-models/client-errors";
import DataModel from "../2-models/book-model";
import dal from "../4-utils/dal";
import AuthorModel from "../2-models/author-model";
import BookModel from "../2-models/book-model";
import { OkPacket } from "mysql";


// Get all Authors:
async function getAllAuthors():Promise<AuthorModel[]>{
    const sql = "SELECT * FROM authors";
    const authors = await dal.execute(sql);
    return authors;
}

// Get Book By Search:
async function getBookBySearch(search:string):Promise<BookModel[]> {
    const sql = `SELECT b.*, CONCAT(a.firstName, " " ,a.lastName) AS authorName 
                    FROM books AS b
                    JOIN authors AS a
                    ON b.author = a.id
                    WHERE name LIKE ?`;
    const books = await dal.execute(sql, [`%${search}%`]);
    return books;
}


// Add Book:
async function addBook(book: BookModel):Promise<BookModel>{
    const sql = "INSERT INTO books VALUES(DEFAULT, ?,?,?,?)";
    const result:OkPacket = await dal.execute(sql,[book.author, book.name, book.pages, book.price]);
    book.id = result.insertId;
    return book;
}



// Delete Book:
async function deleteBook(id: number):Promise<void>{
    const sql = "DELETE FROM books WHERE id = ?";
    const result:OkPacket = await dal.execute(sql,[id]);
    if( result.affectedRows === 0) throw new ResourceNotFoundError(id);
}

export default {
    getAllAuthors,
    getBookBySearch,
    addBook,
    deleteBook

}