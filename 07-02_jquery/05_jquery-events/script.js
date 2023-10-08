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

$("#container").append("<div></div>".repeat(15)).children().each(function (index) {
    $(this).text(index + 1);
    $(this).addClass(Math.random() < 0.5 ? "blue" : "red");
});

$("div").on("click", function () {
    alert($(this).text());
}).on("mouseover", function () {
    $(this).css("border", "5px solid black")
}).on("mouseout", function () {
    $(this).css("border", "")
});

