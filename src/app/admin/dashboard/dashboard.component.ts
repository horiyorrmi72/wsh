import { Component } from '@angular/core';
<<<<<<< HEAD
import { SidebarService } from 'src/app/services/sidebar.service';
=======
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
>>>>>>> upstream/main

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
<<<<<<< HEAD
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService) {}
=======
  constructor(private auth: AuthService, private route: Router) { }
  
  logOut(): void {
    this.auth.signOut();
  }
>>>>>>> upstream/main


  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }
}
