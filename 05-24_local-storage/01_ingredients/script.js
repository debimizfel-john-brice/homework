
function create_list() {


    const valid = validation(); //&
    if (!valid) return;

    const ingredients = get_ingredients();

    const list_of_ingredients = get_ingredients_from_storage();

    list_of_ingredients.push(ingredients);

    save_ingredients_to_storage(list_of_ingredients);

    display_list_of_ingredients(list_of_ingredients);

    clear_form();

}


function validation() {

    const ingredient_box = document.getElementById("ingredient_box");
    const amount_box = document.getElementById("amount_box");

    const ingredient = ingredient_box.value;
    const amount = amount_box.value;

    const ingredient_box_error = document.getElementById("ingredient_box_error");
    const amount_box_error = document.getElementById("amount_box_error");

    ingredient_box_error.innerText = "";
    amount_box_error.innerText = "";

    if (ingredient === "") {
        ingredient_box_error.innerText = "Please enter ingredient";
        return false;
    }
    if (amount === "" || amount < 0) {
        amount_box_error.innerText = "Please enter amount";
        return false;
    }

    return true;
}

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