#ngx-strap
Desc TKTK


## Modals



## Tooltips

The library comes with two tooltip directives:
 - `TooltipDirective` is a directive for use with the `title` attribute or simple string variables.
 - `TemplateTooltipDirective` displays a tooltip using an `ng-template`. You should use this if you have complicated markup and/or lots of interpolation.

 **Import the module**

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

You can do the same in components...
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
