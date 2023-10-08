const instruments = [

    new Piano({
        instrument: "Piano",
        color: "black",
        manufacturer: "Yamaha",
        model: "U1",
        number_of_keys: 88
    }),

    new GrandPiano({
        instrument: "Grand Piano",
        color: "white",
        length: 6.5,
        manufacturer: "Steinway & Sons",
        model: "D-274",
        number_of_keys: 97
    }),

    new Guitar({
        instrument: "Guitar",
        color: "sunburst",
        manufacturer: "Fender",
        model: "Stratocaster",
        number_of_strings: 6
    }),

    new Drum({
        instrument: "Drum",
        color: "black",
        manufacturer: "Pearl",
        model: "Masterworks",
        diameter: 14
    }),
];

for (const instrument of instruments) {
    instrument.display();
    instrument.make_sound();
}