import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { SidebarService } from 'src/app/services/sidebar.service';
=======
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
>>>>>>> upstream/main
=======
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
>>>>>>> 2c6d4e38bcdfa954ae83aa1acaeb78c3a593e858

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
<<<<<<< HEAD
<<<<<<< HEAD
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService) {}
=======
  constructor(private auth: AuthService, private route: Router) { }
=======
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService,private auth: AuthService, private route: Router) { }
>>>>>>> 2c6d4e38bcdfa954ae83aa1acaeb78c3a593e858
  
  logOut(): void {
    this.auth.signOut();
  }
<<<<<<< HEAD
>>>>>>> upstream/main

=======
>>>>>>> 2c6d4e38bcdfa954ae83aa1acaeb78c3a593e858

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }
}
