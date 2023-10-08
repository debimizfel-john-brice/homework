function show_arr(arr) {
    arr.forEach((element, index) => { console.log(`${index}: ${element}`); });
}

function sum(arr) {
    return arr.reduce((a, b) => a + b);
}

function avg(arr) {
    const sum = arr.reduce((a, b) => a + b);
    return (sum / arr.length).toFixed(1);
}

function max(arr) {
    return Math.max(...arr);
}

function min(arr) {
    return Math.min(...arr);
}

module.exports = {
    show_arr,
    sum,
    avg,
    max,
    min
}