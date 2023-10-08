async function get_user() {

    const respons = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await respons.json();

    show_users_by_select(json);

}

function show_users_by_select(users) {

    const select_box = document.getElementById("select_box");

    let list = "<option>Select a user</option>";
    for (const user of users) {
        list += `<option value=${user.id}>${user.name}</option>`;
    }
    select_box.innerHTML = list;
}

async function get_user_by_id() {
    const select_box = document.getElementById("select_box").value;

    const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${select_box}`);
    const json = await respons.json();

    display_user(json);
}

function display_user(user) {
    const ul_box = document.getElementById("ul_box");

    ul_box.innerHTML = `<li> ${user.name} </li>
                <li> ${user.username} </li>
                <li> ${user.email} </li>
                <li> ${user.phone} </li>
                <li> ${user.address.city} </li>
                <li> ${user.address.street} </li>
                <li> ${user.zipcode} </li>
                <li> ${user.company.name} </li>`;
}