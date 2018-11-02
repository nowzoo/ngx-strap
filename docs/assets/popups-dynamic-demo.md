```html
<button
  type="button"
  class="btn btn-primary mr-4"
  ngxStrapTooltip
  [tooltipTitle]="time">
  Tooltip (hover)
</button>
<button
  type="button"
  class="btn btn-primary mr-4"
  ngxStrapPopover
  [popoverTitle]="'Welcome, ' + name"
  [popoverContent]="'The current time is ' + time.">
  Popover (click)
</button>
```

```typescript
export class PopupsDynamicDemoComponent implements OnInit, OnDestroy {
  interval: any = null;
  time: string;
  name = 'Milo the Dog';
  ngOnInit() {
    this.time = new Date().toLocaleTimeString();
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

```
