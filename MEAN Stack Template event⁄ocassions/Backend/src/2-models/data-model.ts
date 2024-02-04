import mongoose from "mongoose";
//TODO delete this file
// 1. Interface representing our nodel:
export interface IDataModel extends mongoose.Document{
    // Dont need to the declere _id:
    name: string;
}

// 2. Schema build on the interface, containing more settings:
export const DataSchema = new mongoose.Schema<IDataModel>({
    name: {
        type: String, // JavaScript 'String' object
        trim: true,
        unique: true,
        required: [true, "Missing Name."],
        minlength: [2, "Name too short."],
        maxlength: [30, "Name too Long."]
    },
},{
    versionKey: false
})

// 3. Model - The finel class:
export const DataModel = mongoose.model<IDataModel>("DataModel", DataSchema, "______"); // Model name, Scema, Collaction name:

