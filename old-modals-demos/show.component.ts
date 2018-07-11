import { Component, ViewChild } from '@angular/core';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-show',
  template: `
  <ng-template ngxStrapModal #modal="ngxStrapModal">
    <div class="modal fade" [attr.id]="modalId"
      tabindex="-1" role="dialog"
      [attr.aria-labelledby]="modalId + 'label'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" [attr.id]="modalId + 'label'">{{title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <pre>{{props}}</pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  <button type="button" class="btn btn-primary" (click)="showModal()">Show Modal</button>
  `,
  styles: []
})
export class ShowComponent {
  @ViewChild('modal') modal: ModalDirective;
  modalId = 'modal-show-demo';
  title = 'show() returns IModalInstance';
  props = `export interface IModalInstance {
  events: EventEmitter<Event>;
  shown: Promise<void>;
  hidden: Promise<void>;
  hide: () => void;
  handleUpdate: () => void;
}`;
  constructor() { }

  showModal() {
    const instance = this.modal.show();
  }


}
