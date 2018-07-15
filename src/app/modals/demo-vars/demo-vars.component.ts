import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-vars',
  templateUrl: './demo-vars.component.html',
  styleUrls: ['./demo-vars.component.scss']
})
export class DemoVarsComponent implements OnInit, OnDestroy {
  modalId = 'modal-route-change-demo';
  title = 'Modals Go Away';
  open = 0;
  in: any;
  constructor() { }

  ngOnInit() {
    this.in = setInterval(() => this.open++, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.in);
  }

}
