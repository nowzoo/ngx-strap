import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-route-change',
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
            Modals go away automatically and gracefully when the underlying directive is destroyed,
            for example, when a
            <a routerLink="/modals/another">link in the modal
            triggers a route change</a>.
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  <button type="button" class="btn btn-primary" (click)="modal.show()">Show Modal</button>
  `,
  styles: []
})
export class RouteChangeComponent  {
  modalId = 'modal-route-change-demo';
  title = 'Modals Go Away';
  constructor() { }

}
