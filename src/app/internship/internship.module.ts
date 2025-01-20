import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternshipRoutingModule } from './internship-routing.module';
import { InternshipComponent } from './internship.component';


@NgModule({
  declarations: [
    InternshipComponent
  ],
  imports: [
    CommonModule,
    InternshipRoutingModule
  ]
})
export class InternshipModule { }
