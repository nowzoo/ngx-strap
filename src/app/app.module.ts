import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxMdModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { ModalModule } from '@nowzoo/ngx-strap';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

const routes: Routes = [
  {path: 'modals', loadChildren: './modals/modals.module#ModalsModule'},
  {path: '', loadChildren: './home/home.module#HomeModule'}
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxMdModule.forRoot(),
    NgxHighlightJsModule.forRoot(),
    RouterModule.forRoot(routes),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
