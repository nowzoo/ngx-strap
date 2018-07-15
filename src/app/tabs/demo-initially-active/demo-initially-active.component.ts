import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-initially-active',
  templateUrl: './demo-initially-active.component.html',
  styleUrls: ['./demo-initially-active.component.scss']
})
export class DemoInitiallyActiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('tabs-' + Math.random().toString().replace(/0\./, '') + new Date().getTime());
  }

}
