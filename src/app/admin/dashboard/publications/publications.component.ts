import { Component } from '@angular/core';
import { PublicationService } from '../../service/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publicationData: any = {
    title: '',
    description: '',
    authors: [''], // Initialize with one empty author field
    publicationDate: '',
    publicationUrl: '',
    category: ''
  };
  isSubmitting: boolean = false; // Track form submission state

  constructor(private publicationService: PublicationService, private router: Router) { }

  // Add a new author field
  addAuthor(): void {
    this.publicationData.authors.push('');
  }

  // Remove an author field
  removeAuthor(index: number): void {
    this.publicationData.authors.splice(index, 1);
  }

  // Handle form submission
  onSubmit(): void {
    // Validate form
    if (this.isFormValid()) {
      this.isSubmitting = true; // Show spinner

      // Extract the date part in YYYY-MM-DD format
      const publicationDateFormatted = this.formatDate(this.publicationData.publicationDate);

      const formData = new FormData();
      formData.append('title', this.publicationData.title);
      formData.append('description', this.publicationData.description);
      formData.append('publicationDate', publicationDateFormatted);
      formData.append('publicationUrl', this.publicationData.publicationUrl);
      formData.append('category', this.publicationData.category);
      
      // Append authors array correctly by iterating over it
      this.publicationData.authors.forEach((author: string, index: number) => {
        formData.append(`authors[${index}]`, author); // appends authors[0], authors[1], etc.
      });

      console.log(formData);
      
      // Send data to the server
      this.publicationService.createPublication(formData).subscribe({
        next: () => {
          alert('Publication created successfully');
          this.resetForm();
          this.isSubmitting = false; // Hide spinner
        },
        error: () => {
          alert('Failed to create publication.');
          this.isSubmitting = false;
        }
      });
    } else {
      alert('Please fill all required fields.');
    }
  }

   // Format datetime-local value to YYYY-MM-DD
   formatDate(datetimeLocal: string): string {
    // Extract the date part (YYYY-MM-DD) from the datetime-local value
    return datetimeLocal.split('T')[0];
  }

  // Reset the form
  resetForm(): void {
    this.publicationData = {
      title: '',
      description: '',
      authors: [''],
      publicationDate: '',
      publicationUrl: '',
      category: ''
    };
  }

  // Validate the form
  isFormValid(): boolean {
    return (
      this.publicationData.title.trim() !== '' &&
      this.publicationData.description.trim() !== '' &&
      this.publicationData.authors.every((author: string) => author.trim() !== '') &&
      this.publicationData.publicationDate.trim() !== '' &&
      this.publicationData.publicationUrl.trim() !== '' &&
      this.publicationData.category.trim() !== ''
    );
  }
}