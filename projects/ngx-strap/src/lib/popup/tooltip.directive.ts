import { Directive, OnInit, OnChanges, OnDestroy, Input, TemplateRef, ElementRef,
  ComponentFactoryResolver, ViewContainerRef, SimpleChanges } from '@angular/core';
import { AbstractPopup } from './abstract-popup';
@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class TooltipDirective extends AbstractPopup implements OnInit, OnChanges, OnDestroy {
  @Input() tooltipTitle: string | TemplateRef<any>;
  @Input() tooltipEnabled = true;
  @Input() tooltipDismissOnClickOutside = true;
  @Input() tooltipDelay: number | {show: number, hide: number} = null;
  popupType: 'tooltip' = 'tooltip';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
  }

  get popupTitleInput(): string | TemplateRef<any> {
    return this.tooltipTitle || null;
  }

  get popupContentInput(): string | TemplateRef<any> {
    return null;
  }

  get enabled(): boolean {
    return this.tooltipEnabled !== false;
  }

  get delay(): number | {show: number, hide: number} {
    return this.tooltipDelay;
  }

  get dismissOnClickOutside(): boolean {
    return this.tooltipDismissOnClickOutside;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tooltipEnabled !== undefined) {
      this.updateEnabled();
    }
    if (changes.tooltipTitle) {
      this.updateTitle();
    }
  }



}
