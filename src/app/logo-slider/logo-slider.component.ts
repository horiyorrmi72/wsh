import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.css']
})
export class LogoSliderComponent implements AfterViewInit {
  // logos = [
  //   "./assets/images/funders/1.png",
  //   "./assets/images/funders/2.png",
  //   "./assets/images/funders/3.png",
  //   "./assets/images/funders/4.png",
  //   "./assets/images/funders/5.png",
  //   "./assets/images/funders/6.png",
  //   "./assets/images/funders/7.png",
  // ];

  ngAfterViewInit() {
    // Clone the logos after the component has rendered
    const logosSlide = document.querySelector('.logos-slide');
    const clonedLogos = logosSlide?.cloneNode(true);
    if (clonedLogos) {
      document.querySelector('.logos')?.appendChild(clonedLogos);
    }
  }
  
}
