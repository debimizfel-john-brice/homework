/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


$("#load_users").on("click", load_users);

async function load_users() {
    try {
        const data = await get_json("https://randomuser.me/api/?results=12");
        display_user(data.results);
        display_stats(data.results);
    } catch (error) {
        alert(error.message);
    }
}

function get_json(url) {
    return new Promise((res, rej) => {
        $.ajax({
            url,
            success: res,
            error: err => rej(err.statusText)
        })
    })
}

function display_stats(users) {

    let ages = 0;
    const nat = new Set();
    const gender = {
        male: 0,
        female: 0
    };

    for (const user of users) {
        ages += user.dob.age;
        gender[user.gender]++;
        nat.add(user.nat);
    }

    let nat_html = "";
    for (const n of nat) {
        nat_html += `<div>${n}</div>`;
    }

    const avg = ages / users.length;
    $("#ages").html(`<hr>The avg age is: ${avg.toFixed(2)}`);
    $("#genders").html(`Male: ${gender.male}`);
    $("#genders").append(`<br>Female: ${gender.female}`);
    $("#nats").html(`<hr><h5>Nationalities</h5><div class="grid">${nat_html}</div>`);
}


function display_user(users) {
    let card = "";
    for (const user of users) {
        card += user_html(user);
    }
    $("#container").html(card);
}

function user_html(user) {
    const flagCode = user.nat.toLowerCase();
    const flagLink = `https://flagicons.lipis.dev/flags/4x3/${flagCode}.svg`;

    return `<article>
    <header>
        <div><small>${user.name.title}</small>. ${user.name.first} ${user.name.last}</div>
        <div>${user.nat}  <img width="30" src='${flagLink}'><div>
    </header>
    <img src='${user.picture.large}'>
    <footer>
        <ul>
            <li>${user.location.country} - ${user.location.city}, ${user.location.street.name} ${user.location.street.number} </li>
            <li>${user.email}</li>
            <li>${user.phone}</li>
        </ul>
    </footer>
    </article>`;
}