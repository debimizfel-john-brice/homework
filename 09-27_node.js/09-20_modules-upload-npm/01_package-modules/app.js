const array_operations = require("./array_operations");

array_operations.show_arr([4, 5, 6, 2, 4, 8, 1, 9, 5]);

let test = array_operations.sum([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Sum: " + test);

test = array_operations.avg([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Avg: " + test);

test = array_operations.max([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Max: " + test);

test = array_operations.min([4, 5, 6, 2, 4, 8, 1, 9, 5]);
console.log("Min: " + test);
console.log("--------------");

// ^ ------------------------

const os = require("os");
console.log("Free Memory: " + os.freemem());
console.log("Username: " + os.userInfo().username);
console.log("Type: " + os.type());
console.log("Version: " + os.version());
console.log("Arch: " + os.arch());