# Modals

Use the `ngxStrapModal` directive within `<ng-template>` to create Bootstrap modals.

## Quick Start

Import the `NgxStrapModalModule` module into your module.
```ts
import { NgxStrapModalModule } from '@nowzoo/ngx-strap';
// etc...
@NgModule({
  imports: [
    NgxStrapModalModule,
    // etc...
  ],
})
export class MyModule { }
```

In your component template, create an `ng-template` with `ngxStrapModal` directive.

```html
<ng-template ngxStrapModal #modal="ngxStrapModal">
  <div class="modal fade" [attr.id]="modalId"
    tabindex="-1" role="dialog"
    [attr.aria-labelledby]="modalId + 'label'" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" [attr.id]="modalId + 'label'">My Modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>I'm a modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>
```
Note that the complete Bootstrap modal markup is contained within the template. This means you can (and must) control animation, size and other modal options via the native Bootstrap CSS classes and `data-` attributes. The directive has no options.

Also note that `#modal="ngxStrapModal"` gives you access to the modal directive's properties and methods. You can interact with the modal in the template...

```html
<button (click)="modal.show()"
  type="button" class="btn btn-primary">Show Modal</button>
```
...or from within your component code...
```ts
export class MyComponent {
  @ViewChild('modal') modal: ModalDirective;
  events: string[] = [];
  showModal() {
    const instance = this.modal.show();
    this.events = [];
    instance.events.subscribe(e => this.events.push(e.type));
  }
}
```

## API

### Interface: `INgxStrapModalInstance`
Returned by the directive's `show()` method.

- `events: EventEmitter<Event>` The native Bootstrap modal events.
- `shown: Promise<void>` Resolves when the modal has been completely shown.
- `hidden: Promise<void>` Resolves when the modal has been completely hidden.
- `hide: () => void` Hides the modal programmatically.
- `handleUpdate: () => void` Call `handleUpdate` on the native Bootstrap modal. Use this when the height of the modal's content changes, to avoid the appearance of scrollbars.

### `NgxStrapModalDirective`

selector: `[ngxStrapModal]`  
exportAs: `ngxStrapModal`

#### Methods
- `show(): INgxStrapModalInstance`
