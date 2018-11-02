import { Directive, OnInit, OnChanges, OnDestroy, Input, TemplateRef, ElementRef,
  ComponentFactoryResolver, ViewContainerRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AbstractPopup } from './abstract-popup';
import { IPopupOptions } from './shared';
@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class TooltipDirective extends AbstractPopup implements OnInit, OnChanges, OnDestroy {
  @Input() tooltipTitle: string | TemplateRef<any>;
  @Input() tooltipEnabled = true;
  @Input() tooltipDismissOnClickOutside: boolean;
  @Input() tooltipOptions: IPopupOptions = null;
  @Output() tooltipEvents: EventEmitter<Event>;
  popupType: 'tooltip' = 'tooltip';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
    this.tooltipEvents = this.events;
  }

  get title(): string | TemplateRef<any> {
    return this.tooltipTitle || null;
  }

  get content(): string | TemplateRef<any> {
    return  null;
  }

  get options(): IPopupOptions {
    return this.tooltipOptions || {};
  }

  get enabled(): boolean {
    return this.tooltipEnabled !== false;
  }

  get dismissOnClickOutside(): boolean {
    return this.tooltipDismissOnClickOutside === true;
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
