function random_arr() {
    const arr = [];

    for (let i = 0; i < 20; ++i) {
        const number = Math.floor(Math.random() * 100) + 1;
        arr.push(number);
    }

    //* A
    arr.forEach(n => document.write(n + "<br>"));
    document.write("<hr>");

    //* B
    const first_even = arr.find(n => n % 2 === 0);
    document.write(first_even + "<hr>");

    //* C
    const first_over_fifty = arr.find(n => n > 50);
    document.write(first_over_fifty + "<hr>");

    //* D
    arr.filter(n => n % 2 !== 0).forEach(n => document.write(n + ", "));
    document.write("<hr>");

    //* E
    arr.filter(n => n > 50).forEach(n => document.write(n + ", "));
    document.write("<hr>");

    //* F
    const index = arr.findIndex(n => n > 50);
    document.write(`index of the first number over 50: ${index} <hr>`);

    //* G
    arr.map(n => n % 2 === 0 ? 'even' : 'odd').forEach(n => document.write(n + ", "));
    document.write("<hr>");

    //* H
    const min_num = arr.reduce((min, value) => value < min ? min = value : min = min, 100);
    document.write(min_num + "<hr>");

    //* I
    const max_num = arr.reduce((max, value) => value > max ? max = value : max = max, 0);
    document.write(max_num + "<hr>");
}

random_arr();