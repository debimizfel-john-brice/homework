class Drum extends Instrument {
    public diameter: number;

    public constructor({ model, manufacturer, color, diameter, instrument }:
        { model: string, manufacturer: string, color: string, diameter: number, instrument: string }) {
        super({ model, manufacturer, color, instrument });
        this.diameter = diameter;
    }

    make_sound(): void {
        console.log("Playing drumb sound...");
    }
}