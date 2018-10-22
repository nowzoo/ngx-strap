import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tooltip-dynamic-string-demo',
  templateUrl: './tooltip-dynamic-string-demo.component.html',
  styleUrls: ['./tooltip-dynamic-string-demo.component.css']
})
export class TooltipDynamicStringDemoComponent implements OnInit, OnDestroy {

  time: string;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.getTime();
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getTime() {
    const d = new Date();
    this.time = d.toLocaleTimeString();
  }
}
