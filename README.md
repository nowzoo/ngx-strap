#ngx-strap
Desc TKTK


## Modals



## Tooltips

The library comes with two tooltip directives:
 - `TooltipDirective` is a directive for use with the `title` attribute or simple string variables.
 - `TemplateTooltipDirective` displays a tooltip using an `ng-template`. You should use this if you have complicated markup and/or lots of interpolation.

### Import `TooltipModule`

```ts
import { TooltipModule } from '@nowzoo/ngx-strap';
// ...
@NgModule({
  imports: [
    // ...
    TooltipModule,
  ],
})
export class MyModule { }
```

### Tooltip Options
The directives use Bootstrap's default tooltip options out of the box. Optionally, you can replace these options in the scope of your module by providing `NgxStrapTooltipOptions`...

```ts
import { TooltipModule, NgxStrapTooltipOptions } from '@nowzoo/ngx-strap';

const tooltipOptions: NgxStrapTooltipOptions = {animation: false};

@NgModule({
  imports: [
    TooltipModule,
  ],
  providers: [
    {provide: NgxStrapTooltipOptions, useValue: tooltipOptions}
  ]
})
export class MyModule { }
```

You can do the same within the scope of a component...
```ts
import { Component } from '@angular/core';
import { NgxStrapTooltipOptions } from '@nowzoo/ngx-strap';

const tooltipOptions: NgxStrapTooltipOptions = {animation: false};

@Component({
  //...
  providers: [{provide: NgxStrapTooltipOptions, useValue: tooltipOptions}]
})
export class MyComponent  { }
```

And, finally, you can pass in options to the directive, using the `options` input or `data-` attributes:

```html
<!-- options input... -->
<button class="btn btn-primary"
  ngxStrapTooltip
  [options]="{animation: false}"
  title="Animation off">Submit</button>

<!-- data- attribute... -->
<button class="btn btn-primary"
  ngxStrapTooltip
  data-animation="false"
  title="Animation off">Submit</button>
```
