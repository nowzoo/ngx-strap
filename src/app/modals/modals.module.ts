import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

import { NgxStrapModalModule } from '@nowzoo/ngx-strap';

import { SharedModule } from '../shared/shared.module';
import { ModalsRoutingModule } from './modals-routing.module';

import { ModalsRouteComponent } from './modals-route/modals-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';

import { DemoMinimalComponent } from './demo-minimal/demo-minimal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxStrapModalModule,
    SharedModule,
    ModalsRoutingModule,
    NgxMdModule,
    NgxHighlightJsModule

  ],
  declarations: [
    ModalsRouteComponent,
    AnotherRouteComponent,
    DemoMinimalComponent
  ]
})
export class ModalsModule { }
