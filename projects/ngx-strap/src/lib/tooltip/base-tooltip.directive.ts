import { Input, OnInit, OnDestroy,
  ElementRef, TemplateRef, EmbeddedViewRef, ViewContainerRef,
  EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NgxStrapTooltipOptions, TooltipOptions } from './tooltip-options';
declare const jQuery: any;

export abstract class BaseTooltipDirective implements OnInit, OnDestroy {
  @Input() options: any = null;
  protected $el: any;
  protected bsTooltipInstance: any = null;
  events: EventEmitter<Event>;
  state: 'hidden' | 'hiding' | 'shown' | 'showing' = 'hidden';
  disabled = false;
  constructor(
    protected elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.$el = jQuery(this.elementRef.nativeElement);
    this.events = new EventEmitter();
    this.$el.on('show.bs.tooltip shown.bs.tooltip hide.bs.tooltip hidden.bs.tooltip', e => {
      switch (e.type) {
        case 'show': this.state = 'showing'; break;
        case 'shown': this.state = 'shown'; break;
        case 'hide': this.state = 'hiding'; break;
        case 'hidden': this.state = 'hidden'; break;
      }
      this.events.emit(e);
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  show(): Promise<void> {
    const promise: Promise<void> = new Promise(resolve => {
      const sub = this.events
        .pipe(filter(e => 'shown' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
    this.$el.tooltip('show');
    return promise;
  }

  hide(): Promise<void> {
    const promise: Promise<void> = new Promise(resolve => {
      const sub = this.events
        .pipe(filter(e => 'hidden' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
    this.$el.tooltip('hide');
    return promise;
  }

  toggle(): Promise<void> {
    const promise: Promise<void> = new Promise(resolve => {
      const sub = this.events
        .pipe(filter(e => 'hidden' === e.type || 'shown' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
    this.$el.tooltip('toggle');
    return promise;
  }

  dispose() {
    this.$el.tooltip('dispose');
  }

  enable() {
    this.$el.tooltip('enable');
    this.disabled = false;
  }

  disable() {
    this.$el.tooltip('disable');
    this.disabled = true;
  }

  toggleEnabled() {
    this.$el.tooltip('toggleEnabled');
    this.disabled = ! this.disabled;
  }

  update() {
    this.$el.tooltip('update');
  }

}
