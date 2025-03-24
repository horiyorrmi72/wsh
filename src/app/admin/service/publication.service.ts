import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  //fetch Publication
  getPublication(): Observable<any> {
    return this.http.get(`${this.baseUrl}/publications`);
  }

  //delete event
  deletePublication(publicationId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.baseUrl}/publications/delete-report/${publicationId}`, { headers}).pipe(
      catchError(error => {
        if (error.status === 401) {
          console.error("Unauthorized! Redirecting to login.");
        }
        return throwError(error);
      })
    );
  }

  editPubliaction(eventId: string, updatedData: any): Observable<any> {
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
  createPublication(FormData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(FormData);
    
    if (!token) {
      return throwError(() => new Error('Unauthorized: No token found'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' 
    });

    return this.http.post(`${this.baseUrl}/publications/add-report`, FormData, { headers }).pipe(
      catchError(error => {
        console.error('Error creating event:', error);
        return throwError(() => error);
      })
    );
  }
}
