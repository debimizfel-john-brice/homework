
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function change_color(element) {
    let color = getRandomColor();
    let r, g, b;
    [r, g, b] = color;
    element.innerText = color;
    element.style.backgroundColor = `rgb(${r},${g},${b})`;
}
