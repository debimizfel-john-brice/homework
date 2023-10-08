//^ Objects


function question_1() {
    var square = {
        hight: 50,
        width: 50,
        color: "red",
        x: 10,
        y: 10
    }

    console.log(square.hight);
    console.log(square.width);
    console.log(square.x);
    console.log(square.y);
    console.log(square.color);
    console.log("----------------");


    for (var field in square) {
        console.log(square[field]);
    }
    console.log("----------------");
}

function question_2() {
    var employ = {
        firtsname: "Bob",
        lastname: "Smith",
        email: "b@g.com",
        salary: 10000,
        phone: "12345678765"
    }

    console.log(employ.firtsname);
    console.log(employ.lastname);
    console.log(employ.email);
    console.log(employ.salary);
    console.log(employ.phone);
    console.log("----------------");

    for (var field in employ) {
        console.log(employ[field]);
    }
    console.log("----------------");
}

function question_3() {

    var garemnt = {
        desinger: "Adidas",
        color: "black",
        size: "L",
        price: 100
    }

    console.log(garemnt.desinger);
    console.log(garemnt.color);
    console.log(garemnt.size);
    console.log(garemnt.price);
    console.log("---------");

    for (var field in garemnt) {
        console.log(garemnt[field]);
    }
    console.log("---------");

    // garemnt.type = prompt("Enter a type of garment that you want from adidas: ");;

    for (var field in garemnt) {
        console.log(garemnt[field]);
    }
    console.log("---------");

}

function question_4() {

    var customer = {
        firtsname: "Bob",
        lastname: "Smith",
        email: "b@g.com",
        phone: "12345678765",
        creditCard: {
            cardNumber: "1234-5678-9012-3456",
            cardType: "Visa",
            cardHolder: "Bob Smith",
            cardExpiry: "12/20",
        },
    }

    console.log(customer.firtsname);
    console.log(customer.lastname);
    console.log(customer.email);
    console.log(customer.phone);
    console.log(customer.creditCard.cardNumber);
    console.log(customer.creditCard.cardType);
    console.log(customer.creditCard.cardHolder);
    console.log(customer.creditCard.cardExpiry);
    console.log("---------");


    function print(obj) {
        for (var field in obj) {
            if (typeof obj[field] === "object") {
                print(obj[field]);
            } else {
                console.log(`${field}: ${obj[field]}`);
            }
        }
    }

    print(customer);
}

question_4();