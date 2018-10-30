import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { ModalModule } from './modules/modal/modal.module';
import { PopupModule } from './modules/popup/popup.module';
import { CollapseModule } from './modules/collapse/collapse.module';

import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { ModalsComponent } from './modals/modals.component';
import { PopupsComponent } from './popups/popups.component';
import { CollapseComponent } from './collapse/collapse.component';


import { CollapseMinimalDemoComponent } from './collapse/collapse-minimal-demo/collapse-minimal-demo.component';
import { CollapseEventsDemoComponent } from './collapse/collapse-events-demo/collapse-events-demo.component';

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
  ],
  imports: [
    BrowserModule,
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
