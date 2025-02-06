import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';
import { LogoSliderComponent } from '../logo-slider/logo-slider.component';


@NgModule({
  declarations: [
    ProgramsComponent,
    LogoSliderComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
