import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipsRouteComponent } from './tooltips-route/tooltips-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'another', component: AnotherRouteComponent},
    {path: '', component: TooltipsRouteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipsRoutingModule { }
