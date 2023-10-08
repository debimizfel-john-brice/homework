class Piano extends Instrument {
    public number_of_keys: number;

    public constructor({ model, manufacturer, color, number_of_keys, instrument }:
        { model: string, manufacturer: string, color: string, number_of_keys: number, instrument: string }) {
        super({ model, manufacturer, color, instrument });
        this.number_of_keys = number_of_keys;
    }

    make_sound(): void {
        console.log("Playing piano sound...");
    }
}