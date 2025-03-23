import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from '../../service/publication.service';

@Component({
  selector: 'app-list-publication',
  standalone: false,
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.css']
})
export class ListPublicationComponent implements OnInit {
  publication: any[] = [];
  fetching: boolean = true;
  errorMessage: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  totalItems: number = 0;
  dataPerPage: number = 10;
  selectedEvent: any = null;
  selectedFile: File | null = null;

  constructor(private Publication: PublicationService, private router: Router) { }

  ngOnInit(): void {
    this.getPublicationdata();
  }

  getPublicationdata(): void {
    this.fetching = true;
    this.Publication.getPublication().subscribe({
      next: (res) => {
        console.log(res);
        
        if (res?.publications && res?.publications?.length > 0) {
          this.publication = res.publications;
        } else {
          this.errorMessage = 'No publication found';
        }
        this.fetching = false;
      },
      error: () => {
        this.fetching = false;
        this.errorMessage = 'An error occurred, try later.';
      }
    });
  }

  deletePublicationData(publicationId: string, event: Event): void {
    this.fetching = true;
    event.stopPropagation();
    this.Publication.deletePublication(publicationId).subscribe({
      next: () => {
        this.publication = this.publication.filter(data => data._id !== publicationId);
        alert('Event deleted successfully');
        this.fetching = false;
      },
      error: () => {
        alert('Failed to delete event.');
        this.fetching = false;
      }
    });
  }

  // openEditModal(eventData: any, event: Event): void {
  //   event.stopPropagation();
  //   this.selectedEvent = { ...eventData };
  // }

  // editEvent(): void {
  //   if (!this.selectedEvent) return;

  //   const formData = new FormData();
  //   formData.append('title', this.selectedEvent.title);
  //   formData.append('description', this.selectedEvent.description);
  //   formData.append('startDate', this.selectedEvent.startDate);
  //   formData.append('endDate', this.selectedEvent.endDate);

  //   if (this.selectedEvent.image && this.selectedEvent.image instanceof File) {
  //     formData.append('image', this.selectedEvent.image);
  //   } else if (typeof this.selectedEvent.image === 'string') {
  //     formData.append('existingImage', this.selectedEvent.image);
  //   }

  //   this.eventService.editEvent(this.selectedEvent._id, formData).subscribe({
  //     next: () => {
  //       alert('Event updated successfully');
  //       this.getUpcomingEvents(this.currentPage, this.dataPerPage);
  //       this.selectedEvent = null;
  //     },
  //     error: () => {
  //       alert('Failed to update event.');
  //     }
  //   });
  // }

}
