import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgxStrapModalDirective } from '@nowzoo/ngx-strap';

@Component({
  selector: 'app-demo-show-hide',
  templateUrl: './demo-show-hide.component.html',
  styleUrls: ['./demo-show-hide.component.scss']
})
export class DemoShowHideComponent implements OnInit {
  @ViewChild('modal') modal: NgxStrapModalDirective;
  @ViewChild('inputToFocus') inputToFocus: ElementRef;
  modalId = 'modal-hide-demo';
  inputId = 'modal-hide-demo-input';
  title = 'IModalInstance.hide()';
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
    this.modal.show();
    this.result = null;
    this.error = false;
    // When the modal is completely shown, focus the input....
    this.modal.shown.then(() => {
      (document.querySelector('#' + this.inputId) as HTMLElement).focus();
    });
    // When the modal has been hidden, check to see whether the
    // form has set result to 'success'. See submit(), below.
    // If not, set result to 'canceled'...
    this.modal.hidden
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
      this.modal.hide();
    }
  }

}
