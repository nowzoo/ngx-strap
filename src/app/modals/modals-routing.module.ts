import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalsRouteComponent } from './modals-route/modals-route.component';

const routes: Routes = [{path: '', component: ModalsRouteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
