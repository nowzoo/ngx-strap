import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modals-basic-demo',
  templateUrl: './modals-basic-demo.component.html',
  styleUrls: ['./modals-basic-demo.component.scss']
})
export class ModalsBasicDemoComponent implements OnInit, OnDestroy {

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
