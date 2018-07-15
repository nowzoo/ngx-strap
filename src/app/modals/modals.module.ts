import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

import { NgxStrapModalModule } from '@nowzoo/ngx-strap';

import { ModalsRoutingModule } from './modals-routing.module';

import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

import { DemoMinimalComponent } from './demo-minimal/demo-minimal.component';
import { DemoHandleUpdateComponent } from './demo-handle-update/demo-handle-update.component';
import { DemoRouteChangeComponent } from './demo-route-change/demo-route-change.component';
import { DemoShowHideComponent } from './demo-show-hide/demo-show-hide.component';
import { DemoVarsComponent } from './demo-vars/demo-vars.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxStrapModalModule,
    ModalsRoutingModule,
    NgxMdModule,
    NgxHighlightJsModule

  ],
  declarations: [
    ModalsRouteComponent,
    AnotherRouteComponent,
    DemoMinimalComponent,
    DemoHandleUpdateComponent,
    DemoRouteChangeComponent,
    DemoShowHideComponent,
    DemoVarsComponent
  ]
})
export class ModalsModule { }
