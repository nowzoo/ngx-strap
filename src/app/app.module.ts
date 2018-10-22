import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PopupModule, ModalModule } from '@nowzoo/ngx-strap';
import { AppComponent } from './app.component';
import { TooltipMinimalDemoComponent } from './demos/tooltip-minimal-demo/tooltip-minimal-demo.component';
import { TooltipDynamicStringDemoComponent } from './demos/tooltip-dynamic-string-demo/tooltip-dynamic-string-demo.component';
import { TooltipTemplateDemoComponent } from './demos/tooltip-template-demo/tooltip-template-demo.component';
import { TooltipDelayDemoComponent } from './demos/tooltip-delay-demo/tooltip-delay-demo.component';
import {
  TooltipDismissOnClickOutsideDemoComponent
} from './demos/tooltip-dismiss-on-click-outside-demo/tooltip-dismiss-on-click-outside-demo.component';
import { TooltipEventsDemoComponent } from './demos/tooltip-events-demo/tooltip-events-demo.component';
import { TooltipShowHideToggleDemoComponent } from './demos/tooltip-show-hide-toggle-demo/tooltip-show-hide-toggle-demo.component';
import { TooltipEnabledDemoComponent } from './demos/tooltip-enabled-demo/tooltip-enabled-demo.component';
import { PopoverMinimalDemoComponent } from './demos/popover-minimal-demo/popover-minimal-demo.component';
import { PopoverDynamicStringsDemoComponent } from './demos/popover-dynamic-strings-demo/popover-dynamic-strings-demo.component';
import { PopoverTemplatesDemoComponent } from './demos/popover-templates-demo/popover-templates-demo.component';
import { PopoverDelayDemoComponent } from './demos/popover-delay-demo/popover-delay-demo.component';
import { PopoverDismissDemoComponent } from './demos/popover-dismiss-demo/popover-dismiss-demo.component';
import { PopoverEventsDemoComponent } from './demos/popover-events-demo/popover-events-demo.component';
import { PopoverShowHideToggleDemoComponent } from './demos/popover-show-hide-toggle-demo/popover-show-hide-toggle-demo.component';
import { PopoverEnabledDemoComponent } from './demos/popover-enabled-demo/popover-enabled-demo.component';
import { IndexComponent } from './index/index.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ModalsComponent } from './modals/modals.component';

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
    TooltipDelayDemoComponent,
    TooltipDismissOnClickOutsideDemoComponent,
    TooltipEventsDemoComponent,
    TooltipShowHideToggleDemoComponent,
    TooltipEnabledDemoComponent,
    PopoverMinimalDemoComponent,
    PopoverDynamicStringsDemoComponent,
    PopoverTemplatesDemoComponent,
    PopoverDelayDemoComponent,
    PopoverDismissDemoComponent,
    PopoverEventsDemoComponent,
    PopoverShowHideToggleDemoComponent,
    PopoverEnabledDemoComponent,
    IndexComponent,
    PopoversComponent,
    TooltipsComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    PopupModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
