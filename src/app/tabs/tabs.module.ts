import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxStrapTabsModule } from '@nowzoo/ngx-strap';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsRouteComponent } from './tabs-route/tabs-route.component';
import { MinimalComponent } from './demos/minimal/minimal.component';

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    NgxStrapTabsModule
  ],
  declarations: [TabsRouteComponent, MinimalComponent]
})
export class TabsModule { }
