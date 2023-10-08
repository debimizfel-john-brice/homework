class Flashlight {
    private color: string;
    private flashlight_length: number;
    private light_intensity: string;
    private batteries: number;

    public constructor({ color, flashlight_length, light_intensity, batteries }:
        { color: string, flashlight_length: number, light_intensity: string, batteries: number }) {

        this.color = color;
        this.flashlight_length = flashlight_length;
        this.light_intensity = light_intensity;
        this.batteries = batteries;
    }

    public state() {
        this.display(`On`, `Changing ${this.batteries} batteries`, `Off`);
    }

    public display(on: string, battery_change: string, off: string) {
        document.getElementById("table_content")!.innerHTML += this.table_html(on, battery_change, off);
    }


    public table_html(on: string, battery_change: string, off: string) {
        return `
        <tr>
            <td>${this.color}</td>
            <td>${this.flashlight_length} cm</td>
            <td>${this.light_intensity}</td>
            <td>${this.batteries}</td>
            <td>${on}</td>
            <td>${battery_change}</td>
            <td>${off}</td>
        </tr>
        `;
    }



}