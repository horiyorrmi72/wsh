import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs.component';

const routes: Routes = [{ path: '', component: ProgramsComponent, title: 'WSH | Programs' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
