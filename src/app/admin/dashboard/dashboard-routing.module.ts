import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { EventComponent } from './event/event.component';
import { CompletedEventsComponent } from './completed-events/completed-events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ListPublicationComponent } from './list-publication/list-publication.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [{
  path: '', component: DashboardComponent,canActivate:[AuthGuard], children: [
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'event/:id', component: EventComponent, canActivate: [AuthGuard] },
    { path: 'publications', component: PublicationsComponent, canActivate: [AuthGuard] },
    { path: 'completed-events', component: CompletedEventsComponent, canActivate: [AuthGuard] },
    { path: 'upcoming-events', component: UpcomingEventsComponent, canActivate: [AuthGuard] },
    { path: 'list-publications', component: ListPublicationComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'events', pathMatch: 'full' } 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
