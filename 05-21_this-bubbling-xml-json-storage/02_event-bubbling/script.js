function show_content(event, id, show) {
    const p = document.getElementById(id);
    p.innerText = event.target.nodeName === "TD" && show ? event.target.innerText : ""
}