import mongoose from "mongoose";

export interface IEventType extends mongoose.Document {
    eventName: string;
}

export const EventTypeSchema = new mongoose.Schema<IEventType>({
    eventName: {
        type: String,
    },
}, {
    versionKey: false
})

export const EventType = mongoose.model<IEventType>("EventType", EventTypeSchema, "eventTypes");
// TODO verify collection
