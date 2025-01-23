import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbuseComponent } from './abuse.component';

const routes: Routes = [{ path: '', component: AbuseComponent, title:'WSH | What is Abuse?' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbuseRoutingModule { }
