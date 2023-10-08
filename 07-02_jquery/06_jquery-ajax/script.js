/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>

async function get_weather(city) {
    try {
        const data = await get_json(`http://api.weatherstack.com/current?access_key=39192e0453c08324b003f42b786ddc5f&query=${city}`);
        display_weather(data);
    } catch (error) {
        alert(error.message);
    }
}

function display_weather(data) {
    $("#temperature").html(`Temperature: ${data.current.temperature}&deg;C`);
    $("#icon").attr("src", data.current.weather_icons[0]);
    $("#description").text(data.current.weather_descriptions.join(", "));
}

function get_json(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: resolve,
            error: err => reject(err.statusText)
        })
    });
}