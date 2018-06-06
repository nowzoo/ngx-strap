import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-library-starter';
  foo = 0;
  constructor() {
    setInterval(() => this.foo++, 1000);
  }
}
