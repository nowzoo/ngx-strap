import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tooltip-template-demo',
  templateUrl: './tooltip-template-demo.component.html',
  styleUrls: ['./tooltip-template-demo.component.css']
})
export class TooltipTemplateDemoComponent implements OnInit, OnDestroy {
  time: string;
  interval: any;
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
