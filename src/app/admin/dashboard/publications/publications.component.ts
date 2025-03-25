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
    authors: [''],
    publicationDate: '',
    publicationUrl: '',
    category: ''
  };
  isSubmitting: boolean = false;

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
    if (this.isFormValid()) {
      this.isSubmitting = true;

      const publicationDateFormatted = this.formatDate(this.publicationData.publicationDate);
      this.publicationData.publicationDate = publicationDateFormatted;

     
      const payload = {
        title: this.publicationData.title,
        description: this.publicationData.description,
        authors: this.publicationData.authors,
        publicationDate: publicationDateFormatted,
        publicationUrl: this.publicationData.publicationUrl,
        category: this.publicationData.category
      };

      // console.log('Sending payload:', payload); // 

      this.publicationService.createPublication(payload).subscribe({
        next: (response) => {
          // console.log('Server response:', response);
          alert('Publication created successfully');
          this.resetForm();
        },
        error: (err) => {
          if(err.error){
            alert(err.error.message)
          }else{
            alert("Network Error! Try again later")
          }
          this.isSubmitting = false;
        }
      }).add(() => {
        this.isSubmitting = false;
      });

    } else {
      alert('Please fill all required fields.');
    }
  }

  // Format datetime-local value to YYYY-MM-DD
  formatDate(datetimeLocal: string): string {
    return datetimeLocal.split('T')[0]; // Extracts YYYY-MM-DD from datetime input
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
