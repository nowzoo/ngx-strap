import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-events-demo',
  templateUrl: './collapse-events-demo.component.html',
  styleUrls: ['./collapse-events-demo.component.scss']
})
export class CollapseEventsDemoComponent {
  collapseEvents: string[] = [];
  open = false;
}
