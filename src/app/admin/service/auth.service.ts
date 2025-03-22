import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  

  signIn(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem('token') != null;
  }


  signOut(): void{
    return localStorage.removeItem('token');
  }

}
