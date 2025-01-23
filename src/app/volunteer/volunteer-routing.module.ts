import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerComponent } from './volunteer.component';

const routes: Routes = [{ path: '', component: VolunteerComponent, title:'WSH | Volunteer' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
