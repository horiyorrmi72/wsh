import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { CompletedEventsRoutingModule } from './completed-events-routing.module';
import { CompletedEventsComponent } from './completed-events.component';


@NgModule({
  declarations: [
    CompletedEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompletedEventsRoutingModule
  ]
})
export class CompletedEventsModule { }
