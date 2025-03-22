import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  //fetch upcoming events
  getUpcomingEvents(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/upcoming-event`, {
      params: {
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }


  //get completed events
  getCompletedEvents(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/completed-event`, {
      params: {
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }

  //fectch event by id
  viewEventDetails(eventId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/eventby-id/${eventId}`);
  }

  //delete event
  deleteEvent(eventId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.baseUrl}/events/delete-event/${eventId}`, { headers }).pipe(
      catchError(error => {
        if (error.status === 401) {
          console.error("Unauthorized! Redirecting to login.");
        }
        return throwError(error);
      })
    );
  }

  editEvent(eventId: string, updatedData: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('Unauthorized: No token found'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.put(`${this.baseUrl}/events/update-event/${eventId}`, updatedData, { headers }).pipe(
      catchError(error => {
        console.error('Error updating event:', error);
        return throwError(() => error);
      })
    );
  }

  // add event 
  createEvent(eventData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('Unauthorized: No token found'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/events/create-event`, eventData, { headers }).pipe(
      catchError(error => {
        console.error('Error creating event:', error);
        return throwError(() => error);
      })
    );
  }
}
