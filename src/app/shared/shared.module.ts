import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FadeOnScrollDirective } from '../directives/fadeOnScroll.directive';
import { LogoSliderComponent } from '../logo-slider/logo-slider.component';

@NgModule({
  declarations: [
    // FadeOnScrollDirective, 
    LogoSliderComponent
  ],
  exports: [
    // FadeOnScrollDirective,
    LogoSliderComponent
  ],
  imports: [CommonModule],
})
export class SharedModule { }
