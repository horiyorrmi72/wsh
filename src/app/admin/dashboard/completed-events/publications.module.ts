import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedEventsRoutingModule } from './publications-routing.module';
import { CompletedEventsComponent } from './completed-events.component';


@NgModule({
  declarations: [
    CompletedEventsComponent
  ],
  imports: [
    CommonModule,
    CompletedEventsRoutingModule
  ]
})
export class CompletedEventsModule { }
