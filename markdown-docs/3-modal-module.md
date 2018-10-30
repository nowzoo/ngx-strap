## ModalModule

Use the `ngxStrapModal` directive with an ng-template to create a Bootstrap modal.

Import the `ModalModule`...

```typescript
import { ModalModule } from '@nowzoo/ngx-strap';
@NgModule({
  imports: [
    ModalModule
  ]
})
export class MyModule { }
```

Create a modal by placing complete Bootstrap modal market within an `ng-template`. The template tag should contain the `ngxStrapModal` selector.

```html
<ng-template ngxStrapModal #myModal="ngxStrapModal">
  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
    aria-labelledby="exampleModal1Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModal1Label">Simple Modal</h5>
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

### Modal Directive API

Selector: `'[ngxStrapModal]'`

Export As: `'ngxStrapModal'`


**Inputs**

None. Bootstrap modal options are set in the markup you place inside the ng-template, via the native Bootstrap `data-` attributes and css classes.

- [Bootstrap modal options](http://getbootstrap.com/docs/4.1/components/modal/#options) (except `show`) can be set via <code>data-</code>
attributes in the top-level `<div class="modal>"` tag:
  - backdrop: `data-backdrop`
  - keyboard: `data-keyboard`
  - focus: `data-focus`
- [Animation](http://getbootstrap.com/docs/4.1/components/modal/#remove-animation) is controlled by adding or omitting the `fade` class in the top-level `<div class="modal>"` tag.
- [Modal size](http://getbootstrap.com/docs/4.1/components/modal/#optional-sizes) is controlled by adding the `modal-lg` or `modal-sm`
classes to the `<div class="modal-dialog">` tag.
- You can [center the dialog vertically](http://getbootstrap.com/docs/4.1/components/modal/#vertically-centered) in the viewport by adding the `modal-dialog-centered` class to the `<div class="modal-dialog">` tag.

**Outputs**
- `events: EventEmitter<Event>` The native bootstrap [modal events](http://getbootstrap.com/docs/4.1/components/modal/#events)

**Methods**

- `show(): {shown: Promise<void>, hidden: Promise<void>}` Shows the modal. The `shown` and `hidden` promises resolve when the modal is completely shown or hidden (i.e. after the animation completes.)
- `hide(): <void>` Hides the modal.
- `update(): <void>` Use this when the height of the modal content changes. See the [Bootstrap docs](http://getbootstrap.com/docs/4.1/components/modal/#dynamic-heights).
