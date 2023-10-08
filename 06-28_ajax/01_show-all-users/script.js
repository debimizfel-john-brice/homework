async function get_users() {

    const respons = await fetch("https://jsonplaceholder.typicode.com/users");

    const json = await respons.json();
    display_users(json);
}

function display_users(users) {

    const ul_box = document.getElementById("ul_box");

    let list = "";
    for (const user of users) {
        list += `<li>Name: ${user.name}</li>
                <li>User name: ${user.username}</li>
                <li>Email: ${user.email}</li>
                <li>Phone: ${user.phone}</li>
                <li>City: ${user.address.city}</li>
                <li>Street: ${user.address.street}</li>
                <li>Zip code: ${user.address.zipcode}</li>
                <li>Company name: ${user.company.name}</li><br>`;
    }
    ul_box.innerHTML = list;
}

