import { Directive, OnInit, OnChanges, OnDestroy, Input, TemplateRef, ElementRef,
  ComponentFactoryResolver, ViewContainerRef, SimpleChanges } from '@angular/core';
import { AbstractPopup } from './abstract-popup';
@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class TooltipDirective extends AbstractPopup implements OnInit, OnChanges, OnDestroy {
  @Input() tooltipTitle: string | TemplateRef<any>;

  @Input() tooltipAnimation: boolean;
  @Input() tooltipHtml: boolean;
  @Input() tooltipDelay: number | {show: number, hide: number};
  @Input() tooltipContainer: string | HTMLElement | false;
  @Input() tooltipTemplate: string;
  @Input() tooltipPlacement: string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string);
  @Input() tooltipOffset: number | string;
  @Input() tooltipFallbackPlacement: string | string[];
  @Input() tooltipBoundary: string | HTMLElement;

  @Input() tooltipEnabled = true;
  @Input() tooltipDismissOnClickOutside: boolean;
  popupType: 'tooltip' = 'tooltip';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
  }

  get title(): string | TemplateRef<any> {
    return this.tooltipTitle || null;
  }

  get content(): string | TemplateRef<any> {
    return  null;
  }

  get animation(): boolean {
    return this.tooltipAnimation;
  }
  get html(): boolean {
    return this.tooltipHtml;
  }

  get delay(): number | {show: number, hide: number} {
    return this.tooltipDelay;
  }


  get container(): string | HTMLElement | false {
    return this.tooltipContainer;
  }


  get placement(): string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string) {
    return this.tooltipPlacement;
  }

  get template(): string {
    return this.tooltipTemplate;
  }


  get offset(): number | string {
    return this.tooltipOffset;
  }

  get fallbackPlacement(): string | string[] {
    return this.tooltipFallbackPlacement;
  }

  get boundary(): string | HTMLElement {
    return this.tooltipBoundary;
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
