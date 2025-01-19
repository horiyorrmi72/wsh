import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images: string[] = [
    '../assets/images/internship.jpg',
    '../assets/images/gender_violence.jpg',
    '../assets/images/internship.jpg',
    '../assets/images/gender_violence.jpg',
    '../assets/images/internship.jpg',
    '../assets/images/gender_violence.jpg',
    '../assets/images/internship.jpg'
  ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  prev(): void {
    this.currentIndex = (this.currentIndex - 2 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 2) % this.images.length;
  }
}
