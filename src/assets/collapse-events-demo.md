```html
<p>
Event Types: <small>{{collapseEvents.join(', ')}}</small>
</p>
<button
  type="button"
  class="btn btn-primary"
  (click)="open=!open">Toggle</button>
<div class="card mt-2"
  [ngxStrapCollapse]="open"
  #collapse="ngxStrapCollapse"
  (events)="collapseEvents.push($event.type)">
  <div class="card-body">
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>
```

```typescript
export class CollapseEventsDemoComponent {
  collapseEvents: string[] = [];
  open = false;
}
```
