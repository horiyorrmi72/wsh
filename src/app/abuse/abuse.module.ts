import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbuseRoutingModule } from './abuse-routing.module';
import { AbuseComponent } from './abuse.component';


@NgModule({
  declarations: [
    AbuseComponent
  ],
  imports: [
    CommonModule,
    AbuseRoutingModule
  ]
})
export class AbuseModule { }
