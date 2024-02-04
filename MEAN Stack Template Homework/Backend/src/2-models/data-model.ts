import mongoose from "mongoose";
//TODO delete this file
// 1. Interface representing our nodel:
export interface IDataModel extends mongoose.Document{
    // Dont need to the declere _id:
    name: string;
    eventTypeId: mongoose.Types.ObjectId;
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
    toJSON: { virtuals: true },
    versionKey: false,
    id: false
})


// create an virtual field that will be the event type
// DataSchema.virtual("eventType", {
//     ref: EventType,
//     localField: "eventTypeId",
//     foreignField: "_id",
//     justOne: true
// })

// 3. Model - The finel class:
export const DataModel = mongoose.model<IDataModel>("DataModel", DataSchema, "______"); // Model name, Scema, Collaction name:

