import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PopupModule, ModalModule } from '@nowzoo/ngx-strap';
import { AppComponent } from './app.component';
import { TooltipMinimalDemoComponent } from './demos/tooltip-minimal-demo/tooltip-minimal-demo.component';
import { TooltipDynamicStringDemoComponent } from './demos/tooltip-dynamic-string-demo/tooltip-dynamic-string-demo.component';
import { TooltipTemplateDemoComponent } from './demos/tooltip-template-demo/tooltip-template-demo.component';

import { TooltipEventsDemoComponent } from './demos/tooltip-events-demo/tooltip-events-demo.component';
import { TooltipShowHideToggleDemoComponent } from './demos/tooltip-show-hide-toggle-demo/tooltip-show-hide-toggle-demo.component';
import { TooltipEnabledDemoComponent } from './demos/tooltip-enabled-demo/tooltip-enabled-demo.component';
import { PopoverMinimalDemoComponent } from './demos/popover-minimal-demo/popover-minimal-demo.component';
import { PopoverDynamicStringsDemoComponent } from './demos/popover-dynamic-strings-demo/popover-dynamic-strings-demo.component';
import { PopoverTemplatesDemoComponent } from './demos/popover-templates-demo/popover-templates-demo.component';
import { PopoverEventsDemoComponent } from './demos/popover-events-demo/popover-events-demo.component';
import { PopoverShowHideToggleDemoComponent } from './demos/popover-show-hide-toggle-demo/popover-show-hide-toggle-demo.component';
import { PopoverEnabledDemoComponent } from './demos/popover-enabled-demo/popover-enabled-demo.component';
import { IndexComponent } from './index/index.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ModalsComponent } from './modals/modals.component';
import { TooltipDismissDemoComponent } from './demos/tooltip-dismiss-demo/tooltip-dismiss-demo.component';
import { PopoverDismissDemoComponent } from './demos/popover-dismiss-demo/popover-dismiss-demo.component';
import { ModalMinimalDemoComponent } from './demos/modal-minimal-demo/modal-minimal-demo.component';

const routes: Routes = [
  {path: 'modals', component: ModalsComponent},
  {path: 'tooltips', component: TooltipsComponent},
  {path: 'popovers', component: PopoversComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TooltipMinimalDemoComponent,
    TooltipDynamicStringDemoComponent,
    TooltipTemplateDemoComponent,
    TooltipEventsDemoComponent,
    TooltipShowHideToggleDemoComponent,
    TooltipEnabledDemoComponent,

    IndexComponent,

    TooltipsComponent,
    ModalsComponent,
    TooltipDismissDemoComponent,

    PopoversComponent,
    PopoverDismissDemoComponent,
    PopoverMinimalDemoComponent,
    PopoverDynamicStringsDemoComponent,
    PopoverTemplatesDemoComponent,
    PopoverEventsDemoComponent,
    PopoverShowHideToggleDemoComponent,
    PopoverEnabledDemoComponent,
    ModalMinimalDemoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PopupModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
