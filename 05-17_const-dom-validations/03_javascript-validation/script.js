//* 1
function show_name() {
    const name_box = document.getElementById("name_box");
    const name = name_box.value;

    if (name === "") {
        alert("Fill the field");
    } else {
        alert(name);
    }
}

//* 6
function show_info() {

    const name2_box = document.getElementById("name2_box");
    const error_name2_box = document.getElementById("error_name2_box");
    const lastname_box = document.getElementById("lastname_box");
    const error_lastname_box = document.getElementById("error_lastname_box");
    const email_box = document.getElementById("email_box");
    const error_email_box = document.getElementById("error_email_box");


    const name = name2_box.value;
    const lastname = lastname_box.value;
    const email = email_box.value;

    if (name === "") {
        name2_box.style.backgroundColor = "red";
        error_name2_box.innerText = "Enter a name";
    } else if (lastname === "") {
        lastname_box.style.backgroundColor = "red";
        error_lastname_box.innerText = "Enter a lastname";
    } else if (email === "") {
        email_box.style.backgroundColor = "red";
        error_email_box.innerText = "Enter an email";
    }



    else {
        alert(name + " " + lastname + "\n" + email);
        name2_box.style.backgroundColor = "";
        lastname_box.style.backgroundColor = "";
        email_box.style.backgroundColor = "";
    }
}

