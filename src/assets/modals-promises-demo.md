```typescript
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
```


```html
<ng-template ngxStrapModal #modalForm="ngxStrapModal">
  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
    aria-labelledby="exampleModal1Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form [formGroup]="fg" (ngSubmit)="save()">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModal1Label">Enter Your Name</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text"
              formControlName="name"
              class="form-control">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="fg.invalid">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</ng-template>
<button type="button"
  class="btn btn-primary"
  (click)="show()">
  Enter Your Name...
</button>
<p class="mb-0">
  Status: {{ status }}
</p>
```
