import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStrapPopupModule } from '@nowzoo/ngx-strap';
import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsRouteComponent } from './popups-route/popups-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';
import { MinimalComponent } from './demos/minimal/minimal.component';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    NgxStrapPopupModule,
    NgxHighlightJsModule,
    PopupsRoutingModule
  ],
  declarations: [PopupsRouteComponent, AnotherRouteComponent, MinimalComponent]
})
export class PopupsModule { }
