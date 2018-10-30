import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-modal-promises-demo',
  templateUrl: './modal-promises-demo.component.html',
  styleUrls: ['./modal-promises-demo.component.css']
})
export class ModalPromisesDemoComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;

  resolvedPromises: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    const modalPromises = this.modal.show();
    modalPromises.shown.then(() => this.resolvedPromises.push('shown'));
    modalPromises.hidden.then(() => this.resolvedPromises.push('hidden'));
  }

}
