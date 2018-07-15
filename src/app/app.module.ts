import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgxHighlightJsModule , NgxHighlightJsOptions} from '@nowzoo/ngx-highlight-js';

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
    NgxHighlightJsModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
