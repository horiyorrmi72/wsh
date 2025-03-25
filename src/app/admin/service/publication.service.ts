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

  // Fetch all publications
  getPublication(): Observable<any> {
    return this.http.get(`${this.baseUrl}/publications`).pipe(
      catchError(error => this.handleError(error, 'Fetching publications failed'))
    );
  }

  // Delete a publication
  deletePublication(publicationId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/publications/delete-report/${publicationId}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => this.handleError(error, 'Deleting publication failed'))
    );
  }

  // Edit a publication
  editPublication(publicationId: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/publications/update-report/${publicationId}`, updatedData, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(error => this.handleError(error, 'Updating publication failed'))
    );
  }

  // Create a new publication 
  createPublication(publicationData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/publications/add-report`, publicationData, {
      headers: this.getAuthHeaders(true)
    }).pipe(
      catchError(error => this.handleError(error, 'Creating publication failed'))
    );
  }

  // Helper method to get authorization headers
  private getAuthHeaders(isJson: boolean = false): HttpHeaders {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Unauthorized: No token found');
    }

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' 
    });

    if (isJson) {
      headers = headers.set('Content-Type', 'application/json');
    }

    return headers;
  }

    
  // error handler
  private handleError(error: any, message: string): Observable<never> {
    console.error(`${message}:`, error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}