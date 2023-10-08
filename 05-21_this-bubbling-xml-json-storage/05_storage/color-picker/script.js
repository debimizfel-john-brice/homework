function change_color(color) {

    document.body.style.backgroundColor = color;
    localStorage.setItem("color", color);
}

function load_color() {

    document.body.style.backgroundColor = localStorage.getItem("color");
}

load_color()






