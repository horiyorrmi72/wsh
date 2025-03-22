import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { EventComponent } from './event/event.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [{
  path: '', component: DashboardComponent,canActivate:[AuthGuard], children: [
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'event/:id', component: EventComponent, canActivate: [AuthGuard] },
    { path: 'publications', component: PublicationsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'events', pathMatch: 'full' } 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
