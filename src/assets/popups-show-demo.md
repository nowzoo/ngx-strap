```html
<p>
  <button
    type="button"
    class="btn btn-primary mr-4"
    ngxStrapTooltip
    data-trigger="manual"
    #tooltip="ngxStrapTooltip"
    title="Tooltip Title">
    Tooltip (manual)
  </button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="tooltip.show()">tooltip.show()</button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="tooltip.hide()">tooltip.hide()</button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="tooltip.toggle()">tooltip.toggle()</button>
</p>

<p>
  <button
    type="button"
    class="btn btn-primary mr-4"
    ngxStrapPopover
    data-trigger="manual"
    #popover="ngxStrapPopover"
    title="Popover Title"
    data-placement="top"
    data-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.">
    Popover (manual)
  </button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="popover.show()">popover.show()</button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="popover.hide()">popover.hide()</button>
  <button type="button"
    class="btn btn-secondary btn-sm mr-2"
    (click)="popover.toggle()">popover.toggle()</button>
</p>
```
