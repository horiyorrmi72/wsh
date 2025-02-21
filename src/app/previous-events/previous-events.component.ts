import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.css']
})
export class PreviousEventsComponent implements OnInit  {
  events: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEvents(this.currentPage, this.itemsPerPage);
  }

  fetchEvents(page: number, limit: number): void {
    this.eventService.getCompletedEventData(page, limit).subscribe(
      (data) => {
        this.isLoading = false;
        
        if (data?.data && data?.data?.length > 0) {
          this.events = data?.data;
          this.currentPage = data.pagination.currentPage;
          this.totalPages = data.pagination.totalPages;
          this.totalItems = data.pagination.total;
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

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchEvents(this.currentPage, this.itemsPerPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchEvents(this.currentPage, this.itemsPerPage);
    }
  }

  // Navigate to event details page when an event is clicked
  openEventDetails(eventId: string) {
    this.router.navigate([`/event/${eventId}`]);  // Navigate to the event details page
  }

}
