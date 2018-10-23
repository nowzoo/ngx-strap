import { Component } from '@angular/core';
import { ModalService } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-modal-minimal-demo',
  templateUrl: './modal-minimal-demo.component.html',
  styleUrls: ['./modal-minimal-demo.component.css']
})
export class ModalMinimalDemoComponent {
  constructor(
    public modalService: ModalService
  ) { }
}
