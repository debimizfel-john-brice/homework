/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>



$("button").on("click", function () {
    const fisrt_num = $("#first_number").val();
    const last_num = $("#last_number").val();
    let option = "";

    for (let i = fisrt_num; i <= last_num; ++i) {
       option += `<option>${i}</option>`
    }

    $("select").html(option);
});