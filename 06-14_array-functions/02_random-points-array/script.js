function random_points() {
    const points = [];

    for (let i = 0; i < 20; ++i) {
        const point = {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
        }
        points.push(point);
    }

    //* A
    points.forEach(p => document.write(`x: ${p.x}, y: ${p.y} <hr>`));

    //* B
    const x_greater_y = points.find((p => p.x > p.y));
    document.write(`x is greater than y <br> x: ${x_greater_y.x}, y: ${x_greater_y.y} <hr>`);

    //* C
    const y_over_fifty = points.find((p => p.y > 50));
    document.write(`y is over 50 <br> x: ${y_over_fifty.x}, y: ${y_over_fifty.y} <hr>`);

    //* D
    points.filter(p => p.x % 2 !== 0).forEach(p => document.write(`x is odd <br> x: ${p.x}, y: ${p.y} <hr>`));

    //* E
    points.filter(p => p.y > 50).forEach(p => document.write(`y is over 50 <br> x: ${p.x}, y: ${p.y} <hr>`));

    //* F
    const index = points.findIndex(p => p.x > 50);
    document.write(`index of x over 50 <br> ${index}<hr>`);

    //* G

    points.map(p => distance({ x: 0, y: 0 }, p)).forEach(d => document.write(`the distance: ${d}<br>`));
    document.write("<hr>");

    //* H & I
    const min = points.reduce((min_point, point) => point.x < min_point.x ? point : min_point, { x: Infinity, y: Infinity });
    document.write(`the minimum x: ${min.x} <hr>`);
    document.write(`the object with the minimum x <br> x: ${min.x}, y: ${min.y} <hr>`);
}

function distance(p1, p2) {
    const dis = Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2)).toFixed(2);
    return dis;
}

random_points();
