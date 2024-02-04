import mongoose from "mongoose";

enum PizzaType {
    "small",
    "medium",
    "large"
}

// 1. Interface representing our model:
export interface IOrderModel extends mongoose.Document {
    // Dont need to the declere _id:
    customerName: string;
    phone: string;
    dateTime: Date;
    pizzaType: PizzaType;
    souce: string;
    drink: string;
}

// 2. Schema build on the interface, containing more settings:
export const OrderSchema = new mongoose.Schema<IOrderModel>({
    customerName: {
        type: String, // JavaScript 'String' object
        trim: true,
        required: [true, "Missing Name."],
        minlength: [2, "Name too short."],
        maxlength: [30, "Name too Long."]
    },
    phone: {
        type: String, // JavaScript 'String' object
        trim: true,
        required: [true, "Missing Phone."],
        validate: [/^05\d-?\d{7}$/, "Invalid Phone Number."]
    },
    dateTime: {
        type: Date,
        default: Date.now()
    },
    pizzaType: String,
    souce: String,
    drink: String
}, {
    versionKey: false,
    timestamps: true
})

// 3. Model - The finel class:
export const OrderModel = mongoose.model<IOrderModel>("OrderModel", OrderSchema, "orders"); // Model name, Scema, Collaction name:

