import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsh_site';
  
  constructor(public authService: AuthService) {}
}
