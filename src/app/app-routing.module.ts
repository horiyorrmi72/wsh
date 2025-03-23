import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'publications', loadChildren: () => import('./publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'programs', loadChildren: () => import('./programs/programs.module').then(m => m.ProgramsModule) },
  { path: 'partners', loadChildren: () => import('./partners/partners.module').then(m => m.PartnersModule) },
  { path: 'abuse', loadChildren: () => import('./abuse/abuse.module').then(m => m.AbuseModule) },
  { path: 'volunteer', loadChildren: () => import('./volunteer/volunteer.module').then(m => m.VolunteerModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'internship', loadChildren: () => import('./internship/internship.module').then(m => m.InternshipModule) },
  { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 't-shirt', component: TShirtComponent },
  { path: 'previous-events', component: PreviousEventsComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'auth', loadChildren: () => import('./admin/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'events', loadChildren: () => import('./admin/dashboard/events/events.module').then(m => m.EventsModule) },
  { path: 'event', loadChildren: () => import('./admin/dashboard/event/event.module').then(m => m.EventModule) },
  { path: 'publications', loadChildren: () => import('./admin/dashboard/publications/publications.module').then(m => m.PublicationsModule) },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
