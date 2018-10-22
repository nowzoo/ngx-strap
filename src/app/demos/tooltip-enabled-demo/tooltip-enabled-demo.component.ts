import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-enabled-demo',
  templateUrl: './tooltip-enabled-demo.component.html',
  styleUrls: ['./tooltip-enabled-demo.component.css']
})
export class TooltipEnabledDemoComponent implements OnInit {

  tooltipEnabled = true;
  constructor() { }

  ngOnInit() {
  }

}
