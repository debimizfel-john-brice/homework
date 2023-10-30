
const operations = require("deborah-arrays-operations");

operations.show_arr([4, 5, 6, 2, 4, 8, 1, 9, 5]);

let test = operations.sum([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Sum: " + test);

test = operations.avg([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Avg: " + test);

test = operations.max([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Max: " + test);

test = operations.min([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Min: " + test);