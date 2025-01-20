import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './aboutCopy/about.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SliderComponent } from './slider/slider.component';
import { FadeOnScrollDirective } from 'src/app/directives/fadeOnScroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    MissionComponent,
    // ContactComponent,
    FooterComponent,
    LandingComponent,
    SliderComponent,
    FadeOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
