import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
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

// angular materials
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AdminHeaderComponent,
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
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule, 
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        FormsModule,
        SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
