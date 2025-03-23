import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }

<<<<<<< HEAD
  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
=======
>>>>>>> 2c6d4e38bcdfa954ae83aa1acaeb78c3a593e858

  logout(): void {
    localStorage.removeItem('token'); // Remove the token
    this.router.navigate(['/admin']);
  }
}
