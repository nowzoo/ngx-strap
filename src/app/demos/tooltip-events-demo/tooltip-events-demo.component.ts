import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-events-demo',
  templateUrl: './tooltip-events-demo.component.html',
  styleUrls: ['./tooltip-events-demo.component.css']
})
export class TooltipEventsDemoComponent implements OnInit {

  events: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onTooltipEvent(event: Event) {
    this.events.push(event.type);
  }

}
