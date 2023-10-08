const speakers = [

    new Speaker({
        color: "black",
        volume: 4,
    }),

    new Speaker({
        color: "white",
        volume: 4,
    }),
];

for (const speaker of speakers) {
    speaker.on();
    speaker.playing_sound("Bohemian Rhapsody")
    speaker.off();
}