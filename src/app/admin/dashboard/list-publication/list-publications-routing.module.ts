import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPublicationComponent } from './list-publication.component';

const routes: Routes = [{ path: '', component: ListPublicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPublicationsRoutingModule { }
