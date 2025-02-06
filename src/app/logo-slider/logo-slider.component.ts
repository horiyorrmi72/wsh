import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.css']
})
export class LogoSliderComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Clone the logos after the component has rendered
    const logosSlide = document.querySelector('.logos-slide');
    const clonedLogos = logosSlide?.cloneNode(true);
    if (clonedLogos) {
      document.querySelector('.logos')?.appendChild(clonedLogos);
    }
  }
  
}
