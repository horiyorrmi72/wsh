import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
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
    this.getUpcomingEvents(this.currentPage, this.dataPerPage);
  }

  getUpcomingEvents(page: number, limit: number): void {
    this.fetching = true;
    this.eventService.getUpcomingEvents(page, limit).subscribe({
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  createEvent(eventData: any): void {
    if (!this.selectedFile || !(this.selectedFile instanceof File)) {
      alert('Please select a valid image file.');
      return;
    }

    const formData = new FormData();
    formData.append('title', eventData.title);
    formData.append('description', eventData.description);
    formData.append('startDate', eventData.startDate);
    formData.append('endDate', eventData.endDate);
    formData.append('image', this.selectedFile);

    this.eventService.createEvent(formData).subscribe({
      next: () => {
        alert('Event created successfully');
        this.getUpcomingEvents(this.currentPage, this.dataPerPage);
        this.selectedFile = null;
        this.selectedEvent = { title: '', description: '', startDate: '', endDate: '' };
      },
      error: () => {
        alert('Failed to create event.');
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

  openEditModal(eventData: any, event: Event): void {
    event.stopPropagation();
    this.selectedEvent = { ...eventData };
  }

  onEditFileSelected(event: any): void {
    this.selectedEvent.image = event.target.files[0];
  }

  editEvent(): void {
    if (!this.selectedEvent) return;

    const formData = new FormData();
    formData.append('title', this.selectedEvent.title);
    formData.append('description', this.selectedEvent.description);
    formData.append('startDate', this.selectedEvent.startDate);
    formData.append('endDate', this.selectedEvent.endDate);

    if (this.selectedEvent.image && this.selectedEvent.image instanceof File) {
      formData.append('image', this.selectedEvent.image);
    } else if (typeof this.selectedEvent.image === 'string') {
      formData.append('existingImage', this.selectedEvent.image);
    }

    this.eventService.editEvent(this.selectedEvent._id, formData).subscribe({
      next: () => {
        alert('Event updated successfully');
        this.getUpcomingEvents(this.currentPage, this.dataPerPage);
        this.selectedEvent = null;
      },
      error: () => {
        alert('Failed to update event.');
      }
    });
  }

}
