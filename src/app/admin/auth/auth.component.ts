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
  fetching: boolean = false;

  constructor(private auth: AuthService, private route: Router) { }
  login() {
    if (!this.email || !this.password) {
      alert('Please enter credentials');
      return;
    }
    this.fetching = true;

    this.auth.signIn({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.fetching = false;
          this.route.navigate(['/dashboard']);
        } else {
          console.error('imvalid credentiials');
          alert('Invalid credentials');
          this.fetching = false;
        }
      },
      error: (err) => {
        this.fetching = false;
        console.error('Login failed:', err);
        if(err.error){
          alert(err.error.message)
        }else{
          alert("Network Error! Try again later")
        }
      }
    });


  }


}
