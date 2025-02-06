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

  getUpcomingEventData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/upcoming-event`);
  }

  getCompletedEventData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/upcoming`);
  }

}
