import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.css']
})
export class LogoSliderComponent implements AfterViewInit {
  @Input() header: string ='OUR FUNDERS';

  ngAfterViewInit() {
    // Clone the logos after the component has rendered
    const logosSlide = document.querySelector('.logos-slide');
    const clonedLogos = logosSlide?.cloneNode(true);
    if (clonedLogos) {
      document.querySelector('.logos')?.appendChild(clonedLogos);
    }
  }
  
}
