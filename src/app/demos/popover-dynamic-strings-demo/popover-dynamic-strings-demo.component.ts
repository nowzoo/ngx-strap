import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popover-dynamic-strings-demo',
  templateUrl: './popover-dynamic-strings-demo.component.html',
  styleUrls: ['./popover-dynamic-strings-demo.component.css']
})
export class PopoverDynamicStringsDemoComponent implements OnInit, OnDestroy {

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
