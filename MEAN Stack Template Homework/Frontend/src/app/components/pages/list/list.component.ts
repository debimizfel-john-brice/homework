import { Component, OnInit } from '@angular/core';
import { EventType } from '../../../models/event_type_model';
import { Event } from '../../../models/event_model';
import { NotifyService } from '../../../services/notify-service';
import { EventService } from '../../../services/event_service';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../widgets/table/table.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  public eventsTypes: EventType[];
  public events: Event[];


  public constructor(
    private eventService: EventService,
    private notifyService: NotifyService) { }


  public async ngOnInit(): Promise<void> {
    try {
      this.eventsTypes = await this.eventService.getEventsTypes();
    } catch (error) {
      this.notifyService.error("Error while searching events types");
    }
  }

  public async getEventsByType(select: EventTarget): Promise<void> {
    try {
      const eventId = (select as HTMLSelectElement).value;
      this.events = await this.eventService.getAllEventsByType(eventId);
    } catch (error) {
      this.notifyService.error("Error while searching events");
    }
  }

  public async deleteEvent(eventId: string): Promise<void> {
    try {
      if (!window.confirm("Are you sure?")) return;

      await this.eventService.deleteEvent(eventId);
      this.notifyService.success("Event deleted");

      const index = this.events.findIndex(e => e._id === eventId);
      this.events.splice(index, 1);

    } catch (error) {
      this.notifyService.error("Error while deleting event");
    }
  }


}
