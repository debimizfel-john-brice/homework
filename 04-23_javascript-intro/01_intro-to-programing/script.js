// 1
// var num = prompt("Enter a number: ");
// document.write(num ** 2);

//2
// var n1 = prompt("Enter a first number: ")
// var n2 = prompt("Enter a second number: ")
// var n3 = prompt("Enter a third number: ")
// document.write("<br> The multiplication of those three numbers is: " + n1 * n2 * n3);

//3
// n1 = prompt("Enter a first number: ");
// n2 = prompt("Enter a second number: ");
// document.write("<br> The division between the first number by the second is: " + n1 / n2);
// document.write("<br> and the division between the second number by the first is: " + n2 / n1);

//4
// var firstname = prompt("Enter your first name: ");
// var lastname = prompt("Enter your last name: ");
// var email = prompt("Enter your email: ");
// var phone = prompt("Enter your phone number: ");

// alert("Name: " + firstname + "\nLastname: " + lastname + "\nEmail: " + email + "\nPhone: " + phone);

//5
// alert("Full name: " + firstname + " " + lastname + "\nEmail: " + email + ", Phone: " + phone)

//6
var num = 12;
// document.write(num % 10 + "<br>"); prompt("Enter a number biger than 10: ");
// document.write(num);

//7
var num = 12;
var sum = 0;
var num2 = num;
var count = 0;
for (var i = num; i > 0; i--) {
    num2 = num % 10;
    sum = sum + num2;
    num = Math.floor(num / 10);
    console.log(num + ": num \n");

    count++;
}

console.log(sum + ": sum \n");
console.log(count + ": count \n");


