import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  subject: string = '';
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  sending: boolean = false;


  constructor(private contactservice: ContactService) { }

  sendMessage(contactForm: NgForm) {
    if (contactForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly!';
      return;
    }

    const formData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: `From: ${this.name}\n\n${this.message}`
    };
    this.sending = true;
    this.contactservice.sendFormData(formData).pipe(take(1)).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        alert(this.successMessage);
        this.resetForm(contactForm);
      },
      error: (err) => {
        this.errorMessage = 'Failed to send message. Please try again.';
        this.successMessage = '';
        this.sending = false;
        alert(this.errorMessage);
        console.error(err);
      }
    });
  }

  resetForm(contactForm: NgForm) {
    contactForm.resetForm();
    this.subject = '';
    this.name = '';
    this.email = '';
    this.message = '';
  }

}
