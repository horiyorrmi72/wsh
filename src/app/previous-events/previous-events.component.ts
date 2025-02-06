import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.css']
})
export class PreviousEventsComponent implements OnInit  {
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getCompletedEventData().subscribe(
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
        this.errorMessage = 'Failed to load previous events. Please try again later.';
      }
    );
  }

}
