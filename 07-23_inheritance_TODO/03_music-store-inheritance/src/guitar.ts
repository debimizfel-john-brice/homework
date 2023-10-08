class Guitar extends Instrument {
    public number_of_strings: number;

    public constructor({ model, manufacturer, color, number_of_strings, instrument }:
        { model: string, manufacturer: string, color: string, number_of_strings: number, instrument:string }) {
        super({ model, manufacturer, color, instrument });
        this.number_of_strings = number_of_strings;
    }

    make_sound(): void {
        console.log("Playing guitar sound...");
    }
}