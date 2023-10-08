
function save() {

    const city_box = document.getElementById("city_box");
    const street_box = document.getElementById("street_box");
    const number_box = document.getElementById("number_box");
    const zip_code_box = document.getElementById("zip_code_box");

    const city_box_error = document.getElementById("city_box_error");
    const street_box_error = document.getElementById("street_box_error");
    const number_box_error = document.getElementById("number_box_error");
    const zip_code_box_error = document.getElementById("zip_code_box_error");

    const city = city_box.value;
    const street = street_box.value;
    const number = number_box.value;
    const zip_code = zip_code_box.value;

    city_box_error.innerText = "";
    city_box.style.border = "";
    street_box_error.innerText = "";
    street_box.style.border = "";
    number_box_error.innerText = "";
    number_box.style.border = "";
    zip_code_box_error.innerText = "";
    zip_code_box.style.border = "";


    let address =
    {
        city: city,
        street: street,
        number: number,
        zip_code: zip_code
    };

    const address_str = JSON.stringify(address);

    if (city === "") {
        city_box_error.innerText = "Fill the field";
        city_box.style.border = "1px solid red";
    } else if (street === "") {
        street_box_error.innerText = "Fill the field";
        street_box.style.border = "1px solid red";
    } else if (number === "") {
        number_box_error.innerText = "Fill the field";
        number_box.style.border = "1px solid red";
    } else if (zip_code === "") {
        zip_code_box_error.innerText = "Fill the field";
        zip_code_box.style.border = "1px solid red";
    } else {
        localStorage.setItem("address", address_str);
    }
}


function load() {

    const address_str = localStorage.getItem("address");
    const address = JSON.parse(address_str);

    const city_box = document.getElementById("city_box");
    const street_box = document.getElementById("street_box");
    const number_box = document.getElementById("number_box");
    const zip_code_box = document.getElementById("zip_code_box");

    city_box.value = address.city;
    street_box.value = address.street;
    number_box.value = address.number;
    zip_code_box.value = address.zip_code;
}