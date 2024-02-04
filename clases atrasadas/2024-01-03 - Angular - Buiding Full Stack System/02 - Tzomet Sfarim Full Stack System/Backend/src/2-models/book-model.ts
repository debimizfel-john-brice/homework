class BookModel{

    public id:number;
    public author:number;
    public name:string;
    public pages: number;
    public price: number;
    public authorName:string;

    public constructor(book:BookModel){
        this.id = book.id;
        this.author = book.author;
        this.name = book.name;
        this.pages = book.pages;
        this.price = book.price;
        this.authorName = book.authorName;
    }

}
export default BookModel