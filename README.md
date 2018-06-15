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
This is an empty object, which means Bootstrap's native option defaults are used. Set your own default options by providing a replacement in your module or component. See [Tooltip Options](#tooltip-options) above.

#### Class: `BaseTooltipDirective`
An abstract base class for the two flavors of tooltip directive below.

- Inputs
  - `options: ITooltipOptions` Optional. Options to be applied to this instance. These will override any global options.
- Methods
  - `show(): Promise<void>` Shows the tooltip programmatically. The promise resolves when the tooltip has been fully shown.
  - `hide(): Promise<void>` Hides the tooltip programmatically. The promise resolves when the tooltip has been fully hidden.
  - `toggle(): Promise<void>` Toggles the tooltip programmatically. The promise resolves when the tooltip has been fully shown or hidden.
  - `enable(): void` Allows the tooltip to be shown.
  - `disable(): void` Stops the tooltip from being shown.
  - `toggleEnabled(): void` Toggles the enabled state.
  - `update(): void` Updates the position of the tooltip. Use this as needed, such as when the content changes.
  - `dispose(): void` Disposes of the tooltip and any associated templates.
- Properties
  - `state: 'hidden' | 'hiding' | 'shown' | 'showing'` The visibility of the tooltip.
  - `disabled: boolean` Whether the tooltip is currently disabled.
  - `events: EventEmitter<Event>` The native Bootstrap tooltip events.


#### Directive: `TooltipDirective`
selector: `[ngxStrapTooltip]` | exportAs: `ngxStrapTooltip`

**Input**
- `ngxStrapTooltip: string` Optional. The string variable you want to display. If you only need to display a static string you can omit this, and use the `title` attribute instead.

#### Directive: `TemplateTooltipDirective`
selector: `[ngxStrapTemplateTooltip]` | exportAs: `ngxStrapTemplateTooltip`

**Input**
- `ngxStrapTemplateTooltip: TemplateRef` Required. The template you want to associate with the tooltip.
