import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLibraryStarterModule } from '@nowzoo/ngx-library-starter';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxLibraryStarterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
