import {
  OnInit,
  OnDestroy,
  OnChanges,
  ElementRef,
  EventEmitter,
  TemplateRef,
  EmbeddedViewRef,
  ViewContainerRef,
  Renderer2,
  Input
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { INgxStrapPopupOptions } from './popup-options';

declare const jQuery: any;

export abstract class NgxStrapAbstractPopupDirective implements OnInit, OnChanges, OnDestroy {
  static eventNames: string[] = ['show', 'shown', 'hide', 'hidden', 'inserted'];

  protected _$el: any;
  protected _embeddedViewRefs: Map<string, EmbeddedViewRef<any>>;
  protected _popupEventsStr: string;
  protected _bootstrapInstance: any = null;
  protected _resolvedOptions: any = {};

  events: EventEmitter<Event>;
  state: 'hidden' | 'hiding' | 'shown' | 'showing' = 'hidden';
  disabled = false;

  @Input() options: INgxStrapPopupOptions = null;

  constructor(
    protected _elementRef: ElementRef,
    protected _viewContainerRef: ViewContainerRef,
    protected _renderer: Renderer2,
    protected _popupFlavor: 'popover' | 'tooltip',
    protected _defaultOptions: INgxStrapPopupOptions
  ) {
    this._embeddedViewRefs = new Map();
  }

  ngOnInit() {
    this._popupEventsStr = NgxStrapAbstractPopupDirective.eventNames.map((name: string) => {
      return [name, 'bs', this._popupFlavor].join('.');
    }).join(' ');
    this._$el = jQuery(this._elementRef.nativeElement);
    this.events = new EventEmitter();
    this._$el.on(this._popupEventsStr, e => {
      switch (e.type) {
        case 'show':
          this.reattachAllViews();
          this.state = 'showing';
          break;
        case 'shown':
          this.state = 'shown';
          break;
        case 'hide':
          this.state = 'hiding';
          break;
        case 'hidden':
        this.detachAllViews();
          this.state = 'hidden';
          break;
      }
      this.events.emit(e);
    });
    this.onInputsChanged();
  }

  ngOnChanges() {
    if (! this._bootstrapInstance) {
      return;
    }
    this.onInputsChanged();
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
    this._$el[this._popupFlavor]('show');
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
    this._$el[this._popupFlavor]('hide');
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
    this._$el[this._popupFlavor]('toggle');
    return promise;
  }

  dispose() {
    this._$el[this._popupFlavor]('dispose');
    this._embeddedViewRefs.forEach((viewRef: EmbeddedViewRef<any>, key: string) => {
      viewRef.detach();
      viewRef.destroy();
    });
    this._embeddedViewRefs.clear();
  }

  enable() {
    this._$el[this._popupFlavor]('enable');
    this.disabled = false;
  }

  disable() {
    this._$el[this._popupFlavor]('disable');
    this.disabled = true;
  }

  toggleEnabled() {
    this._$el[this._popupFlavor]('toggleEnabled');
    this.disabled = ! this.disabled;
  }

  update() {
    this._$el[this._popupFlavor]('update');
  }

  protected getDisplayOption(
    optionValue: (() => string) | string | HTMLElement | TemplateRef<any>,
    optionName: 'title' | 'content'):  (() => string) | string | HTMLElement {
    const oldViewRef: EmbeddedViewRef<any> = this._embeddedViewRefs.get(optionName);
    if (oldViewRef) {
      oldViewRef.detach();
      oldViewRef.destroy();
      this._embeddedViewRefs.delete(optionName);
    }
    if (!(optionValue instanceof TemplateRef)) {
      return optionValue;
    }

    const viewRef: EmbeddedViewRef<any> = this._viewContainerRef.createEmbeddedView(optionValue, {popup: this});
    this._embeddedViewRefs.set(optionName, viewRef);
    const el = this._renderer.createElement('div');
    this._renderer.addClass(el, 'popup-template-container');
    viewRef.rootNodes.forEach((node) => {
      this._renderer.appendChild(el, node);
    });
    viewRef.detach();
    return el;

  }

  protected abstract updateDisplayOptions(): any;

  private onInputsChanged() {
    const defaultOptions = this._defaultOptions || {};
    const directiveOptions = this.options || {};
    const displayOptions = this.updateDisplayOptions() || {};
    const merged = Object.assign({}, defaultOptions, directiveOptions, displayOptions);
    if (this._bootstrapInstance) {
      this.dispose();
      this._bootstrapInstance = null;
    }
    this._$el[this._popupFlavor](merged);
    this._bootstrapInstance = this._$el.data('bs.' + this._popupFlavor);
  }

  private detachAllViews() {
    this._embeddedViewRefs.forEach((viewRef: EmbeddedViewRef<any>, key: string) => {
      viewRef.detach();
    });
  }

  private reattachAllViews() {
    this._embeddedViewRefs.forEach((viewRef: EmbeddedViewRef<any>, key: string) => {
      viewRef.reattach();
    });
  }


}
