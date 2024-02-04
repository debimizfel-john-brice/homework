import { HttpClient } from "@angular/common/http";
import { appConfig } from "../utils/config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthorModel } from "../models/author-model";
import { BookModel } from "../models/book-model";

@Injectable({
    providedIn: "root"
})
export class DataService{

    // DI:
    public constructor( private httpClient: HttpClient ){}

    // Get All Authors:
    public async getAllAuthors():Promise<AuthorModel[]>{
        const observable = this.httpClient.get<AuthorModel[]>(appConfig.authorsUrl);
        const authors = await firstValueFrom(observable);
        return authors;
    }
    
    // Get Book By Search:
    public async getBookBySearch(search:string):Promise<BookModel[]>{
        const observable = this.httpClient.get<BookModel[]>(appConfig.booksSearchUrl + search );
        const books = await firstValueFrom(observable);
        return books;
    }
    
    // Add Book:
    public async addBook(book:BookModel):Promise<void>{
        const observable = this.httpClient.post<BookModel>(appConfig.booksUrl, book );
        await firstValueFrom(observable);
    }
    
    // Delete Book:
    public async deleteBook(id:number):Promise<void>{
        const observable = this.httpClient.delete<number>(appConfig.booksUrl + id );
        await firstValueFrom(observable);
    }

}