import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from '@nowzoo/ngx-strap';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { MinimalComponent } from './demos/minimal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    ModalsRoutingModule
  ],
  declarations: [ModalsRouteComponent, MinimalComponent]
})
export class ModalsModule { }
