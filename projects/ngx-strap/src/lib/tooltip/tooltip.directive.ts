import { Directive, ElementRef, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { BaseTooltipDirective } from './base-tooltip.directive';

@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class TooltipDirective extends BaseTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() ngxStrapTooltip: string;

  constructor(
    elementRef: ElementRef
  ) {
    super(elementRef);

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
    const titleOpt = this.ngxStrapTooltip ? {title: this.ngxStrapTooltip} : {};
    const opts = this.options || {};
    const options = Object.assign({}, opts, titleOpt);
    this.$el.tooltip(options);
    this.bsTooltipInstance = true;
  }



}
