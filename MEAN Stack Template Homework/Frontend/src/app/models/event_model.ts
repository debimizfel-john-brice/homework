import { EventType } from "./event_type_model";

export class Event {
    _id: string;
    eventTypeId: string;
    eventType?: EventType;
    date: Date;
    description: string;
    address: string;
    participants: number;

    // public constructor(event: {
    //     _id: string,
    //     eventTypeId: string,
    //     eventType?: EventType,
    //     date: Date,
    //     description: string,
    //     address: string,
    //     participants: number,
    // }) {
    //     this._id = event._id;
    //     this.eventTypeId = event.eventTypeId;
    //     this.eventType = event.eventType;
    //     this.date = event.date;
    //     this.description = event.description;
    //     this.address = event.address;
    //     this.participants = event.participants;
    //     console.log("Event model created");

    // }
}
