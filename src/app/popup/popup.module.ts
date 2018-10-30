import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { TooltipDirective } from './tooltip.directive';
import { PopupPlaceholderComponent } from './popup-placeholder/popup-placeholder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopoverDirective,
    TooltipDirective,
    PopupPlaceholderComponent
  ],
  exports: [
    PopoverDirective,
    TooltipDirective
  ],
  entryComponents: [
    PopupPlaceholderComponent
  ]
})
export class PopupModule { }
