import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event_model";
import { appConfig } from "../config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { EventType } from "../models/event_type_model";

@Injectable({
    providedIn: "root"
})
export class EventService {

    public constructor(private httpClient: HttpClient) { }

    public async getAllEvents(): Promise<Event[]> {
        return await firstValueFrom(this.httpClient.get<Event[]>(appConfig.eventUrl));
    }

    public getEventsTypes(): Promise<EventType[]> {
        return firstValueFrom(this.httpClient.get<EventType[]>(appConfig.eventTypeUrl));
    }

    public async getAllEventsByType(eventTypeId: string): Promise<Event[]> {
        const observable = this.httpClient.get<Event[]>(`${appConfig.eventTypeUrl}${eventTypeId}`);
        return await firstValueFrom(observable);

    }

    public async addEvent(data: Event): Promise<void> {
        console.log(data);
        
        const observable = this.httpClient.post<Event>(appConfig.eventUrl, data);
        await firstValueFrom(observable);
    }

    public async deleteEvent(_id: string): Promise<void> {
        const observable = this.httpClient.delete<void>(`${appConfig.eventUrl}/${_id}`);
        await firstValueFrom(observable);
    }

}