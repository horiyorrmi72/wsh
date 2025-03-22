import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    { path: 'events', component: EventsComponent },
    { path: 'event/:id', component: EventComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' } 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
