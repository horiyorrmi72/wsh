import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
