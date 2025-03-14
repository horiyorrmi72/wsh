import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SliderComponent } from './slider/slider.component';
import { FadeOnScrollDirective } from 'src/app/directives/fadeOnScroll.directive';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        MissionComponent,
        // ContactComponent,
        FooterComponent,
        LandingComponent,
        SliderComponent,
        FadeOnScrollDirective,
        TShirtComponent,
        PreviousEventsComponent,
        EventDetailsComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
