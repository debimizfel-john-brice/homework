//^ Arrays


function question_1() {

    const names = [];

    for (var i = 0; i < 5; ++i) {
        names.push(prompt("Enter a name"));
    }

    document.write(names[0] + ", " + names[names.length - 1]);

    document.write("<hr>");

    for (const name of names) {
        document.write(name + "<br>");
    }

    document.write("<hr>");

    names.reverse();
    document.write(names);



}


function question_2() {
    const grades = [10, 30, 70, 49, 1];
    const illegal_grades = [];

    // for (var i = 0; i < 10; ++i) {
    //     grades.push(prompt("Enter a grade"));
    // }

    for (const grade of grades) {
        if (grade < 0 || grade > 100) {
            illegal_grades.push(grade);
        }
    }

    console.log(illegal_grades.length);

    if (illegal_grades.length !== 0) {
        document.write("Illegal grades: " + illegal_grades);
    } else {
        document.write("All the grades are legal");
    }
}

function question_3() {
    const numbers = [];

    for (var i = 0; i < 10; ++i) {
        numbers.push(Math.floor(Math.random() * 101));
    }

    for (const number of numbers) {
        document.write(number + "|");
    }

    document.write("<hr>");

    numbers.reverse();
    document.write("Revers array: " + numbers + " ");

    document.write("<hr>");

    var sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    document.write("Sum: " + sum);

    document.write("<hr>");

    document.write("Average: " + (sum / numbers.length));

    document.write("<hr>");

    var count = 0;
    document.write("Even numbers: ");
    for (const number of numbers) {
        if (number % 2 === 0) {
            document.write("Even numbers: " + number + " ");
        } else {
            count++;
        }
    }

    document.write("<hr>");
    document.write("Odd numbers: " + count);

    document.write("<hr>");

    var max = min = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        } if (number < min) {
            min = number;
        }
    }

    document.write("Max number: " + max);

    document.write("<hr>");


    document.write("Min number: " + min);

}

function question_4() {

    var songs = ["another one bites the dust", "bohemian rhapsody", "smooth criminal"];

    for (const song of songs) {
        document.write(song + " <br>");
    }


    songs.splice((songs.length / 2), 1);
    for (const song of songs) {
        document.write(song + " <br>");
    }
}

question_4();


