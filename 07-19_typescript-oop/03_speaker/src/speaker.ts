class Speaker {
    private color: string;
    private volume: number;

    public constructor({ color, volume }: { color: string, volume: number }) {
        this.color = color;
        this.volume = volume;
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
            <td>${this.color}</td>
            <td>${this.volume}</td>
            <td>${state}</td>
        </tr>
        `;
    }
}