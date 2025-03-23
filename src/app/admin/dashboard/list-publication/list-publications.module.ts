import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPublicationsRoutingModule } from './list-publications-routing.module';
import { ListPublicationComponent } from './list-publication.component';


@NgModule({
  declarations: [
    ListPublicationComponent
  ],
  imports: [
    CommonModule,
    ListPublicationsRoutingModule
  ]
})
export class ListPublicationsModule { }
