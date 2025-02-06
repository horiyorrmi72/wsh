import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getUpcomingEventData().subscribe(
      (data) => {
        this.isLoading = false;
        if (data && data.length > 0) {
          this.events = data;
        } else {
          this.errorMessage = 'No events available';
        }
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to upcoming load events. Please try again later.';
      }
    );
  }

}
