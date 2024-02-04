import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../../services/notify-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../../services/event_service';
import { Event } from '../../../models/event_model';
import { EventType } from '../../../models/event_type_model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  public eventsTypes: EventType[];
  public event = new Event;

  public constructor(
    private eventService: EventService,
    private notifyService: NotifyService,
    private router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    try {
      this.eventsTypes = await this.eventService.getEventsTypes();
    } catch (error) {
      this.notifyService.error("Error while searching events types");
    }
  }

  public changeEventType(select: EventTarget) {
    this.event.eventTypeId = (select as HTMLSelectElement).value;
  }


  public async addEvent() {
    try {
      console.log(this.event);

      await this.eventService.addEvent(this.event);
      this.notifyService.success("Event added successfully");
      this.router.navigate(['/list']);
    } catch (error) {
      this.notifyService.error(error);
    }
  }

}
