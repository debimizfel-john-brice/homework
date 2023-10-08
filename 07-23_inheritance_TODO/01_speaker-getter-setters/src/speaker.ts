class Speaker {
    private _color!: string;
    private _volume!: number;

    public constructor({ color, volume }: { color: string, volume: number }) {
        this.color = color;
        this.volume = volume;
    }

    public get color(): string {
        return this._color;
    }

    public set color(set_color: string) {
     // if (!["gray","white","black"].includes(set_color)) {
        if (set_color !== "gray" && set_color !== "white" && set_color !== "black") {
            throw new Error("The color is not proper");
        }
        this._color = set_color;
    }

    public get volume(): number {
        return this._volume;
    }

    public set volume(set_volume: number) {
        if (set_volume < 0 || set_volume > 10) {
            throw new Error("The volum is not proper");
        }
        this._volume = set_volume;
    }

    public on() {
        this.display("On")
    }

    public playing_sound(song: string) {
        this.display(`Playing ${song}`)
    }

    public off() {
        this.display("Off");
    }

    private display(state: string) {
        document.getElementById("table_content")!.innerHTML += this.table_html(state);
    }

    private table_html(state: string): string {
        return `
        <tr>
            <td>${this._color}</td>
            <td>${this._volume}</td>
            <td>${state}</td>
        </tr>
        `;
    }
}