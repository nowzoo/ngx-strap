import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popups-template-demo',
  templateUrl: './popups-template-demo.component.html',
  styleUrls: ['./popups-template-demo.component.scss']
})
export class PopupsTemplateDemoComponent implements OnInit, OnDestroy {
  interval: any = null;
  time: string;
  name = 'Milo the Dog';
  ngOnInit() {
    this.time = new Date().toLocaleTimeString();
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
