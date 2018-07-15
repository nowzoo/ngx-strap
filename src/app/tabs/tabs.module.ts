import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxStrapTabsModule } from '@nowzoo/ngx-strap';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsRouteComponent } from './tabs-route/tabs-route.component';
import { DemoMinimalComponent } from './demo-minimal/demo-minimal.component';
import { DemoInitiallyActiveComponent } from './demo-initially-active/demo-initially-active.component';
import { DemoPillsComponent } from './demo-pills/demo-pills.component';

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    NgxStrapTabsModule
  ],
  declarations: [
    TabsRouteComponent,
    DemoMinimalComponent,
    DemoInitiallyActiveComponent,
    DemoPillsComponent
  ]
})
export class TabsModule { }
