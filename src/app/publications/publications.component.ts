import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publication: any[] = [];
  fetching: boolean = true;
  errorMessage: string = '';

  constructor(private Publication: PublicationService, private router: Router) { }

  ngOnInit(): void {
    this.getPublicationdata();
  }

  getPublicationdata(): void {
    this.fetching = true;
    this.Publication.getPublication().subscribe({
      next: (res) => {
        console.log(res);
        
        if (res?.publications && res?.publications?.length > 0) {
          this.publication = res.publications;
        } else {
          this.errorMessage = 'No publication found';
        }
        this.fetching = false;
      },
      error: () => {
        this.fetching = false;
        this.errorMessage = 'An error occurred, try later.';
      }
    });
  }

}
