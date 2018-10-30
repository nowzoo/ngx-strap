import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ModalModule } from '@nowzoo/ngx-strap';
import { CollapseModule } from './mod/collapse/collapse.module';

import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { ModalsComponent } from './modals/modals.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CollapseMinimalDemoComponent } from './collapse/collapse-minimal-demo/collapse-minimal-demo.component';



import { CollapseEventsDemoComponent } from './collapse/collapse-events-demo/collapse-events-demo.component';

const routes: Routes = [
  {path: 'modals', component: ModalsComponent},
  {path: 'collapse', component: CollapseComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModalsComponent,
    CollapseComponent,
    CollapseMinimalDemoComponent,
    CollapseEventsDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    CollapseModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
