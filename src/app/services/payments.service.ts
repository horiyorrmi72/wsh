import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  
  initiatePayment(payload: any): Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/payments/initiate`, payload)
  }
}
