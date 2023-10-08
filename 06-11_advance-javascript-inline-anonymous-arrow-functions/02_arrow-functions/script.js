//* ---------- 1

function b(callback) {
    callback();
}

b(() => console.log("Deborah M"));

//* ---------- 2

function cool(callback) {
    callback();
}

cool(() => console.log(Math.floor(Math.random() * 100) + 1))

//* ---------- 3

function nice(callback) {
    callback(42);
}

nice((num) => console.log(num));

//* ---------- 4

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    console.log("Num: " + num);
}

amazing((n1, n2, n3, n4, n5) => {
    const arr = [n1, n2, n3, n4, n5];
    return arr[Math.floor(Math.random() * 5)];
});

//* ---------- 5

function cool2(paintCallback) {
    paintCallback();
}

cool2(() => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

//* ---------- 6

function nice2(paintCallback) {
    paintCallback("Green");
}

nice2((color) => {
    document.body.style.backgroundColor = color;
});

//* ---------- 7

function amazing2(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    document.write("Painted Color: " + paintedColor);
}

amazing2((color1, color2, color3) => {
    const arr = [color1, color2, color3];
    const random_color = arr[Math.floor(Math.random() * 3)];
    document.body.style.backgroundColor = random_color;
    return random_color;
});

//* ---------- 8

setInterval(() => {
    const num = Math.floor(Math.random() * 100) + 1;
    document.getElementById("p").innerHTML = num;
}, 1000);

//* ---------- 9

setInterval(() => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 1000);

//* ---------- 10

setInterval(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById("p2").innerHTML = arr;

}, 1000);


//^ setInterval(() => document.getElementById("p2").innerHTML = Array(100).fill(0).map(_ => Math.floor(Math.random() * 100) + 1), 1000);

