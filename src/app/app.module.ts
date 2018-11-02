import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { ModalModule, PopupModule, CollapseModule } from '@nowzoo/ngx-strap';

import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { ModalsComponent } from './modals/modals.component';
import { PopupsComponent } from './popups/popups.component';
import { CollapseComponent } from './collapse/collapse.component';


import { CollapseMinimalDemoComponent } from './collapse/collapse-minimal-demo/collapse-minimal-demo.component';
import { CollapseEventsDemoComponent } from './collapse/collapse-events-demo/collapse-events-demo.component';
import { PopupsBasicDemoComponent } from './popups/popups-basic-demo/popups-basic-demo.component';
import { PopupsTemplateDemoComponent } from './popups/popups-template-demo/popups-template-demo.component';
import { PopupsDynamicDemoComponent } from './popups/popups-dynamic-demo/popups-dynamic-demo.component';
import { PopupsEnabledDemoComponent } from './popups/popups-enabled-demo/popups-enabled-demo.component';
import { PopupsDismissDemoComponent } from './popups/popups-dismiss-demo/popups-dismiss-demo.component';
import { PopupsEventsDemoComponent } from './popups/popups-events-demo/popups-events-demo.component';
import { PopupsOptionsDemoComponent } from './popups/popups-options-demo/popups-options-demo.component';
import { PopupsShowDemoComponent } from './popups/popups-show-demo/popups-show-demo.component';
import { ModalsBasicDemoComponent } from './modals/modals-basic-demo/modals-basic-demo.component';
import { ModalsOptionsDemoComponent } from './modals/modals-options-demo/modals-options-demo.component';
import { ModalsPromisesDemoComponent } from './modals/modals-promises-demo/modals-promises-demo.component';

const routes: Routes = [
  {path: 'modals', component: ModalsComponent},
  {path: 'collapse', component: CollapseComponent},
  {path: 'popups', component: PopupsComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModalsComponent,
    PopupsComponent,
    CollapseComponent,
    CollapseMinimalDemoComponent,
    CollapseEventsDemoComponent,
    PopupsBasicDemoComponent,
    PopupsTemplateDemoComponent,
    PopupsDynamicDemoComponent,
    PopupsEnabledDemoComponent,
    PopupsDismissDemoComponent,
    PopupsEventsDemoComponent,
    PopupsOptionsDemoComponent,
    PopupsShowDemoComponent,
    ModalsBasicDemoComponent,
    ModalsOptionsDemoComponent,
    ModalsPromisesDemoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    PopupModule,
    CollapseModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
