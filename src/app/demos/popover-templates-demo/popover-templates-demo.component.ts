import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popover-templates-demo',
  templateUrl: './popover-templates-demo.component.html',
  styleUrls: ['./popover-templates-demo.component.css']
})
export class PopoverTemplatesDemoComponent implements OnInit, OnDestroy {

  time: string;
  popoverOpenFor = 0;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.getTime();
    this.interval = setInterval(() => {
      this.getTime();
      this.popoverOpenFor ++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getTime() {
    const d = new Date();
    this.time = d.toLocaleTimeString();
  }

  onPopoverEvent(event: Event) {
    switch (event.type) {
      case 'show':
        this.popoverOpenFor = 0;
        break;
    }
  }

}
