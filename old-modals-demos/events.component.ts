import { Component, ViewChild } from '@angular/core';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-events',
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
            Events thus far: {{events | json}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  <button type="button" class="btn btn-primary" (click)="showModal()">Show Modal</button>
  <small class="text-muted d-inline-block ml-1">Events thus far: {{events | json}}</small>
  `
})
export class EventsComponent {

  @ViewChild('modal') modal: ModalDirective;
  modalId = 'modal-events-demo';
  title = 'IModalInstance.events';

  events: string[] = [];
  constructor() { }

  showModal() {
    const instance = this.modal.show();
    this.events = [];
    instance.events.subscribe(e => this.events.push(e.type));
  }

}
