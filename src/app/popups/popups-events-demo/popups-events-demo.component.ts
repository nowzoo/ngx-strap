import { Component } from '@angular/core';

@Component({
  selector: 'app-popups-events-demo',
  templateUrl: './popups-events-demo.component.html',
  styleUrls: ['./popups-events-demo.component.scss']
})
export class PopupsEventsDemoComponent {
  tooltipEvents: string[] = [];
  popoverEvents: string[] = [];
}
