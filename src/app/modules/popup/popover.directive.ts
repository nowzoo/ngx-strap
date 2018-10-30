import { Directive, OnInit, OnChanges, SimpleChanges, OnDestroy, Input, TemplateRef, ElementRef,
  ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AbstractPopup } from './abstract-popup';
@Directive({
  selector: '[ngxStrapPopover]',
  exportAs: 'ngxStrapPopover'
})
export class PopoverDirective extends AbstractPopup implements OnInit, OnChanges, OnDestroy {
  @Input() popoverContent: string | TemplateRef<any>;
  @Input() popoverTitle: string | TemplateRef<any>;

  @Input() popoverAnimation: boolean;
  @Input() popoverHtml: boolean;
  @Input() popoverDelay: number | {show: number, hide: number};
  @Input() popoverContainer: string | HTMLElement | false;
  @Input() popoverPlacement: string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string);
  @Input() popoverTemplate: string;
  @Input() popoverOffset: number | string;
  @Input() popoverFallbackPlacement: string | string[];
  @Input() popoverBoundary: string | HTMLElement;

  @Input() popoverEnabled = true;
  @Input() popoverDismissOnClickOutside: boolean;
  popupType: 'popover' = 'popover';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
  }

  get title(): string | TemplateRef<any> {
    return this.popoverTitle || null;
  }

  get content(): string | TemplateRef<any> {
    return this.popoverContent || null;
  }

  get animation(): boolean {
    return this.popoverAnimation;
  }
  get html(): boolean {
    return this.popoverHtml;
  }

  get delay(): number | {show: number, hide: number} {
    return this.popoverDelay;
  }


  get container(): string | HTMLElement | false {
    return this.popoverContainer;
  }


  get placement(): string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string) {
    return this.popoverPlacement;
  }

  get template(): string {
    return this.popoverTemplate;
  }


  get offset(): number | string {
    return this.popoverOffset;
  }

  get fallbackPlacement(): string | string[] {
    return this.popoverFallbackPlacement;
  }

  get boundary(): string | HTMLElement {
    return this.popoverBoundary;
  }

  get enabled(): boolean {
    return this.popoverEnabled !== false;
  }

  get dismissOnClickOutside(): boolean {
    return this.popoverDismissOnClickOutside === true;
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.popoverEnabled !== undefined) {
      this.updateEnabled();
    }
    if (changes.popoverTitle !== undefined) {
      this.updateTitle();
    }
    if (changes.popoverContent !== undefined) {
      this.updateContent();
    }
  }

}
