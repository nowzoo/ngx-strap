import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popups-dynamic-demo',
  templateUrl: './popups-dynamic-demo.component.html',
  styleUrls: ['./popups-dynamic-demo.component.scss']
})
export class PopupsDynamicDemoComponent implements OnInit, OnDestroy {

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
