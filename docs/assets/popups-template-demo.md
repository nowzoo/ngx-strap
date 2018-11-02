```html
<button
  type="button"
  class="btn btn-primary mr-4"
  ngxStrapTooltip
  [tooltipTitle]="tooltipTitle">
  Tooltip (hover)
</button>
<ng-template #tooltipTitle>
 <i class="fas fa-clock fa-fw"></i>
 It's currently {{ time }}.
</ng-template>

<button
  type="button"
  class="btn btn-primary mr-4"
  ngxStrapPopover
  [popoverTitle]="popoverTitle"
  [popoverContent]="popoverContent">
  Popover (click)
</button>
<ng-template #popoverTitle>
  <i class="fas fa-smile-wink fa-fw"></i>
 Welcome, {{ name }}!
</ng-template>
<ng-template #popoverContent>
  <i class="fas fa-clock fa-fw"></i>
  It's currently {{ time }} in your neighborhood.
</ng-template>
```

```typescript
export class PopupsTemplateDemoComponent implements OnInit, OnDestroy {
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
