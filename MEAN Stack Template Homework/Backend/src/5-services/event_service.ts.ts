import { ResourceNotFoundError, ValidationError } from "../2-models/client-errors";
import { Event, IEvent } from "../2-models/event_model";
import { EventType, IEventType } from "../2-models/event_type_model";


function getAllEvents(): Promise<IEvent[]> {
    return Event.find().populate("eventType").exec();
}

function getEventTypes(): Promise<IEventType[]> {
    return EventType.find().exec();
}

function getAllEventsByType(eventTypeId: string): Promise<IEvent[]> {
    return Event.find({ eventTypeId }).populate("eventType").exec();
}

function addEvent(event: IEvent): Promise<IEvent> {
    const errors = event.validateSync();
    if (errors) throw new ValidationError(errors.message);
    return event.save();
}

async function deleteEvent(_id: string): Promise<void> {
    const deleted = await Event.findByIdAndDelete(_id).exec();
    if (!deleted) throw new ResourceNotFoundError(_id);
}

export default {
    getAllEvents,
    getEventTypes,
    getAllEventsByType,
    addEvent,
    deleteEvent
}