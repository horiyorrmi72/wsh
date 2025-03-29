import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  pageContent = [
    {
      title: 'Our Mission',
      data: 'To provide non-judgmental and non-discriminatory protection and response to ALL women and girls experiencing gender-based violence in Nigeria.',
    },
    {
      title: 'Our Vision',
      data: 'To create equal, safe, and non-violent communities for women and girls experiencing gender-based violence in Nigeria.',
    },
    {
      title: 'Our Values',
      data: 'Equality, Inclusion, Social-justice, Respect for Diversity, Intersectionality, Compassion, Solidarity, Empowerment, Integrity, Collaboration, Self-care and Innovation guide every step we take toward creating lasting impact.',
    },
  ]
}
