
class Book {
    public name: string;
    public author: string;
    public price: number;
    public publisher: string;

    public constructor({ name, author, price, publisher }: { name: string; author: string, price: number; publisher: string }) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.publisher = publisher;
    }

    public display() {
        document.write(`
        Title: ${this.name}<br>
        Author: ${this.author}<br>
        Price: $${this.price}.00 <br>
        Publisher: ${this.publisher}<br>
        `);
    }

    public no_iva(price: number): number {
        const new_price = (price * 17) / 100;
        return new_price;
    }
}