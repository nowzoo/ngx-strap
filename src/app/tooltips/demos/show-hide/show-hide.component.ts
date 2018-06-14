import { Component, OnInit, ViewChild } from '@angular/core';
import { TooltipDirective } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.scss']
})
export class ShowHideComponent implements OnInit {
  @ViewChild('tooltipped') tooltipped: TooltipDirective;
  promiseMessage: string = null;
  constructor() { }

  ngOnInit() {
  }

  setPromiseMessage(msg: string) {

  }

  showFromComponent() {
    this.promiseMessage = 'showing...';
    this.tooltipped.show()
      .then(() => {
        this.promiseMessage = 'The show() promise resolved.';
      });
  }
  hideFromComponent() {
    this.promiseMessage = 'Hiding...';
    this.tooltipped.hide()
      .then(() => {
        this.promiseMessage = 'The hide() promise resolved.';
      });
  }

  toggleFromComponent() {
    this.promiseMessage = 'Toggling...';
    this.tooltipped.toggle()
      .then(() => {
        this.promiseMessage = 'The toggle() promise resolved.';
      });
  }



}
