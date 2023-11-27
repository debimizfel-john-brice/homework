export interface CoffeModel {
    id: number;
    coffeeType: string;
    price: number;
    strength: number;
}

class Coffee implements CoffeModel {
    id: number;
    coffeeType: string;
    price: number;
    strength: number;

    constructor(coffe: CoffeModel) {
        this.id = coffe.id;
        this.coffeeType = coffe.coffeeType;
        this.price = coffe.price;
        this.strength = coffe.strength;
    }
}

export default Coffee;