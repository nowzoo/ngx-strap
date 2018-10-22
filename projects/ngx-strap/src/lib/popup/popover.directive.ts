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
  @Input() popoverEnabled = true;
  @Input() popoverDismissOnClickOutside = true;
  @Input() popoverDelay: number | {show: number, hide: number} = null;
  popupType: 'popover' = 'popover';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
  }

  get popupTitleInput(): string | TemplateRef<any> {
    return this.popoverTitle || null;
  }

  get popupContentInput(): string | TemplateRef<any> {
    return this.popoverContent || null;
  }

  get enabled(): boolean {
    return this.popoverEnabled !== false;
  }

  get delay(): number | {show: number, hide: number} {
    return this.popoverDelay;
  }

  get dismissOnClickOutside(): boolean {
    return this.popoverDismissOnClickOutside;
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
