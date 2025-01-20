import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  // { path: 'events', 'component': EventsComponent, title: 'Events' },
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

  { path: "**", redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
