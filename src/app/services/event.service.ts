import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getUpcomingEventData(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/upcoming-event`, {
      params: {
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }

  getCompletedEventData(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/completed-event`, {
      params: {
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }

  getEventDetails(eventId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/eventby-id/${eventId}`); // Endpoint to get event details
  }

}
