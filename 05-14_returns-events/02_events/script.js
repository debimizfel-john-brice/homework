function print(v = "", end = "<br>") {
    // console.log(v);
    document.write(v + end);
}

function print_by_id(v = "", end = document.createElement("br")) {
    document.getElementById("answer").append(v, end)
}



//* 1
function get_max(n1, n2) {
    return (n1 > n2) ? n1 : n2;
}

function test_max() {
    var n1 = +prompt("Enter a first number: ");
    var n2 = +prompt("Enter a second number");
    var max = get_max(n1, n2);
    alert(max);
}


//* 2
function prin_square(n) {
    for (var i = 1; i <= n; ++i) {
        for (var j = 1; j <= n; ++j) {
            print_by_id("*", "");
        }
        print_by_id("");
    }
}

function test_square() {
    var n = + prompt("Enter a number: ");
    prin_square(n);
}


//* 3
function square_border(height, width) {
    document.write("<pre>");
    for (var i = 1; i <= height; ++i) {
        for (var j = 1; j <= width; ++j) {
            var star = (i === 1 || i === height || j === 1 || j === width) ? "*" : "&nbsp;";
            print(star + "&nbsp;", "");
        }
        print("");
    }
    document.write("</pre>")
}

function test_square_border() {
    var height = + prompt("Enter a height: ");
    var width = + prompt("Enter a width: ");
    square_border(height, width);

}


//* 4
function test_random_square() {
    var height = Math.floor(Math.random() * 16) + 5;
    var width = Math.floor(Math.random() * 16) + 5;
    square_border(height, width);

}



//* 5
function sum(n1, n2) {
    var sum = n1 + n2;
    alert(sum);
}

function subtraction(n1, n2) {
    var subtraction = n1 - n2;
    alert(subtraction);
}

function mult(n1, n2) {
    var mult = n1 * n2;
    alert(mult);
}

function div(n1, n2) {
    var div = n1 * n2;
    alert(div);
}


//* 6
function between(n1, n2) {

    var temp;
    if (n1 > n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
    }

    for (var i = n1; i <= n2; ++i) {
        print(i + " ", "");
    }
}

//* 7



