import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsRouteComponent } from './popups-route/popups-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'another', component: AnotherRouteComponent},
    {path: '', component: PopupsRouteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
