//* 1
var a = +prompt();
var b = +prompt();
var min = a < b ? a : b;
alert(min);

//* 2
var num = +prompt();
if (num % 10 === 5) {
    alert("the number finish with 5");
} else {
    alert("the number not finish with 5");
}

//* 3
var num = +prompt();
while (num !== 0) {
    if (num > 0) {
        alert("possitive");
    } else {
        alert("negative");
    }
    var num = +prompt();
}

//! 4
var num = 1;
while (num >= 0) {
    var num = +prompt();
    alert(num ** 3);
}

//*5
var num = +prompt();
while (num % 7 !== 0) {
    if (num > 0) {
        alert("possitive");
    } else if (num < 0) {
        alert("negative");
    } else {
        alert("zero")
    }
    var num = +prompt();
}

//* 6
var num = 1;
while (num !== 0) {
    var num = +prompt();
    if (num > 0) {
        alert("possitive");
    } else if (num < 0) {
        alert("negative");
    } else {
        alert("zero")
    }
}

//! 7
var num = +prompt();
while (num >= 0) {
    alert(num ** 3);
    var num = +prompt();
}

//! 8

//* 9
for (var i = 1; i <= 300; ++i) {
    document.write(i);
}

//* 10
for (var i = -300; i <= 300; ++i) {
    document.write(i);
}

//* 11
var num = +prompt();
for (var i = 1; i <= num; ++i) {
    document.write(i);
}

//* 12
var num = +prompt();
for (var i = num; i >= 1; --i) {
    document.write(i);
}

//* 13
var num = +prompt();
for (var i = 1; i <= num; ++i) {
    document.write(i);
}

for (var i = num; i >= 1; --i) {
    document.write(i);
}

//* 14
var a = +prompt();
var b = +prompt();

for (var i = a; i <= b; ++i) {
    document.write(i);
}

//* 15
var a = +prompt();
var b = +prompt();
var temp;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

for (var i = a; i <= b; ++i) {
    document.write(i);
}

//* 16
var a = +prompt();
var b = +prompt();
var temp;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

for (var i = b; i >= a; --i) {
    if (b % 10 === 7 || b % 7 === 0) {
        document.write(i);
    }
}

//* 17





//* 22
var num = +prompt();
while (num > 0) {
    for (var i = num; i >= 1; --i) {
        document.write(i + ' ');
    }
    num = +prompt();
}