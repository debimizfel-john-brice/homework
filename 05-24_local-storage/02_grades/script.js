
function add_grade() {


    //^ 1. Validation
    const valid = validation();
    if (!valid) return;

    //^ 2. Take student details into an object
    const student = get_students();

    //^ 3. Get student Array
    const students_list = get_student_from_storage();


    //^ 4. Add the object to an array list
    students_list.push(student);

    //^ 5. Save customers to storage
    save_student_to_storage(students_list);

    //^ 6. Display the list in the table
    display_students_list(students_list);


    average(students_list);

    //^ 7. clear the form

    //^ 8 A penas abres la pagina muestra que tiene guardado


    // const ingredients = get_ingredients();

    // const list_of_ingredients = get_ingredients_from_storage();

    // list_of_ingredients.push(ingredients);

    // save_ingredients_to_storage(list_of_ingredients);

    // display_list_of_ingredients(list_of_ingredients);

    // clear_form();


    //* ----------------------------



}


function validation() {

    const fullname_box = document.getElementById("fullname_box");
    const grade_box = document.getElementById("grade_box");

    const fullname = fullname_box.value;
    const grade = grade_box.value;

    const fullname_box_error = document.getElementById("fullname_box_error");
    const grade_box_error = document.getElementById("grade_box_error");

    fullname_box_error.innerText = "";
    grade_box_error.innerText = "";

    if (fullname === "") {
        fullname_box_error.innerText = "Please enter a fullname";
        return false;
    }
    if (grade === "") {
        grade_box_error.innerText = "Please enter grade";
        return false;
    } else if ((grade < 0 || grade > 100)) {
        grade_box_error.innerText = "Please enter a valid grade";
        return false;
    }

    return true;
}

function get_students() {
    const fullname_box = document.getElementById("fullname_box");
    const grade_box = document.getElementById("grade_box");

    const fullname = fullname_box.value;
    const grade = grade_box.value;

    const students = {
        fullname,
        grade
    }

    return students;
}

function get_student_from_storage() {

    const student_JSON = localStorage.getItem("students");
    const students_list = (student_JSON === null) ? [] : JSON.parse(student_JSON);

    return students_list;

}

function save_student_to_storage(arr) {
    const students_str = JSON.stringify(arr);
    localStorage.setItem("students", students_str);

}

function display_students_list(students_list) {

    const table_body_box = document.getElementById("table_body_box");

    table_body_box.innerHTML = "";

    for (const student of students_list) {
        const row =
            `<tr>
            <td>${student.fullname}</td>
            <td>${student.grade}</td>
            </tr>`;
        table_body_box.innerHTML += row;
    }

}

function average(students_list) {
    const span_box = document.getElementById("span_box");
    const grade_box = document.getElementById("grade_box");

    let sum_grade = 0;

    sum_grade += grade_box.value;

    span_box.innerText = (sum_grade+1);

}








//*----------------------------
function get_ingredients() {
    const ingredient_box = document.getElementById("ingredient_box");
    const amount_box = document.getElementById("amount_box");

    const ingredient = ingredient_box.value;
    const amount = amount_box.value;

    const ingredients = {
        ingredient,
        amount
    }

    return ingredients;
}


function get_ingredients_from_storage() {

    const ingredients_JSON = localStorage.getItem("ingredients");
    const ingredients = (ingredients_JSON === null) ? [] : JSON.parse(ingredients_JSON);

    return ingredients;


}

function save_ingredients_to_storage(arr) {

    const ingredients_str = JSON.stringify(arr);
    localStorage.setItem("ingredients", ingredients_str);

}

function display_list_of_ingredients(list_of_ingredients) {

    const ol_content = document.getElementById("ol_content");
    ol_content.innerHTML = "";

    for (const obj of list_of_ingredients) {
        const row = `<li>Ingredient: ${obj.ingredient}, Amount: ${obj.amount}</li>`
        ol_content.innerHTML += row;
    }

}

function clear_form() {
    document.getElementById("ingredient_box").value = "";
    document.getElementById("amount_box").value = "";
    document.getElementById("ingredient_box").focus();
}

function load_ingredients() {
    const ingredients = get_ingredients_from_storage();
    display_list_of_ingredients(ingredients);
}

load_ingredients();



function clear_list() {

    const ol_content = document.getElementById("ol_content");
    const list_str = get_ingredients_from_storage();

    ol_content.innerHTML = "";
    localStorage.removeItem("ingredients", list_str);

}