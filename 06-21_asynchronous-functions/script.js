function question_1() {
    document.write("Start<br>");
    const now = new Date();
    document.write(now.toLocaleTimeString() + "<br>");
    document.write("End<br>");
}

// question_1();

function question_2() {
    console.log("Start");
    setTimeout(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString());
    }, 3000)
    console.log("End");
}

// question_2();

function question_3() { //?
    console.log("Start");
    const now = new Date();
    setTimeout(() => {
        console.log(now.toLocaleTimeString());
    }, 3000)
    console.log("End");
}

// question_3();


function question_4() {
    console.log("Start");
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 3000);
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 5000);
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 7000);
    console.log("End");
}

// question_4();

function question_5() {
    const text = document.getElementById("text_box").value;

    if (text !== "") {
        setInterval(() => {
            document.getElementById("div_content").innerHTML = Math.floor(Math.random() * text);
        }, 1000);
    }
}
//^ No se puede cambiar el valor del campo de texto mientras esta corriendo.

function question_6() {
    setInterval(() => {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);
}

// question_6();

function question_7() {
    // document.body.style.backgroundColor = "Green";
    // alert("Done");

    //^ 3.Asi:
    document.body.style.backgroundColor = "Green";
    setTimeout(() => {
        alert("Done");
    }, 1);
}
//^ 1. No
//^ 2. Porque cambiar el color de fondo le toma unos sengundos mas de lo que le toma al alert entonces el reacciona primero

// question_7();

function question_8() {
    random_number_after_delay(random => console.log(random));

}

function random_number_after_delay_8(callback) {
    setTimeout(() => {
        callback(Math.floor(Math.random() * 100));
    }, 5000);
}

// question_8();

function question_9() {
    random_number_after_delay_9(50, random => console.log(random));
}

function random_number_after_delay_9(limit, callback) {
    setTimeout(() => {
        callback(Math.floor(Math.random() * limit));
    }, 5000);
}

// question_9();

function question_10() {
    random_number_after_delay_10(1, 50, random => console.log(random));
}

function random_number_after_delay_10(first, last, callback) {
    setTimeout(() => {
        callback(Math.floor(Math.random() * last - first + 1) + first);
    }, 5000);
}

// question_10();

function question_11() {//?

}

function random_number_after_delay_11() {

}


function question_12() {
    getUserFromServer(user => console.log(user.firstName, user.lastName));
}

function getUserFromServer(callback) {
    setTimeout(() => {
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        callback(user);
    }, 4000);
}

// question_12();


function question_13() {
    getGradesFromServer(grades => grades.forEach(g => console.log(g)));
}

function getGradesFromServer(callback) {
    setTimeout(() => {
        const grades = [100, 98, 75, 80, 100, 87];
        callback(grades)
    }, 7000);
}

// question_13();

function question_14() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// question_14();

function question_15() {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
        document.getElementById("time").style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);
}