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


  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }
}
