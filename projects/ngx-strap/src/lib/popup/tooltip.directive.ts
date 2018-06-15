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
import { NgxStrapTooltipOptions } from './tooltip-options';

@Directive({
  selector: '[ngxStrapTooltip]',
  exportAs: 'ngxStrapTooltip'
})
export class NgxStrapTooltipDirective extends NgxStrapAbstractPopupDirective implements OnInit, OnChanges, OnDestroy {
  @Input() ngxStrapTooltipTitle: string | (() => string) | HTMLElement | TemplateRef<any> = null;

  constructor(
    elRef: ElementRef,
    viewContainerRef: ViewContainerRef,
    renderer: Renderer2,
    defaultOptions: NgxStrapTooltipOptions
  ) {
    super(elRef, viewContainerRef, renderer, 'tooltip', defaultOptions);
  }

  protected updateDisplayOptions() {
    const displayOptions: any = {};
    if (this.ngxStrapTooltipTitle) {
      displayOptions.title = this.getDisplayOption(this.ngxStrapTooltipTitle, 'title');
    }
    if (this.ngxStrapTooltipTitle instanceof TemplateRef) {
      displayOptions.html = true;
    }
    return displayOptions;
  }

}
