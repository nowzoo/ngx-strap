import {
  Directive,
  OnInit,
  OnChanges,
  OnDestroy,
  ElementRef,
  ViewContainerRef,
  Renderer2,
  Input,
  TemplateRef
} from '@angular/core';
import { NgxStrapAbstractPopupDirective } from './abstract-popup.directive';
import { NgxStrapPopoverOptions } from './popover-options';

@Directive({
  selector: '[ngxStrapPopover]',
  exportAs: 'ngxStrapPopover'
})
export class NgxStrapPopoverDirective extends NgxStrapAbstractPopupDirective implements OnInit, OnChanges, OnDestroy {
  @Input() ngxStrapPopoverContent: string | (() => string) | HTMLElement | TemplateRef<any> = null;
  @Input() ngxStrapPopoverTitle: string | (() => string) | HTMLElement | TemplateRef<any> = null;

  constructor(
    elRef: ElementRef,
    viewContainerRef: ViewContainerRef,
    renderer: Renderer2,
    defaultOptions: NgxStrapPopoverOptions
  ) {
    super(elRef, viewContainerRef, renderer, 'popover', defaultOptions);
  }

  protected updateDisplayOptions() {
    const displayOptions: any = {};
    if (this.ngxStrapPopoverContent) {
      displayOptions.content = this.getDisplayOption(this.ngxStrapPopoverContent, 'content');
    }
    if (this.ngxStrapPopoverTitle) {
      displayOptions.title = this.getDisplayOption(this.ngxStrapPopoverTitle, 'title');
    }
    if (this.ngxStrapPopoverContent instanceof TemplateRef || this.ngxStrapPopoverTitle instanceof TemplateRef) {
      displayOptions.html = true;
    }
    return displayOptions;
  }

}
