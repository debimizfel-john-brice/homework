async function get_user_by_id() {

    const id_box = document.getElementById("id_box").value;
    const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${id_box}`);
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
