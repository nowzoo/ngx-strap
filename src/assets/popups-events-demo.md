```html
<p>
  <button
    type="button"
    class="btn btn-primary mr-4"
    ngxStrapTooltip
    (tooltipEvents)="tooltipEvents.push($event.type)"
    title="Tooltip Title">
    Tooltip (hover)
  </button>
  <br>
  Tooltip Events: <small>{{tooltipEvents.join(', ')}}</small>
</p>

<p>
  <button
    type="button"
    class="btn btn-primary mr-4"
    ngxStrapPopover
    (popoverEvents)="popoverEvents.push($event.type)"
    title="Popover Title"
    data-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
    Popover (click)
  </button>
  <br>
  Popover Events: <small>{{popoverEvents.join(', ')}}</small>
</p>
```
