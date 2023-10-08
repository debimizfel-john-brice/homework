/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


function activate_paragraphs() {
    //^ Jquery
    $("p").css("cursor", "pointer");
    $("p").on("click", function () {
        setTimeout(() => {
            this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }, 1000);
    });

    //^ JS
    // const paragraphs = document.getElementsByTagName("p");
    // for (const p of paragraphs) {
    //     p.style.cursor = "pointer";
    //     p.addEventListener("click", function () {
    //         setTimeout(() => {
    //             this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //         }, 1000);
    //     });
    // }
}