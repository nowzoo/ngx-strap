import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModalModule } from '@nowzoo/ngx-strap';

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
    RouterModule.forRoot(routes),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
