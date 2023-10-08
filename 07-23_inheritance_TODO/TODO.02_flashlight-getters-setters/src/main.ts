const flashlights = [

    new Flashlight({
        color: "black",
        flashlight_length: 4,
        light_intensity: "high",
        batteries: 3
    }),

    new Flashlight({
        color: "yellow",
        flashlight_length: 6,
        light_intensity: "low",
        batteries: 2
    }),

    new Flashlight({
        color: "blue",
        flashlight_length: 5,
        light_intensity: "medium",
        batteries: 4
    }),

    new Flashlight({
        color: "red",
        flashlight_length: 3,
        light_intensity: "high",
        batteries: 1
    }),

    new Flashlight({
        color: "green",
        flashlight_length: 7,
        light_intensity: "high",
        batteries: 5
    }),

    new Flashlight({
        color: "purple",
        flashlight_length: 4,
        light_intensity: "low",
        batteries: 2
    }),
];



for (const flashlight of flashlights) {
    flashlight.state()
}