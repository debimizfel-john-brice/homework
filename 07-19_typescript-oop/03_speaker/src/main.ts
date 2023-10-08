const speakers = [

    new Speaker({
        color: "red",
        volume: 50,
    }),

    new Speaker({
        color: "black",
        volume: 75,
    }),

    new Speaker({
        color: "white",
        volume: 25,
    }),

    new Speaker({
        color: "blue",
        volume: 90,
    }),

    new Speaker({
        color: "silver",
        volume: 100,
    }),

    new Speaker({
        color: "gold",
        volume: 0,
    }),

    new Speaker({
        color: "pink",
        volume: 20,
    }),
];

for (const speaker of speakers) {
    speaker.on();
    speaker.playing_sound("Bohemian Rhapsody")
    speaker.off();
}