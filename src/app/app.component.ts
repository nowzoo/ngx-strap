import { Component } from '@angular/core';
import { NgxLibraryStarterService } from '@nowzoo/ngx-library-starter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-library-starter';
  constructor(private servive: NgxLibraryStarterService) {}
}
