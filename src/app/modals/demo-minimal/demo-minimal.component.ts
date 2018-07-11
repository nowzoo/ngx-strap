import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-demo-minimal',
  templateUrl: './demo-minimal.component.html',
  styleUrls: ['./demo-minimal.component.scss']
})
export class DemoMinimalComponent {
  modalId = 'app-demo-minimal';
  title = 'Minimal Demo';
  message = `I'm a modal.`;
}
