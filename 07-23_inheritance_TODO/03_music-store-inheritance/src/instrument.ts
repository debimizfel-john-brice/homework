abstract class Instrument {

    public model: string;
    public instrument: string;
    public manufacturer: string;
    public color: string;

    public constructor({ model, manufacturer, color, instrument }: { model: string, manufacturer: string, color: string, instrument: string }) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.instrument = instrument;
    }

    abstract make_sound(): void;

    public display() {
        document.getElementById("instruments")!.innerHTML += this.card_html();
    }

    public card_html(): string {
        return `
        <article>
            <header>${this.instrument}</header>
            Model: ${this.model}<br>
            Manufacturer: ${this.manufacturer}<br>
            Color: ${this.color}
        </article>
        `;
    }
}