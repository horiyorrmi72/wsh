import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  sendFormData(details: { email: string; subject: string; message: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/mailer/contact-mail`, details).pipe(
      catchError((error) => {
        console.error('Error sending contact form:', error);
        return throwError(() => new Error('Failed to send message. Please try again.'));
      })
    );
  }
}