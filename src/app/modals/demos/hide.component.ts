import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ModalDirective, IModalInstance } from '@nowzoo/ngx-strap';
@Component({
  selector: 'app-hide',
  template: `
  <ng-template ngxStrapModal #modal="ngxStrapModal">
    <div class="modal fade" [attr.id]="modalId"
      tabindex="-1" role="dialog"
      [attr.aria-labelledby]="modalId + 'label'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <form [formGroup]="fg" (ngSubmit)="submit()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" [attr.id]="modalId + 'label'">{{title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label [attr.for]="inputId">What is 2 plus 2?</label>
                <input [attr.id]="inputId"
                  type="number" formControlName="answer" class="form-control">
              </div>
              <div *ngIf="error" class="alert alert-danger">Nope! That's not it. Try a number between 3 and 5.</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light"
                data-dismiss="modal">Dunno</button>
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </ng-template>
  <button type="button" class="btn btn-primary" (click)="showModal()">Show Modal</button>
  <small class="text-muted d-inline-block ml-1">Result: {{result}}</small>
  `,
  styles: []
})
export class HideComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @ViewChild('inputToFocus') inputToFocus: ElementRef;
  modalId = 'modal-hide-demo';
  inputId = 'modal-hide-demo-input';
  title = 'IModalInstance.hide()';
  modalInstance: IModalInstance;
  fg: FormGroup;
  result: 'success' | 'canceled' = null;
  error = false;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      answer: [22]
    });
    this.fg.valueChanges.subscribe(() => this.error = false);
  }

  showModal() {
    this.modalInstance = this.modal.show();
    this.result = null;
    this.error = false;
    // When the modal is completely shown, focus the input....
    this.modalInstance.shown.then(() => {
      (document.querySelector('#' + this.inputId) as HTMLElement).focus();
    });
    // When the modal has been hidden, check to see whether the
    // form has set result to 'success'. See submit(), below.
    // If not, set result to 'canceled'...
    this.modalInstance.hidden
      .then(() => {
        if (this.result !== 'success') {
          this.result = 'canceled';
        }
      });
  }

  submit() {
    this.error = this.fg.get('answer').value !== 4;
    if (! this.error) {
      this.result = 'success';
      this.modalInstance.hide();
    }
  }

}
