import express, { Request, Response } from "express";

const server = express();
server.use(express.json());

server.listen(4100, () => {
    console.log("Server is running on port: ", 4100);
});

const coffees = [
    {
        "code": 1,
        "coffee_type": "Espresso",
        "price": 2.5,
        "coffee_strength": 4
    },
    {
        "code": 2,
        "coffee_type": "Latte",
        "price": 3.0,
        "coffee_strength": 3
    },
    {
        "code": 3,
        "coffee_type": "Cappuccino",
        "price": 3.2,
        "coffee_strength": 2
    },
    {
        "code": 4,
        "coffee_type": "Americano",
        "price": 2.8,
        "coffee_strength": 1
    },
    {
        "code": 5,
        "coffee_type": "Mocha",
        "price": 3.5,
        "coffee_strength": 5
    }
];

// Get the root
server.get("/", (request: Request, response: Response) => {
    console.log("Client request root " + request.method + ", Route: " + request.originalUrl);

    response.send(`
    <html>
        <body>
            <h1>Coffee REST API</h1>
        </body>
    </html>
    `);
});

// Get all the coffees
server.get("/api/coffees", (request: Request, response: Response) => {
    console.log("Client request all coffees " + request.method + ", Route: " + request.originalUrl);
    response.json(coffees);
});

// Get one coffee
server.get("/api/coffees/:code", (request: Request, response: Response) => {
    const code = parseInt(request.params.code);
    response.json(coffees.find(c => c.code === code));
});

// Add one coffee
server.post("/api/coffees", (request: Request, response: Response) => {
    const new_coffee = request.body;
    new_coffee.code = coffees[coffees.length - 1].code + 1;

    coffees.push(new_coffee);
    response.json(new_coffee);
});

// Update one coffee
server.put("/api/coffees/:code", (request: Request, response: Response) => {
    const updated_coffee = request.body;
    const code = parseInt(request.params.code);

    const index = coffees.findIndex(c => code === c.code);

    if (index < 0) {
        response.status(404).json({ errors: [`Coffe ${code} does not exist`] });
        return;
    }

    if (updated_coffee.code === undefined) {
        updated_coffee.code = code;
    }

    if (code !== updated_coffee.code) {
        response.status(404).json({ errors: [`Coffe ${code} from URL does not match ${updated_coffee.code} from body`] });
        return;
    }

    coffees[index] = updated_coffee;

    response.json(updated_coffee);

})


// Delete one coffee
server.delete("/api/coffees/:code", (request: Request, response: Response) => {
    const code = parseInt(request.params.code);
    coffees.splice(coffees.findIndex(c => c.code === code), 1);
    response.json();
});



