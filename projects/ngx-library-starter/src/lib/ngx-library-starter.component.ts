import { Component, OnInit } from '@angular/core';
import { NgxLibraryStarterService } from './ngx-library-starter.service';

@Component({
  selector: 'ngx-library-starter',
  template: `
    <p>
      ngx-library-starter works!
      Hello, {{service.hello}}.
    </p>
  `,
  styles: []
})
export class NgxLibraryStarterComponent implements OnInit {

  constructor(public service: NgxLibraryStarterService) { }

  ngOnInit() {
  }

}
