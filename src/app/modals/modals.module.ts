import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '@nowzoo/ngx-strap';

import { SharedModule } from '../shared/shared.module';
import { ModalsRoutingModule } from './modals-routing.module';

import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

import { MinimalComponent } from './demos/minimal.component';
import { PromisesComponent } from './demos/promises.component';
import { ShowComponent } from './demos/show.component';
import { EventsComponent } from './demos/events.component';
import { HideComponent } from './demos/hide.component';
import { HandleUpdateComponent } from './demos/handle-update.component';
import { RouteChangeComponent } from './demos/route-change.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    SharedModule,
    ModalsRoutingModule,

  ],
  declarations: [
    ModalsRouteComponent,
    MinimalComponent,
    ShowComponent,
    PromisesComponent,
    EventsComponent,
    HideComponent,
    HandleUpdateComponent,
    RouteChangeComponent,
    AnotherRouteComponent
  ]
})
export class ModalsModule { }
