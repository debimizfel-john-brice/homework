class GrandPiano extends Piano {

    public length: number;

    public constructor({ model, manufacturer, color, number_of_keys, length, instrument }:
        { model: string, manufacturer: string, color: string, number_of_keys: number, length: number, instrument: string }) {
        super({ model, manufacturer, color, number_of_keys, instrument });
        this.length = length;
    }

    make_sound(): void {
        console.log("Playing grand piano sound...");
    }
}