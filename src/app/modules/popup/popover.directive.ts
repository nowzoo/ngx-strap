import { Directive, OnInit, OnChanges, SimpleChanges, OnDestroy, Input, TemplateRef, ElementRef,
  ComponentFactoryResolver, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { AbstractPopup } from './abstract-popup';
import { IPopupOptions } from './shared';

@Directive({
  selector: '[ngxStrapPopover]',
  exportAs: 'ngxStrapPopover'
})
export class PopoverDirective extends AbstractPopup implements OnInit, OnChanges, OnDestroy {
  @Input() popoverContent: string | TemplateRef<any>;
  @Input() popoverTitle: string | TemplateRef<any>;
  @Input() popoverOptions: IPopupOptions = null;
  @Input() popoverEnabled = true;
  @Input() popoverDismissOnClickOutside: boolean;
  @Output() popoverEvents: EventEmitter<Event>;
  popupType: 'popover' = 'popover';
  constructor(
    elementRef: ElementRef,
    cfr: ComponentFactoryResolver,
    vcr: ViewContainerRef,
  ) {
    super(elementRef, cfr, vcr);
    this.popoverEvents = this.events;
  }

  get title(): string | TemplateRef<any> {
    return this.popoverTitle || null;
  }

  get content(): string | TemplateRef<any> {
    return this.popoverContent || null;
  }

  get options(): IPopupOptions {
    return this.popoverOptions || {};
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
