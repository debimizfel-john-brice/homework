//* 1
function raised() {
    const number_box = document.getElementById("number_box");
    const num = +number_box.value;
    number_box.style.backgroundColor = "aqua";

    alert(num ** 3);
}

//* 2
function sum() {
    const number1_box = document.getElementById("number1_box");
    const number2_box = document.getElementById("number2_box");

    const num1 = +number1_box.value;
    const num2 = +number2_box.value;

    const sum = num1 + num2;

    alert(sum);

    return sum;
}

function average() {
    // let sum = sum();

    const number1_box = document.getElementById("number1_box");
    const number2_box = document.getElementById("number2_box");

    const num1 = +number1_box.value;
    const num2 = +number2_box.value;

    const sum = num1 + num2;

    const avg = sum / 2;

    alert(avg);
}


//* 3
function random_color() {

    const arr = ["red", "green", "blue", "yellow", "white", "purple"];
    const random_color_box = document.getElementById("random_color_box");

    random_color_box.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];

    //& All the colors
    // random_color_box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//* 4
function show_email() {
    const email_box = document.getElementById("email_box");
    const email_error_box = document.getElementById("email_error_box");

    const email = email_box.value;
    if (email === "") {
        email_error_box.innerText = "Please enter email";
    } else {
        email_error_box.innerText = "";
        alert(email);
    }
}

//* 5
function show_fullname(exercise) {
    const name_box = document.getElementById("name_box");
    const name_error_box = document.getElementById("name_error_box");

    const lastname_box = document.getElementById("lastname_box");
    const lastname_error_box = document.getElementById("lastname_error_box");

    const name = name_box.value;
    const lastname = lastname_box.value;


    if (name === "") {
        name_error_box.innerText = "Please enter name";

    } else if (lastname === "") {
        lastname_error_box.innerText = "Please enter lastname";

    } else {
        alert(name + " " + lastname);
        name_error_box.innerText = "";
        lastname_error_box.innerText = "";
    }
}

//* 6
function show_email2() {
    const email2_box = document.getElementById("email2_box");
    const email2_error_box = document.getElementById("email2_error_box");

    const email = email2_box.value;
    if (email === "") {
        email2_box.style.backgroundColor = "red";
        email2_error_box.innerText = "Please enter email";
    } else {
        email2_box.style.backgroundColor = "";
        email2_error_box.innerText = "";
        alert(email);
    }
}

//* 7

//* 8
function change_color(element) {
    element.style.backgroundColor = "red";
    element.style.color = "blue";

}

function reset_color(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}