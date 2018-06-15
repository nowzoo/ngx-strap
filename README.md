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

### Simple tooltip
If you need a tooltip to display a simple string or string variable, use the `TooltipDirective` (using the `ngxStrapTooltip` selector.) You can use the `title` attribute or bind a variable with `[ngxStrapTooltip]="tooltipString"`.
```html
<!-- title... -->
<button ngxStrapTooltip title="Static Title">...</button>
<!-- variable... -->
<button [ngxStrapTooltip]="tooltipString">...</button>
```

### Tooltip from a template
If you want the tooltip to display more complex markup and variable interpolation, use the `TemplateTooltipDirective`, passing the template in like this: `[ngxStrapTemplateTooltip]="myTemplate"`.

```html
<ng-template #myTooltip>
  Tooltip courtesy of a <strong>{{adjective}}</strong> template!
</ng-template>
<button class="btn btn-primary" [ngxStrapTemplateTooltip]="myTooltip">...</button>
```

Note: Template tooltips always set the `html` option to `true`. Always sanitize user input before sticking it in the template.

### Tooltip API

```ts
interface ITooltipOptions { [key: string]: any; }
```

```ts
class NgxStrapTooltipOptions implements ITooltipOptions {}
```
