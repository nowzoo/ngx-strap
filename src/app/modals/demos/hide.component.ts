import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-hide',
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
            <label>
              <input [formControl]="fc" type="checkbox">
              I know what I'm doing. Go ahead and close the modal.
            </label>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-success" (click)="submit()">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  <button type="button" class="btn btn-primary" (click)="showModal()">Show Modal</button>
  `,
  styles: []
})
export class HideComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  modalId = 'modal-show-demo';
  title = 'IModalInstance.hide()';
  fc: FormControl;
  modalInstance: IModalInstance;
  constructor() { }

  ngOnInit() {
    this.fc = new FormControl(false);
  }

  showModal() {
    this.modalInstance = this.modal.show();
    this.fc.setValue(false);
  }

  submit() {
    if (this.fc.value === true) {
      this.modalInstance.hide();
    }
  }

}
