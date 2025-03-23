import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images: string[] = [
    '../assets/images/Gallery/women-safe-image.jpg',
    '../assets/images/Gallery/women-save-defending-equal-rights.jpg',
    '../assets/images/Gallery/women-save-defending-rights.jpg',
    '../assets/images/Gallery/women-save-empowering-future.jpg',
    '../assets/images/Gallery/women-save-empowering-future2.jpg',
    '../assets/images/Gallery/women-save-empowering-future3.jpg',
    '../assets/images/Gallery/women-save-empowering-women-leaders.jpg',
    '../assets/images/Gallery/women-save-Nigerian Union of Tailors, Onipasan, Ibadan, Oyo State.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative0.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative1.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative2.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative3.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative4.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative5.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative6.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative7.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative8.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative9.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative11.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative12.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative13.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative14.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative15.jpg',
    '../assets/images/Gallery/women-save-Sustenance Initiative16.jpg',
    '../assets/images/Gallery/women-save-Traditional birth attendance, Ibadan North LGA, 3.jpg',

  ];
  currentIndex: number = 0;
  private intervalId: any; // To store the interval ID for auto-scroll

  constructor() { }

  ngOnInit(): void { 
    this.startAutoScroll(); // Start auto-scroll when the component initializes
  }

  ngOnDestroy(): void {
    this.stopAutoScroll(); // Clean up the interval when the component is destroyed
  }

  // Start auto-scroll
  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000); // Change image every 3 seconds (adjust as needed)
  }

  // Stop auto-scroll
  stopAutoScroll(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 2 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 2) % this.images.length;
  }
}
