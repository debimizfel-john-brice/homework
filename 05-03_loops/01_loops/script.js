
// //* 1
// for (var i = 1; i <= 1000; ++i) {
//     document.write(i);
// }

// //*2
// for (var i = 2; i <= 1000; i += 2) {
//     document.write(i);
// }

// //*3
// for (var i = 1001; i < 2000; i += 2) {
//     document.write(i);
// }

// //* 4
// for (var i = 1000; i >= 1; --i) {
//     document.write(i);
// }

// //* 5
// for (var i = 1000; i >= 1; i -= 2) {
//     document.write(i);
// }

// //* 6
// for (var i = 999; i >= 1; i -= 2) {
//     document.write(i);
// }

// //* 7
// var n = +prompt();
// for (var i = 3; i <= n; i += 3) {
//     document.write(i);
// }

// //* 8
// var n = +prompt();
// for (var i = 1; i <= n; ++i) {
//     document.write(i);
// }

// for (var i = n; i >= 1; --i) {
//     document.write(i);
// }

// //* 9
// var a = +prompt();
// var b = +prompt();
// for (var i = a; a <= b; ++a) {
//     document.write(a);
// }

// //* 10
// var a = +prompt();
// var b = +prompt();
// var temp;

// if (a > b) {
//     temp = a;
//     a = b;
//     b = temp;
// }

// for (var i = a; a <= b; ++a) {
//     document.write(a);
// }

// //* 11
// var a = +prompt();
// var b = +prompt();
// for (var i = b; b >= a; --b) {
//     document.write(b);
// }

// //* 12
// var a = +prompt();
// var b = +prompt();
// var temp;

// if (a > b) {
//     temp = b;
//     b = a;
//     a = temp;
// }

// for (var i = b; b >= a; --b) {
//     document.write(b);
// }

// //* 13
// var first = +prompt();
// var last = +prompt();
// var num = +prompt();


// for (var i = first; i <= last; ++i) {
//     if (i % num == 0) {
//         document.write(i);
//     }
// }

// //* 14
// var first = +prompt();
// var last = +prompt();
// var num = +prompt();
// var temp;

// if (first > last) {
//     temp = first;
//     first = last;
//     last = temp;
// }

// for (var i = first; i <= last; ++i) {
//     if (i % num == 0) {
//         document.write(i);
//     }
// }

// //* 15
// var num = 1;
// while (num !== 0) {
//     var num = +prompt();
//     if (num % 7 == 0) {
//         document.write("num is divisible by 7");
//     } else {
//         document.write("num is not divisible by 7")
//     }
// }

// //* 16
// var num = +prompt();
// while (num !== 0) {
//     if (num % 7 == 0) {
//         document.write("num is divisible by 7");
//     } else {
//         document.write("num is not divisible by 7")
//     }
//     var num = +prompt();
// }

// //* 17
// var num = 1;
// while (num > 0) {
//     var num = +prompt();
//     document.write(num ** 3);
// }

// //* 18
// var num = +prompt();
// while (num > 0) {
//     document.write(num ** 3);
//     var num = +prompt();
// }

// //* 19
// var sum = 0;
// for (var i = 1; i <= 100; ++i) {
//     var num = +prompt();
//     sum += num;
// }
// document.write(sum / n(sum / 100));

// //* 20
// var max = 0;
// for (var i = 1; i <= 100; ++i) {
//     var num = +prompt();
//     if (num > max) {
//         max = num;
//     }
// }
// document.write(max);

// //* 21
// var num = +prompt();
// var even = 0;
// while (num > 0) {
//     var num = +prompt();
//     if (num % 2 == 0) {
//         even++;
//     }
// }
// document.write(even);

// //* 22
// var num = +prompt();
// var sum = 0;
// var newNum;

// while (num) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }
// document.write(sum);

// //* 23
// var num = 1;
// while (num > 0) {
//     var num = +prompt();
//     for (var i = 1; i <= num; ++i) {
//         document.write(i);
//     }
// }

//* 2
var n = +prompt();
for (var i = 0; i < n; ++i) {
    for (var j = 0; j < n; ++j) {
        document.write("* ");
    }
    document.write("<br>");
}

//* 25
var hight = +prompt();
var width = +prompt();

for (var i = 1; i <= hight; ++i) {
    for (var j = 1; j <= width; ++j) {
        document.write("* ");
    }
    document.write("<br>");

}
