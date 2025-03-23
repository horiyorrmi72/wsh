import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService,private auth: AuthService, private route: Router) { }
  
  logOut(): void {
    this.auth.signOut();
    this.route.navigate(['/']);
  }

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }
}
