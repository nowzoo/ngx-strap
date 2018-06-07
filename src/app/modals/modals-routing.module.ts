import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'another', component: AnotherRouteComponent},
    {path: '', component: ModalsRouteComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
