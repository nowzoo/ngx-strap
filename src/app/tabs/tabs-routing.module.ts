import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsRouteComponent } from './tabs-route/tabs-route.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: TabsRouteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
