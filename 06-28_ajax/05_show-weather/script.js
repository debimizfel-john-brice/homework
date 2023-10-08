async function get_weather(cities_box) {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=39192e0453c08324b003f42b786ddc5f&query=${cities_box.value}`);


    const json = await response.json();
    display_weather(json);

}


function display_weather(weather) {

    const div_weather = document.getElementById("div_weather");
    div_weather.innerHTML = `${weather.current.weather_descriptions}<img src="${weather.current.weather_icons}" alt="">`;

}



