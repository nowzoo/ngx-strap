import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@nowzoo/ngx-strap';
import { SharedModule } from '../shared/shared.module';

import { TooltipsRoutingModule } from './tooltips-routing.module';
import { TooltipsRouteComponent } from './tooltips-route/tooltips-route.component';
import { AnotherRouteComponent } from './another-route/another-route.component';
import { StringComponent } from './demos/string/string.component';
import { TitleComponent } from './demos/title/title.component';
import { TemplateComponent } from './demos/template/template.component';
import { ShowHideComponent } from './demos/show-hide/show-hide.component';
import { DisableEnableComponent } from './demos/disable-enable/disable-enable.component';
import { GoAwayComponent } from './demos/go-away/go-away.component';
import { DefaultOptionsComponent } from './demos/default-options/default-options.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    TooltipsRoutingModule,
    SharedModule,
  ],
  declarations: [
    TooltipsRouteComponent, AnotherRouteComponent,
    StringComponent, TitleComponent,
    TemplateComponent, ShowHideComponent,
    DisableEnableComponent, GoAwayComponent, DefaultOptionsComponent]
})
export class TooltipsModule { }
