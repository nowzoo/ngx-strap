import { Directive, ElementRef, OnInit, OnDestroy, OnChanges, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
import { BaseTooltipDirective } from './base-tooltip.directive';
import { NgxStrapTooltipOptions } from './tooltip-options';

declare const jQuery: any;
@Directive({
  selector: '[ngxStrapTemplateTooltip]',
  exportAs: 'ngxStrapTemplateTooltip'
})
export class TemplateTooltipDirective extends BaseTooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input() ngxStrapTemplateTooltip: TemplateRef<any>;
  private $container: any = null;
  private embeddedViewRef: EmbeddedViewRef<any> = null;
  constructor(
    tooltipOptions: NgxStrapTooltipOptions,
    elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
  ) {
    super(tooltipOptions, elementRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.updateOnChange();
    this.events.subscribe(e => {
      this.handleEvent(e);
    });

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
    if (! this.ngxStrapTemplateTooltip) {
      return;
    }
    const titleOptions: any = {};
    this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.ngxStrapTemplateTooltip, {tooltip: this});
    this.$container = jQuery('<div></div>');
    this.$container.append(this.embeddedViewRef.rootNodes);
    this.embeddedViewRef.detach();
    titleOptions.title = this.$container.get(0);
    titleOptions.html = true;
    const instanceOptions = this.options || {};
    const options = Object.assign({}, this.tooltipOptions, instanceOptions, titleOptions);
    this.$el.tooltip(options);
    this.bsTooltipInstance = true;
  }

  dispose() {
    super.dispose();
    this.embeddedViewRef.detach();
  }

  private handleEvent(e: Event) {
    if (this.embeddedViewRef) {
      switch (e.type) {
        case 'show':
          this.embeddedViewRef.reattach();
          break;
        case 'hidden':
          this.embeddedViewRef.detach();
          break;
      }
    }
  }

}
