import { OkPacket } from "mysql";
import CoffeeModel from "../2-models/coffe_model";
import dal from "../4-utils/dal";

async function getCoffees(): Promise<CoffeeModel[]> {
    const sql = "SELECT * FROM coffees";
    const cofees = await dal.execute(sql);
    return cofees;
}

async function getCoffee(id: number): Promise<CoffeeModel> {
    const sql = `SELECT * FROM coffees WHERE coffeeId = ${id}`;
    const coffees = await dal.execute(sql);
    const coffee = coffees[0];
    return coffee;
}

async function getExpensiveCoffees(minPrice: number): Promise<CoffeeModel[]> {
    const sql = `SELECT * FROM coffees WHERE price > ${minPrice}`;
    const coffees = await dal.execute(sql);
    return coffees;
}

async function getCoffeesBetween(minPrice: number, maxPrice: number): Promise<CoffeeModel[]> {
    const sql = `SELECT * FROM coffees WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;
    const coffees = await dal.execute(sql);
    return coffees;
}

async function getCoffeesByStrength(strength: number): Promise<CoffeeModel[]> {
    const sql = `SELECT * FROM coffees WHERE strength = ${strength}`;
    const coffees = await dal.execute(sql);
    return coffees;
}

async function addCoffee(coffee: CoffeeModel): Promise<CoffeeModel> {
    const sql = `INSERT INTO coffees (coffeeType, price, strength) VALUES ('${coffee.coffeeType}', ${coffee.price}, ${coffee.strength})`;
    const info: OkPacket = await dal.execute(sql);
    coffee.id = info.insertId;
    return coffee;
}

async function updateCoffee(coffee: CoffeeModel): Promise<CoffeeModel> {
    const sql = `UPDATE coffees SET coffeeType = '${coffee.coffeeType}', price = ${coffee.price}, strength = ${coffee.strength} WHERE coffeeId = ${coffee.id}`;
    const info: OkPacket = await dal.execute(sql);
    return coffee;
}

async function updatePartialCoffee(coffee: CoffeeModel): Promise<CoffeeModel> {
    const dbCoffee = await getCoffee(coffee.id);
    for (const prop in coffee) {
        if (coffee[prop] !== undefined) {
            dbCoffee[prop] = coffee[prop];
        }
    }
    await updateCoffee(dbCoffee);
    return dbCoffee;
}

async function deleteCoffee(id: number): Promise<void> {
    const sql = `DELETE FROM coffees WHERE coffeeId = ${id}`;
    await dal.execute(sql);
}

export default {
    getCoffees,
    getCoffee,
    getExpensiveCoffees,
    getCoffeesBetween,
    getCoffeesByStrength,
    addCoffee,
    updateCoffee,
    updatePartialCoffee,
    deleteCoffee
}