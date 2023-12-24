function validateFullName(fullName) {
    const pattern = /^\w+( \w+)+$/;
    const valid = pattern.test(fullName.value);
    fullName.setAttribute("aria-invalid", (!valid).toString());
    setDisabled();
}

function validateHour(hour) {
    const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    const valid = pattern.test(hour.value);
    hour.setAttribute("aria-invalid", (!valid).toString());
    setDisabled();
}

function setDisabled() {
    const button = document.getElementById("submit");
    const fullName = document.getElementById("fullName");
    const hour = document.getElementById("hour");
    if (fullName.getAttribute("aria-invalid") === "true" || hour.getAttribute("aria-invalid") === "true") {
        button.setAttribute("disabled", "true");
    } else {
        button.removeAttribute("disabled");
    }
}