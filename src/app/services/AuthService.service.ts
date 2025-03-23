import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events
      .pipe(
        // Filter for NavigationEnd events
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Check if the URL contains '/dashboard'
        this.isAdmin = event.url.includes('/dashboard');
      });
  }
}