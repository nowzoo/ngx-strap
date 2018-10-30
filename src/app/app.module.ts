import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ModalModule } from '@nowzoo/ngx-strap';
import { CollapseModule } from './mod/collapse/collapse.module';
import { TabsModule } from './mod/tabs/tabs.module';
import { AccordianModule } from './accordian/accordian.module';
import { PopupModule, } from './popup/popup.module';
import { DropdownModule, } from './mod/dropdown/dropdown.module';

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
import { ModalEventsDemoComponent } from './demos/modal-events-demo/modal-events-demo.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CollapseMinimalDemoComponent } from './collapse/collapse-minimal-demo/collapse-minimal-demo.component';


import { ListGroupAccordianComponent } from './list-group-accordian/list-group-accordian.component';
import { ModalPromisesDemoComponent } from './demos/modal-promises-demo/modal-promises-demo.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsListGroupDemoComponent } from './tabs/demos/tabs-list-group-demo/tabs-list-group-demo.component';
import { TabsMinimalDemoComponent } from './tabs/demos/tabs-minimal-demo/tabs-minimal-demo.component';
import { TabsPillsDemoComponent } from './tabs/demos/tabs-pills-demo/tabs-pills-demo.component';
import { TabsPlainDemoComponent } from './tabs/demos/tabs-plain-demo/tabs-plain-demo.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DropdownBasicDemoComponent } from './dropdowns/dropdown-basic-demo/dropdown-basic-demo.component';
import { DropdownEventsDemoComponent } from './dropdowns/dropdown-events-demo/dropdown-events-demo.component';
import { CollapseEventsDemoComponent } from './collapse/collapse-events-demo/collapse-events-demo.component';

const routes: Routes = [
  {path: 'dropdowns', component: DropdownsComponent},
  {path: 'modals', component: ModalsComponent},
  {path: 'tooltips', component: TooltipsComponent},
  {path: 'popovers', component: PopoversComponent},
  {path: 'collapse', component: CollapseComponent},
  {path: 'tabs', component: TabsComponent},
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
    ModalEventsDemoComponent,
    CollapseComponent,
    CollapseMinimalDemoComponent,

    ListGroupAccordianComponent,

    ModalPromisesDemoComponent,

    TabsComponent,

    TabsListGroupDemoComponent,

    TabsMinimalDemoComponent,

    TabsPillsDemoComponent,
    TabsPlainDemoComponent,
    DropdownsComponent,
    DropdownBasicDemoComponent,
    DropdownEventsDemoComponent,
    CollapseEventsDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PopupModule,
    ModalModule,
    CollapseModule,
    TabsModule,
    DropdownModule,
    AccordianModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
