// List for all the costumers
// const costumer_list = [];


function add_costumer() {

    //^ 1. Validation
    const valid = validation();
    if (!valid) return;

    //^ 2. Take costumer details into an object
    const costumer = get_costumer();

    //^ 3. Get cosumer Array
    const costumer_list = get_customer_from_storage();

    //^ 4. Add the object to an array list
    costumer_list.push(costumer);

    //^ 5. Save customers to storage
    save_costumer_to_storage(costumer_list);

    //^ 6. Display the list in the table
    display_costumer(costumer_list);

    //^ 7. clear the form
    clear_form();

}


//^ 1
function validation() {
    const first_name_box = document.getElementById("first_name_box");
    const lastname_box = document.getElementById("lastname_box");
    const email_box = document.getElementById("email_box");

    const first_name = first_name_box.value;
    const lastname = lastname_box.value;
    const email = email_box.value;

    const first_name_box_error = document.getElementById("first_name_box_error");
    const lastname_box_error = document.getElementById("lastname_box_error");
    const email_box_error = document.getElementById("email_box_error");

    first_name_box_error.innerText = "";
    lastname_box_error.innerText = "";
    email_box_error.innerText = "";

    if (first_name === "") {
        first_name_box_error.innerText = "First name is required";
        return false;
    }
    if (lastname === "") {
        lastname_box_error.innerText = "Lastname is required";
        return false;
    }
    if (email === "") {
        email_box_error.innerText = "Email is required";
        return false;
    }

    return true;

}

//^ 2
function get_costumer() {
    const first_name_box = document.getElementById("first_name_box");
    const lastname_box = document.getElementById("lastname_box");
    const email_box = document.getElementById("email_box");

    const first_name = first_name_box.value;
    const lastname = lastname_box.value;
    const email = email_box.value;


    //* No hace falta poner key word si es el mismo nombre que el valor
    const costumer = {
        first_name, // first_name: first_name
        lastname,
        email
    };

    return costumer;
}

//^ 3
function get_customer_from_storage() {

    const costumer_JSON = localStorage.getItem("costumers");

    const costumers = (costumer_JSON === null) ? [] : JSON.parse(costumer_JSON);

    return costumers;
}

//^ 4
function display_costumer(costumer_list) {

    const table_body_box = document.getElementById("table_body_box");

    table_body_box.innerHTML = "";

    for (const costumer of costumer_list) {
        const row =
            `<tr>
            <td>${costumer.first_name}</td>
            <td>${costumer.lastname}</td>
            <td>${costumer.email}</td>
            </tr>`;
        table_body_box.innerHTML += row;
    }

}

//^ 5
function save_costumer_to_storage(arr) {

    const costumer_str = JSON.stringify(arr);
    localStorage.setItem("costumers", costumer_str);

}

//^ 7
function clear_form() {
    document.getElementById("first_name_box").value = "";
    document.getElementById("lastname_box").value = "";
    document.getElementById("email_box").value = "";
    document.getElementById("first_name_box").focus();

}

//^ 8 A penas abres la pagina muestra que tiene guardado
function load_customers() {
    const costumers = get_customer_from_storage();
    display_costumer(costumers);
}

load_customers();



