import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { EventService } from '../services/event.service'; 
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any = null;  // Store the selected event
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');  // Get event ID from the URL
    if (eventId) {
      this.fetchEventDetails(eventId);
    }
  }

  fetchEventDetails(eventId: string) {
    this.isLoading = true;
    this.eventService.getEventDetails(eventId).subscribe(
      (data: any) => {
        console.log(data);
        this.event = data.data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load event details.';
        this.isLoading = false;
      }
    );
  }

  goBack() {
    this.location.back();  // This will take the user back to the previous page
  }

}
