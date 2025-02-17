import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipComponent } from './internship.component';

const routes: Routes = [{ path: '', component: InternshipComponent, title: 'WSH | Internship' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipRoutingModule { }
