import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-modal-minimal-demo',
  templateUrl: './modal-minimal-demo.component.html',
  styleUrls: ['./modal-minimal-demo.component.css']
})
export class ModalMinimalDemoComponent implements OnInit, OnDestroy {

  time: string;
  modalOpenFor = 0;
  interval: any;

  constructor(
  ) { }

  ngOnInit() {
    this.getTime();
    this.interval = setInterval(() => {
      this.getTime();
      this.modalOpenFor ++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getTime() {
    const d = new Date();
    this.time = d.toLocaleTimeString();
  }

  onModalEvent(event: Event) {
    switch (event.type) {
      case 'show':
        this.modalOpenFor = 0;
        break;
    }
  }
}
