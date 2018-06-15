import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStrapTooltipOptions } from './tooltip-options';
import { NgxStrapPopoverOptions } from './popover-options';
import { NgxStrapPopoverDirective } from './popover.directive';
import { NgxStrapTooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxStrapPopoverDirective,
    NgxStrapTooltipDirective
  ],
  exports: [
    NgxStrapPopoverDirective,
    NgxStrapTooltipDirective
  ],
  providers: [
    {provide: NgxStrapTooltipOptions, useClass: NgxStrapTooltipOptions},
    {provide: NgxStrapPopoverOptions, useClass: NgxStrapPopoverOptions}
  ]
})
export class NgxStrapPopupModule { }
