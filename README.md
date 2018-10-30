# ngx-strap

Angular directives for Bootstrap. Unlike other Angular/Bootstrap libraries, `ngx-strap` leverages native Bootstrap javascript and css rather than recreating Bootstrap from scratch "the Angular way."

This means the library depends on `bootstrap.js` and its dependencies. If the statement `declare const jQuery: any` gives you agita, you should probably look elsewhere.

The library focuses on those Bootstrap components that cannot be easily implemented using plain markup, or where there's a clear case for exposing Bootstrap's logic and events to Angular.

The library does not create extra markup, styles or animations, relying instead on Bootstrap. The library provides directives rather than components. *(One exception: the tooltip and popover directives use a component internally to display dynamic templates. You should not have to worry about it, though.)*

#### What's Included

**Modals**
There's a clear, recurring case for listening to the modal open and close events, e.g. to automatically focus a form field on open or to collect form values on close. See the `ngxStrapModal` directive.

**Tooltips and Popovers** These cannot be automatically instantiated via markup (they're "opt-in" in Bootstrap terms,) and it's a pain to insert dynamic HTML content. The library provides the `ngxStrapPopover` and `ngxStrapPopover` directives. These directives enable you to set popup title and content with plain or dynamic strings, or templates.

**Collapse** Bootstrap's implementation of collapse ties the collapse element's visibility to a button or link that toggles it. The library provides a simple directive that shows or hides an element, based on a boolean, without reference to any other element. See `ngxStrapCollapse`.

#### What's Not Included

- Things like tabs, dropdowns and "toggled" collapse that can easily be implemented with plain Bootstrap markup.
- Things like datepickers, timepickers, colorpickers, typeaheads. These belong elsewhere.

[Demo Site](https://nowzoo.github.io/ngx-strap/)


## Installation

Install the library and its dependencies (jQuery, popper.js and bootstrap).

```bash
npm i --save @nowzoo/ngx-strap jquery popper.js bootstrap
```
Include Bootstrap and its dependencies in your build.
The best way to do this is to add the scripts and css in `angular.json`.

```json
// angular.json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

See below for how to import the individual modules.

## Usage
### Modals

Import the `ModalModule`. This module exports the `ngxStrapModal` directive.

```typescript
import { ModalModule } from '@nowzoo/ngx-strap';
@NgModule({
  imports: [
    ModalModule
  ]
})
export class MyModule { }
```

Create a modal by placing complete Bootstrap modal markup within an `ng-template`. The template tag should contain the `ngxStrapModal` selector. Note that the directive is exported as `ngxStrapModal`. In most cases you'll want to use this to grab a reference to the directive: `#myVar="ngxStrapModal"`.

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

#### `ModalDirective` API

- Selector: `[ngxStrapModal]`
- Export As: `ngxStrapModal`

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
- `events: EventEmitter<Event>` The native bootstrap [modal events](http://getbootstrap.com/docs/4.1/components/modal/#events).

**Methods**

- `show(): {shown: Promise<void>, hidden: Promise<void>}` Shows the modal. The `shown` and `hidden` promises resolve when the modal is completely shown or hidden (i.e. after the animation completes.)
- `hide(): <void>` Hides the modal.
- `update(): <void>` Use this when the height of the modal content changes. See the [Bootstrap docs](http://getbootstrap.com/docs/4.1/components/modal/#dynamic-heights).

### Tooltips and Popovers

Import the `PopupModule`. This module contains the `ngxStrapTooltip` and `ngxStrapPopover` directives.

```typescript
import { PopupModule } from '@nowzoo/ngx-strap';
@NgModule({
  imports: [
    PopupModule
  ]
})
export class MyModule { }
```

Create a tooltip. This can be as simple as:
```html
<button type="button"
  class="btn btn-primary"
  ngxStrapTooltip
  title="I'm a tooltip">
  Tooltip
</button>
```

Create a popover. Simple example:
```html
<button type="button"
  class="btn btn-primary"
  ngxStrapPopover
  title="Popover Title"
  data-content="Some fascinating content">
  Popover
</button>
```

Both tooltips and popovers can be populated with dynamic strings...

```html
<button type="button"
  class="btn btn-primary"
  ngxStrapTooltip
  [tooltipTitle]="'The time is ' + time">
  Tooltip
</button>
```
...or templates...
```html
<button type="button"
  class="btn btn-primary"
  ngxStrapPopover
  [popoverTitle]="myTitleTemplate"
  [popoverContent]="myContentTemplate">
  Popover with Templates
</button>
<ng-template #myTitleTemplate>
  <i class="fas fa-clock fa-fw"></i>
  {{time}}
</ng-template>
<ng-template #myContentTemplate>
  <i class="fas fa-spin fa-spinner fa-fw"></i>
  This popover has been open for {{popoverOpenFor}}s.
</ng-template>

```

#### Interface: `IPopupOptions`

An interface containing most of the Bootstrap toolitip/popover options (all except `title`, `content`, and `selector`.)

- `animation: boolean`
- `html: boolean`
- `delay: number | {show: number, hide: number}`
- `container: string | HTMLElement | false`
- `placement: string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string)``
- `template: string`
- `offset: number | string`
- `fallbackPlacement: string | string[]`
- `boundary: string | HTMLElement`

#### `TooltipDirective` API

- Selector: `[ngxStrapTooltip]`
- Export As: `ngxStrapTooltip`

**Inputs**
- `tooltipTitle: string | TemplateRef<any>`
Optional. Pass a string or a template for the tooltip title. If you don’t need a dynamic title use the `title` or `data-title` attribute.
- `tooltipEnabled: boolean` Optional. Default `true`. Enable/disable the tooltip.
- `tooltipDismissOnClickOutside: boolean` Optional. Use this to hide the tooltip when the user clicks or focuses anywhere outside the tooltip itself.
- `tooltipOptions: IPopupOptions` Optional. Note that in most cases you can use the native Bootstrap `data-` attributes instead. Also note that these options are not dynamic &mdash; they are set only once, when the directive is instantiated.

**Outputs**
- `events: EventEmitter<Event>` The native Bootstrap tooltip events.

**Methods**
- `show(): void` Show the tooltip manually.
- `hide(): void` Hide the tooltip manually.
- `toggle(): void` Toggle the visibility of the tooltip manually.


#### `PopoverDirective` API

- Selector: `[ngxStrapPopover]`
- Export As: `ngxStrapPopover`

**Inputs**
- `popoverTitle: string | TemplateRef<any>` Optional. Pass a string or a template for the popover title. If you don’t need a dynamic title use the `title` or `data-title` attribute.
- `popoverContent: string | TemplateRef<any>` Optional. Pass a string or a template for the popover content. If you don’t need dynamic content use or `data-content` attribute.
- `popoverEnabled: boolean` Optional. Default `true`. Enable/disable the popover.
- `popoverDismissOnClickOutside: boolean` Optional. Use this to hide the popover when the user clicks or focuses anywhere outside the popover itself.
- `popoverOptions: IPopupOptions` Optional. Note that in most cases you can use the native Bootstrap `data-` attributes instead. Also note that these options are not dynamic &mdash; they are set only once, when the directive is instantiated.

**Outputs**
- `events: EventEmitter<Event>` The native Bootstrap popover events.

**Methods**
- `show(): void` Show the popover manually.
- `hide(): void` Hide the popover manually.
- `toggle(): void` Toggle the visibility of the popover manually.

### Collapse

Import the `CollapseModule`. This module exports the `ngxStrapCollapse` directive.

```typescript
import { CollapseModule } from '@nowzoo/ngx-strap';
@NgModule({
  imports: [
    CollapseModule
  ]
})
export class MyModule { }
```

Create a collapse...
```typescript
export class CollapseDemoComponent {
  open = false;
}
```
```html
<button
  type="button"
  class="btn btn-primary"
  (click)="open=!open">Toggle</button>
<div class="card mt-2" [ngxStrapCollapse]="open" class="collapse">
  <div class="card-body">
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>
```


#### `CollapseDirective` API

- Selector: `[ngxStrapCollapse]`
- Export As: `ngxStrapCollapse`

**Inputs**
- `ngxStrapCollapse: boolean` Whether the collapse should be shown.

**Outputs**
- `events: EventEmitter<Event>` The native Bootstrap collapse events.


## Development

Contributions are welcome.

```bash
git clone git@github.com:nowzoo/ngx-strap.git
cd ngx-strap
npm i
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

The library files are located in `projects/ngx-strap`


Run `ng serve` for a dev server with a demo app. Navigate to `http://localhost:4200/`.


### Building the library

Run `ng build ngx-strap` to build the library after you change it. The dev server does not rebuild the library automatically.

### Running unit tests

Run `ng test ngx-strap` to execute the unit tests via [Karma](https://karma-runner.github.io).

The library is also set up to run tests using Wallaby using the config at `projects/ngx-strap/wallaby.js`

## License

[MIT](https://github.com/nowzoo/ngx-strap/blob/master/LICENSE)
