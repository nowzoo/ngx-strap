## PopupModule (Tooltips and Popovers)

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

### Interface: `IPopupOptions`

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

### Tooltip Directive API

Selector: `'[ngxStrapTooltip]'`

Export As: `'ngxStrapTooltip'`

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


### Popover Directive API

Selector: `'[ngxStrapPopover]'`

Export As: `'ngxStrapPopover'`

**Inputs**
- `popoverTitle: string | TemplateRef<any>` Optional. Pass a string or a template for the popover title. If you don’t need a dynamic title use the `title` or `data-title` attribute.
- `popoverContent: string | TemplateRef<any>` Optional. Pass a string or a template for the popover content. If you don’t need dynamic content use or `data-content` attribute.
- `popoverEnabled: boolean` Optional. Default `true`. Enable/disable the popover.
- `popoverDismissOnClickOutside: boolean` Optional. Use this to hide the popover when the user clicks or focuses anywhere outside the popover itself.
- `popoverOptions: IPopupOptions` Optional. Note that in most cases you can use the native Bootstrap `data-` attributes instead. Also note that these options are not dynamic &mdash; they are set only once, when the directive is instantiated.

**Outputs**
- `events: EventEmitter<Event>` The native Bootstrap `popover events.

**Methods**
- `show(): void` Show the popover manually.
- `hide(): void` Hide the popover manually.
- `toggle(): void` Toggle the visibility of the popover manually.
