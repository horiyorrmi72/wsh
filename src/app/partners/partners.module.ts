import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { LogoSliderComponent } from '../logo-slider/logo-slider.component';

@NgModule({
  declarations: [
    PartnersComponent,
    LogoSliderComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
