import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-enabled-demo',
  templateUrl: './popover-enabled-demo.component.html',
  styleUrls: ['./popover-enabled-demo.component.css']
})
export class PopoverEnabledDemoComponent implements OnInit {

  popoverEnabled = true;
  constructor() { }

  ngOnInit() {
  }

}
