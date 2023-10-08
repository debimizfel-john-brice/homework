/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


$("button").on("click", function () {
    $(".grid>div").each(function () {
        $(this).css("background-color", '#' + Math.floor(Math.random() * 16777215).toString(16));
        $(this).text(Math.floor(Math.random() * 100) + 1);
    });

});