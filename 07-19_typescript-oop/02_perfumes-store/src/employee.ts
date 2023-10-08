class Employee {
    private name: string;
    private last_name: string;
    private address: string;
    private salary: number;

    public constructor({ name, last_name, address, salary }:
        { name: string, last_name: string, address: string, salary: number }) {
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.salary = salary;
    }

    public display() {
        document.getElementById("employees")!.innerHTML += this.to_html();
    }

    public tax(): number {
        return this.salary * 0.1;
    }

    public to_html(): string {
        return `
        <article>
            <header>
                ${this.name}${this.last_name}<br>
            </header>
            <main>
                Address: ${this.address}<br>
                Salary: ${this.salary} $
            </main>
            <footer>
                Tax: ${this.tax()}
            </footer>
        </article>
        `;
    }

}