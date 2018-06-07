import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-promises',
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
            <p>{{message}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </ng-template>


  <button type="button" class="btn btn-primary" (click)="showModal()">Show Modal</button>
  <br>
  <small class="text-muted">{{message}}</small>
  `,
  styles: []
})
export class PromisesComponent {
  @ViewChild('modal') modal: ModalDirective;
  title = 'Promises, promises';
  message = 'Not yet shown.';
  constructor() { }

  showModal() {
    const instance: IModalInstance = this.modal.show();
    instance.shown.then(() => this.message = 'Shown.');
    instance.hidden.then(() => this.message = 'Hidden.');
  }


}
