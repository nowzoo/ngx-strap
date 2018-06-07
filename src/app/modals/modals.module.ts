import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from '@nowzoo/ngx-strap';

import { SharedModule } from '../shared/shared.module';
import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { MinimalComponent } from './demos/minimal.component';
import { PromisesComponent } from './demos/promises.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    ModalsRoutingModule
  ],
  declarations: [ModalsRouteComponent, MinimalComponent, PromisesComponent]
})
export class ModalsModule { }
