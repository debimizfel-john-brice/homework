import express, { NextFunction, Request, Response } from "express"
import eventService from "../5-services/event_service.ts";
import { Event } from "../2-models/event_model";


const router = express.Router();

// GET http://localhost:4000/api/__________/
router.get("/", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const events = await eventService.getAllEvents();
        response.json(events);

    } catch (error) {
        next(error)
    }

});

// get eventtypes
router.get("/event-types", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const eventTypes = await eventService.getEventTypes();
        response.json(eventTypes);

    } catch (error) {
        next(error)
    }

});

// GET http://localhost:4000/api/events/event-type/:eventTypeId
router.get("/event-types/:eventTypeId([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const eventTypeId = request.params.eventTypeId;
        const events = await eventService.getAllEventsByType(eventTypeId);
        response.json(events);

    } catch (error) {
        next(error)
    }

});

// POST http://localhost:4000/api/events
router.post("/", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const event = new Event(request.body);
        console.log(event);
        
        const added = await eventService.addEvent(event);
        response.status(201).json(added);
    } catch (error) {
        next(error)
    }

});


// DELETE http://localhost:4000/api/________/:_id
router.delete("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const _id = request.params._id;
        await eventService.deleteEvent(_id);
        response.sendStatus(204);
    } catch (error) {
        next(error)
    }

});


export default router;