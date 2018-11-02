```html
<ng-template ngxStrapModal #myModal="ngxStrapModal">
  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
    aria-labelledby="exampleModal1Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModal1Label">Hello {{ name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Hello there. It's {{time}}.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>
<button type="button"
  class="btn btn-primary"
  (click)="myModal.show()">
  Open Modal
</button>
```
