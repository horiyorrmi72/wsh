import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../service/events.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  event: any = null;  // Store the selected event
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private location: Location
  ) { }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.fetchEventDetails(eventId);
    }
  }

  fetchEventDetails(eventId: string) {
    this.isLoading = true;
    this.eventService.viewEventDetails(eventId).subscribe(
      (data: any) => {
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
    this.location.back();
  }

}
