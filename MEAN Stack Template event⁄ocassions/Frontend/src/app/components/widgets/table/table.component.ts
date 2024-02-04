import { Component, Input } from '@angular/core';
import { Event } from '../../../models/event_model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() public events: Event[];
  @Input() public deleteEvent: (eventId: string) => Promise<void>;


  public isPassed(date: Date): boolean {
    const now = new Date().toISOString().slice(0, 10);
    const dateEvent = new Date(date).toISOString().slice(0, 10)
    return dateEvent <= now;
  }

}
