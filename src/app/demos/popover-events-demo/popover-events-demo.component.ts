import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-events-demo',
  templateUrl: './popover-events-demo.component.html',
  styleUrls: ['./popover-events-demo.component.css']
})
export class PopoverEventsDemoComponent implements OnInit {

  events: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onPopoverEvent(event: Event) {
    this.events.push(event.type);
  }

}
