import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events.service';


@Component({
  selector: 'app-completed-events',
  standalone: false,
  templateUrl: './completed-events.component.html',
  styleUrls: ['./completed-events.component.css']
})
export class CompletedEventsComponent implements OnInit {
  events: any[] = [];
  fetching: boolean = true;
  errorMessage: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  totalItems: number = 0;
  dataPerPage: number = 10;
  selectedEvent: any = null;
  selectedFile: File | null = null;

  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.getCompletedEvents(this.currentPage, this.dataPerPage);
  }

  getCompletedEvents(page: number, limit: number): void {
    this.fetching = true;
    this.eventService.getCompletedEvents(page, limit).subscribe({
      next: (res) => {
        if (res?.data && res?.data?.length > 0) {
          this.events = res.data;
          this.currentPage = res.pagination?.currentPage || 1;
          this.totalPages = res.pagination?.totalPages || 0;
          this.totalItems = res.pagination?.total || 0;
        } else {
          this.errorMessage = 'No events found';
        }
        this.fetching = false;
      },
      error: () => {
        this.fetching = false;
        this.errorMessage = 'An error occurred, try later.';
      }
    });
  }

  openEventDetails(eventId: string): void {
    this.router.navigate([`/dashboard/event/${eventId}`]);
  }

  deleteEvent(eventId: string, event: Event): void {
    event.stopPropagation();
    this.eventService.deleteEvent(eventId).subscribe({
      next: () => {
        this.events = this.events.filter(event => event._id !== eventId);
        alert('Event deleted successfully');
      },
      error: () => {
        alert('Failed to delete event.');
      }
    });
  }

}
