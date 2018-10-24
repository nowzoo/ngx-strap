import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-events-demo',
  templateUrl: './modal-events-demo.component.html',
  styleUrls: ['./modal-events-demo.component.css']
})
export class ModalEventsDemoComponent {
  events: string[] = [];
  onModalEvent(event: Event) {
    this.events.push(event.type);
  }

}
