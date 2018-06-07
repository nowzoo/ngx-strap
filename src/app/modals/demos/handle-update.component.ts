import { Component, ViewChild} from '@angular/core';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';

@Component({
  selector: 'app-handle-update',
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
              <p>
                <button type="button" class="btn btn-secondary" (click)="toggleContent()">
                  <span *ngIf="isShort">Set Modal Content Way Longer</span>
                  <span *ngIf="!isShort">Set Modal Content Way Shorter</span>
                </button>
              </p>
              <p>
                {{ isShort ? short : long }}
              </p>
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
export class HandleUpdateComponent {
  @ViewChild('modal') modal: ModalDirective;

  modalId = 'modal-handleUpdate-demo';
  title = 'handleUpdate';
  modalInstance: IModalInstance;

  long = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum. `;
  short = `A short message.`;
  isShort = true;
  constructor() { }

  showModal() {
    this.modalInstance = this.modal.show();
  }

  toggleContent() {
    this.isShort = ! this.isShort;
    setTimeout(() => this.modalInstance.handleUpdate());
  }

}
