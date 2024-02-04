import express, { Request, Response, NextFunction } from "express"
import dataService from "../5-services/data-service";
import BookModel from "../2-models/book-model";

const router = express.Router();


// GET http://localhost:4000/api/authors
router.get("/api/authors", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const data = await dataService.getAllAuthors();
        response.json(data)
    } catch (error) {
        next(error)
    }
});



// GET http://localhost:4000/api/book-search/:serach
router.get("/api/books-search/:serach", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const serach = request.params.serach;
        const books = await dataService.getBookBySearch(serach);
        response.json(books)
    } catch (error) {
        next(error)
    }
});


// POST http://localhost:4000/api/books
router.post("/api/books", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const book = new BookModel(request.body)
        const addedBook = await dataService.addBook(book);
        response.status(201).json(addedBook)
    } catch (error) {
        next(error)
    }
});

// DELETE http://localhost:4000/api/books/:id
router.delete("/api/books/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const id = +request.params.id;
        await dataService.deleteBook(id);
        response.sendStatus(204)
    } catch (error) {
        next(error)
    }
});


export default router;