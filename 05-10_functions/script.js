function print(v = "", end = "<br>") {
    // console.log(v);
    document.write(v + end);
}


function question_1() {
    print("Make Things Go Right");
}

// for (var i = 0; i < 3; ++i) {
//     question_1();
// }

function question_2() {
    print("Deborah Murciano");
}

// for (var i = 0; i < 100; ++i) {
//     question_2();
// }

function question_3(str) {
    for (var i = 0; i < 10; ++i) {
        print(str);
    }
}

// question_3("Question 3");
// question_3(prompt());

function question_4(str, n) {
    for (i = 0; i < n; ++i) {
        print(str);
    }
}

// question_4("Question 4", 4);
// question_4(prompt("Message"), +prompt("Number"));

function question_5(n1, n2, n3) {
    var sum = (n1 + n2 + n3);
    var avg = sum / 3;
    print(avg);
}

// question_5(2, 8, 4);
// question_5(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));


function question_6(n1, n2, n3) {
    var max = 0;
    if (n1 > max) {
        max = n1;
    } if (n2 > max) {
        max = n2;
    } if (n3 > max) {
        max = n3;
    }
    print(max);
}

// question_6(5, 2, 19);
// question_6(+prompt(), +prompt(), +prompt());
question_6(Math.floor(Math.random() * 17), Math.floor(Math.random() * 11), Math.floor(Math.random() * 20));





function question_7(num) {
    if (num === 1) {
        print(":)");
    } else if (num === 2) {
        print(":(");
    } else if (num === 3) {
        print(":/");
    } else if (num === 4) {
        print(";)");
    } else if (num === 5) {
        print(";(");
    }
}

// question_7(3);
// question_7(+prompt());
// question_7(Math.floor(Math.random() * 5) + 1);
// for (var i = 1; i <= 5; ++i) {
//     question_7(i);
// }
// for (var i = 1; i <= 100; ++i) {
//     question_7(Math.floor(Math.random() * 5) + 1);
// }



