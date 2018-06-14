import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TemplateTooltipDirective } from './template-tooltip.directive';
import { NgxStrapTooltipOptions } from './tooltip-options';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipDirective,
    TemplateTooltipDirective
  ],
  exports: [
    TooltipDirective,
    TemplateTooltipDirective
  ],
  providers: [
    {provide: NgxStrapTooltipOptions, useClass: NgxStrapTooltipOptions}
  ]
})
export class TooltipModule { }
