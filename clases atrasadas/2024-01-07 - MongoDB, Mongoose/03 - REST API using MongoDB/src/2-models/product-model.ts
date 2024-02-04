import mongoose from "mongoose";

// 1. Interface representing our nodel:
export interface IProductModel extends mongoose.Document{
    // Dont need to the declere _id:
    name: string;
    price: number;
    stock: number;
    categoryId: mongoose.Schema.Types.ObjectId;
}

// 2. Schema build on the interface, containing more settings:
export const ProductSchema = new mongoose.Schema<IProductModel>({
    name: {
        type: String, // JavaScript 'String' object
        trim: true,
        unique: true,
        required: [true, "Missing Name."],
        minlength: [2, "Name too short."],
        maxlength: [30, "Name too Long."]
    },
    price: {
        type: Number,
        required: [true, "Missing Price."],
        min: [0, "Price can't be negative."],
        max: [1000, "Price can't exceed 1000."]
    },
    stock: {
        type: Number,
        required: [true, "Missing Stock."],
        min: [0, "Stock can't be negative."],
        max: [1000, "Stock can't exceed 1000."]
    },
    categoryId: mongoose.Schema.Types.ObjectId
},{
    versionKey: false
})

// 3. Model - The finel class:
export const ProductModel = mongoose.model<IProductModel>("ProductModel", ProductSchema, "products"); // Model name, Scema, Collaction name:

