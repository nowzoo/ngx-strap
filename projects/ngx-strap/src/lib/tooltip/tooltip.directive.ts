import { Directive, ElementRef, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { BaseTooltipDirective } from './base-tooltip.directive';
import { NgxStrapTooltipOptions } from './tooltip-options';

@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class TooltipDirective extends BaseTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() ngxStrapTooltip: string;

  constructor(
    tooltipOptions: NgxStrapTooltipOptions,
    elementRef: ElementRef
  ) {
    super(tooltipOptions, elementRef);

  }

  ngOnInit() {
    super.ngOnInit();
    this.updateOnChange();
  }

  ngOnChanges() {
    if (! this.bsTooltipInstance) {
      return;
    }
    this.updateOnChange();
  }

  private updateOnChange() {
    if (this.bsTooltipInstance) {
      this.dispose();
    }
    const titleOptions = this.ngxStrapTooltip ? {title: this.ngxStrapTooltip} : {};
    const instanceOptions = this.options || {};
    const options = Object.assign({}, this.tooltipOptions, instanceOptions, titleOptions);
    this.$el.tooltip(options);
    this.bsTooltipInstance = true;
  }



}
