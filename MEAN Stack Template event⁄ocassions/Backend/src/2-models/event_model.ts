import mongoose from "mongoose";
import { EventType, IEventType } from "./event_type_model";

export interface IEvent extends mongoose.Document {
    eventTypeId: mongoose.Types.ObjectId;
    date: Date;
    description: string;
    address: string;
    participants: number;
    eventType?: IEventType;
}

export const EventSchema = new mongoose.Schema<IEvent>({
    eventTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EventType",
        required: [true, "Missing eventTypeId."]
    },
    date: {
        type: Date,
        required: [true, "Missing date."]
    },
    description: {
        type: String,
        required: [true, "Missing description."]
    },
    address: {
        type: String,
        required: [true, "Missing address."]
    },
    participants: {
        type: Number,
        required: [true, "Missing participants."]
    },
}, {
    toJSON: { virtuals: true },
    versionKey: false,
    id: false
})

// create an virtual field that will be the event type
EventSchema.virtual("eventType", {
    ref: EventType,
    localField: "eventTypeId",
    foreignField: "_id",
    justOne: true
})


export const Event = mongoose.model<IEvent>("Event", EventSchema, "events");
// TODO verify collection