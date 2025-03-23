import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { UpcomingEventsRoutingModule } from './upcoming-events-routing.module';
import { UpcomingEventsComponent } from './upcoming-events.component';


@NgModule({
  declarations: [
    UpcomingEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpcomingEventsRoutingModule
  ]
})
export class UpcomingEventsModule { }
