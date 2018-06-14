import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TemplateTooltipDirective } from './template-tooltip.directive';

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
})
export class TooltipModule { }
