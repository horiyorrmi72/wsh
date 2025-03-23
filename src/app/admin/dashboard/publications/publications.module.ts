import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';


@NgModule({
  declarations: [
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class PublicationsModule { }
