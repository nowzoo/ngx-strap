import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from '../../modules/modal/modal.directive';
@Component({
  selector: 'app-modals-promises-demo',
  templateUrl: './modals-promises-demo.component.html',
  styleUrls: ['./modals-promises-demo.component.scss']
})
export class ModalsPromisesDemoComponent implements OnInit {
  @ViewChild('modalForm') modalForm: ModalDirective;
  fg: FormGroup;
  status = 'You have not yet opened the modal form.';
  saved = false;
  ngOnInit() {
    this.fg = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }
  show() {
    this.saved = false;
    this.status = 'You\'re opening the form.';
    this.fg.setValue({name: ''});
    const promises = this.modalForm.show();
    promises.shown
      .then(() => {
        this.status = 'You\'ve opened the form.';
        this.modalForm.el.querySelector('input').focus();
      });
    promises.hidden
      .then(() => {
        if (this.saved) {
          this.status = `Welcome, ${this.fg.value.name}! You've saved the form data.`;
        } else {
          this.status = 'You cancelled out of the modal form.';
        }
      });
  }
  save() {
    this.saved = true;
    this.modalForm.hide();
  }
}
