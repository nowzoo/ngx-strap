import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-test-library',
  template: `
    <p>
      my-test-library works!
    </p>
  `,
  styles: []
})
export class MyTestLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
