//* ---------- 1

function a() {
    console.log("Deborah M");
}

function b(callback) {
    callback();
}

b(a);

//* ---------- 2

function cool(callback) {
    callback();
}

function random() {
    console.log(Math.floor(Math.random() * 100) + 1);
}

cool(random);

//* ---------- 3

function nice(callback) {
    callback(42);
}

function number(num) {
    console.log(num);
}

nice(number);

//* ---------- 4

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    console.log("Num: " + num);
}

function numbers(n1, n2, n3, n4, n5) {
    const arr = [n1, n2, n3, n4, n5];
    return arr[Math.floor(Math.random() * 5)];
}

amazing(numbers);

//* ---------- 5

function cool2(paintCallback) {
    paintCallback();
}

function random_color() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// cool2(random_color);

//* ---------- 6

function nice2(paintCallback) {
    paintCallback("Green");
}

function backcolor(color) {
    document.body.style.backgroundColor = color;
}

// nice2(backcolor);

//* ---------- 7

function amazing2(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    document.write("Painted Color: " + paintedColor);
}

function paint(color1, color2, color3) {
    const arr = [color1, color2, color3];
    const random_color = arr[Math.floor(Math.random() * 3)];
    document.body.style.backgroundColor = random_color;
    return random_color;
}

// amazing2(paint);

//* ---------- 8

function random_number() {
    const num = Math.floor(Math.random() * 100) + 1;
    document.getElementById("p").innerHTML = num;
}

setInterval(() =>
    random_number()
    , 1000);

//* ---------- 9

function change_color(some_color) {
    document.body.style.backgroundColor = `"${some_color}"`;
}

setInterval(() =>
    change_color('#' + Math.floor(Math.random() * 16777215).toString(16))
    , 1000);

//* ---------- 10

function change_arr(arr) {
    document.getElementById("p2").innerHTML = arr;
}

setInterval(() => {
    const arr = random_arr();
    change_arr(arr)
}, 1000);

function random_arr() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}

