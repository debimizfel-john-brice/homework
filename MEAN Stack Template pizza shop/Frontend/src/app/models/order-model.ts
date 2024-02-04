export enum PizzaType {
    "small",
    "medium",
    "large"
}


export class OrderModel {
    _id: string;
    customerName: string;
    phone: string;
    dateTime: Date;
    pizzaType: PizzaType;
    souce: string;
    drink: string;
}