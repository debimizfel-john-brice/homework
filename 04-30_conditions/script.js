// //* 1
// var num = +prompt("Enter a number: ");
// var num2 = +prompt("Enter a second number");
// var max = num >= num2 ? num : num2;
// alert(max);

// //* 2
// var grade = +prompt("Enter a grade: ");
// var pass = grade >= 60 ? "pass" : "failed";
// alert(pass);


// //* 3
// var age = +prompt("Enter a age");
// var license = age >= 20 ? "You can drive" : "You could drive in " + (20 - age) + " years";


// //* 4
// var num = +prompt("Enter a number: ");

// if (num > 0) {
//     alert("odd");
// } else if (num < 0) {
//     alert("even")
// } else {
//     alert("Cero");
// }


//* 5
//? var num = +prompt("Enter a number: ");


// if (num > 0) {
//     alert("The number is possitive and it's not zero");

// } else if (num <= 1 || num >= 100) {

//     alert("The number is not between 1-100");

// } else if (num <= 101 || num >= 1000) {
//     alert("The number is not between 101-1000");

// } else if (num > 1000) {
//     alert("The number is grater than 1000");

// } else {
//     alert("I don't know which number you enter")
// }






//* 6
// var num = +prompt("Enter a grade: ");


// if (num === 0 || num <= 59) {
//     alert("Failed");

// } else if (num <= 60 || num <= 69) {
//     alert("Enough");

// } else if (num <= 70 || num <= 79) {
//     alert("Almost great");

// } else if (num <= 80 || num <= 89) {
//     alert("Great");

// } else if (num <= 90 || num <= 99) {
//     alert("Almost great");

// } else if (num === 100) {
//     alert("Excelent");

// } else {
//     alert("The grade is not valid");
// }


//* 7
var num = +prompt("Enter a number: ");
var num2 = +prompt("Enter a second number: ");
var num3 = +prompt("Enter a third number: ");

if (num > num2) {
    alert(num);

} else if (num2 > num3) {
    alert(num2);

} else {
    alert(num3);
    alert(num);
}