/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


$("button").on("click", function () {
    const color = $(this).data("color");

    if (!$(this).hasClass("clicked")) {
        $("." + color).fadeOut(2000);
        $(`#${color}_button`).text(`Fade in ${color} squares`);

    } else {
        $("." + color).fadeIn(2000);
        $(`#${color}_button`).text(`Fade out ${color} squares`);
    }

    $(this).toggleClass("clicked");
});


function numbers() {
    $(".grid>div").each(function (index) {
        $(this).text(index + 1);
    });
}

numbers();