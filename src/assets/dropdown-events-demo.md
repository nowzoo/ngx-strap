```html
<p>
Event Types: <small>{{dropdownEvents.join(', ')}}</small>
</p>
<p>
Status: <small>{{dropdown.status}}</small>
</p>
<div
  class="dropdown"
  ngxStrapDropdown
  (events)="dropdownEvents.push($event.type)"
  #dropdown="ngxStrapDropdown">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    data-toggle="dropdown">
    Dropdown Trigger
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
```

```typescript
export class DropdownEventsDemoComponent {
  dropdownEvents: string[] = [];
}
```
