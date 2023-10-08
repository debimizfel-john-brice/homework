class Perfume {
    public name: string;
    public company: string;
    public amount: number;
    public suitable_for: string;
    public price: number;

    public constructor({ name, company, amount, suitable_for, price }:
        { name: string, company: string, amount: number, suitable_for: string, price: number }) {
        this.amount = amount;
        this.company = company;
        this.name = name;
        this.price = price;
        this.suitable_for = suitable_for;
    }

    public display() {

        document.getElementById("perfumes")!.innerHTML += this.to_html();
    }

    public to_html(): string {
        return `
        <article>
            <header>
                ${this.name}<br>
            </header>
            Company: ${this.company}<br>
            Amount: ${this.amount}ml<br>
            Suitable for: ${this.name}<br>
            Price: ${this.price}$
        </article>
        `;
    }

}