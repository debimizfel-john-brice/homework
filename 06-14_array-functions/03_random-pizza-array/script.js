function random_pizza() {
    const pizzas = [];

    for (let i = 0; i < 20; ++i) {
        const pizza = {
            diameter: Math.floor(Math.random() * 24) + 12,
            slices: Math.floor(Math.random() * 12) + 1,
            toppings: Math.floor(Math.random() * 5),
            price: Math.floor(Math.random() * 81) + 20,
        }
        pizzas.push(pizza);
    }

    //* A
    document.write("<h4>All the pizzas</h4>");
    pizzas.forEach(p => document.write(`diameter: ${p.diameter} <br> slices: ${p.slices} <br> toppings: ${p.toppings} <br>price: ${p.price} <br> <br>`));
    document.write("<hr>");

    //* B
    document.write("<h4>First no toppinng</h4>");
    const first_no_topping = pizzas.find(p => p.toppings === 0);
    document.write(`diameter: ${first_no_topping.diameter} <br> slices: ${first_no_topping.slices} <br> toppings: ${first_no_topping.toppings} <br>price: ${first_no_topping.price} <br> <br>`);
    document.write("<hr>");

    //* C
    document.write("<h4>First price under 30</h4>");
    const price_under_30 = pizzas.find(p => p.price < 30);
    document.write(`diameter: ${price_under_30.diameter} <br> slices: ${price_under_30.slices} <br> toppings: ${price_under_30.toppings} <br>price: ${price_under_30.price} <br> <br>`);
    document.write("<hr>");

    //* D
    document.write("<h4>Diameter under or equal 20</h4>");
    pizzas.filter(p => p.diameter <= 20).forEach(p => document.write(`diameter: ${p.diameter} <br> slices: ${p.slices} <br> toppings: ${p.toppings} <br>price: ${p.price}  <br> <br>`));
    document.write("<hr>");

    //* E
    document.write("<h4>Price over 80</h4>");
    pizzas.filter(p => p.price > 80).forEach(p => document.write(`diameter: ${p.diameter} <br> slices: ${p.slices} <br> toppings: ${p.toppings} <br>price: ${p.price} <br> <br>`));
    document.write("<hr>");

    //* F
    document.write("<h4>No toppings</h4>");
    pizzas.filter(p => p.toppings === 0).forEach(p => document.write(`diameter: ${p.diameter} <br> slices: ${p.slices} <br> toppings: ${p.toppings} <br>price: ${p.price} <br> <br>`));
    document.write("<hr>");

    //* G
    document.write("<h4>First 6 slices</h4>");
    const index = pizzas.findIndex(p => p.slices === 6);
    document.write(index);
    document.write("<hr>");

    //* H
    document.write("<h4>Radius</h4>");
    pizzas.map(p => radius(p)).forEach(r => document.write(`radius: ${r} <br> <br>`));
    document.write("<hr>");

    //* I

    //* J
    document.write("<h4>Sum of all prices</h4>");
    const sum = pizzas.reduce((sum, pizza) => sum += pizza.price, 0);
    document.write(sum + "<hr>");

    //* K
    document.write("<h4>The most expensive price</h4>");
    const expensive = pizzas.reduce((maxPizza, pizza) => pizza.price > maxPizza.price ? pizza : maxPizza, { price: 0 });
    document.write(expensive.price + "<hr>");

    //* L
    document.write("<h4>The most expensive pizza</h4>");
    document.write(`diameter: ${expensive.diameter} <br> slices: ${expensive.slices} <br> toppings: ${expensive.toppings} <br>price: ${expensive.price} <br> <br>`);

}

function radius(pizza) {
    return pizza.diameter / 2;
}

random_pizza();

