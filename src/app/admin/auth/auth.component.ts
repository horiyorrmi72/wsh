import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService, private route: Router) { }
  login() {
    if (!this.email || !this.password) {
      alert('Please enter credentials');
      return;
    }

    this.auth.signIn({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.route.navigate(['/dashboard']); 
        } else {
          console.error('Token not received, cannot redirect.');
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });


  }


}
