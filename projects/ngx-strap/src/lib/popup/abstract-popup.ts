import {
  Directive, OnInit, SimpleChanges, OnDestroy, Input, Output, EventEmitter,
  TemplateRef, ElementRef, ComponentRef, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PopupPlaceholderComponent } from './popup-placeholder/popup-placeholder.component';

declare const jQuery: any;


export abstract class AbstractPopup implements OnInit, OnDestroy {

  @Output() events: EventEmitter<Event> = new EventEmitter();

  abstract popupType: 'popover' | 'tooltip';
  abstract enabled: boolean;
  abstract popupTitleInput: string | TemplateRef<any>;
  abstract popupContentInput: string | TemplateRef<any>;
  abstract delay: number | {show: number, hide: number};
  abstract dismissOnClickOutside: boolean;
  titleComponentRef: ComponentRef<PopupPlaceholderComponent> = null;
  contentComponentRef: ComponentRef<PopupPlaceholderComponent> = null;
  dismissOnClickOutsideListener: any = null;
  bsEventListener: any = null;
  constructor(
    private _elementRef: ElementRef,
    private _cfr: ComponentFactoryResolver,
    private _vcr: ViewContainerRef,
  ) { }

  get cfr(): ComponentFactoryResolver {
    return this._cfr;
  }

  get vcr(): ViewContainerRef {
    return this._vcr;
  }

  get el(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  get $el(): any {
    return jQuery(this.el);
  }

  get bsInstance(): any {
    return this.$el.data('bs.' + this.popupType);
  }

  get jQueryEvents(): string {
    return ['show', 'inserted', 'shown', 'hide', 'hidden'].map(t => `${t}.bs.${this.popupType}`).join(' ');
  }

  ngOnInit() {
    this.create();
  }


  updateTitle() {
    if (this.titleComponentRef && this.popupTitleInput) {
      this.titleComponentRef.instance.inserted = this.popupTitleInput;
    }
  }

  updateContent() {
    if (this.contentComponentRef && this.popupContentInput) {
      this.contentComponentRef.instance.inserted = this.popupContentInput;
    }
  }

  updateEnabled() {
    if (this.bsInstance) {
      if (this.enabled) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }



  ngOnDestroy() {
    this.$el[this.popupType]('dispose');
    this.$el.off(this.jQueryEvents);
    if (this.dismissOnClickOutsideListener) {
      jQuery(document.body).off('click', this.dismissOnClickOutsideListener);
      this.dismissOnClickOutsideListener = null;
    }
    if (this.titleComponentRef) {
      this.titleComponentRef.destroy();
    }
    if (this.contentComponentRef) {
      this.contentComponentRef.destroy();
    }
  }

  setDismissOnClickOutsideListener(event: Event) {
    if (this.dismissOnClickOutsideListener) {
      jQuery(document.body).off('click', this.dismissOnClickOutsideListener);
      this.dismissOnClickOutsideListener = null;
    }
    if (! this.dismissOnClickOutside) {
      return;
    }

    this.dismissOnClickOutsideListener = (clickEvent) => {
      const tip: HTMLElement = this.bsInstance.tip;
      if (tip.contains(clickEvent.target)) {
        return;
      }
      if (clickEvent === event) {
        return;
      }
      this.hide();
      jQuery(document.body).off('click', this.dismissOnClickOutsideListener);
      this.dismissOnClickOutsideListener = null;
    };
    jQuery(document.body).on('click', this.dismissOnClickOutsideListener);

  }

  create() {
    this.bsEventListener = (event) => {
      switch (event.type) {
        case 'shown':
          this.setDismissOnClickOutsideListener(event);
          break;
      }
      this.events.emit(event);
    };
    this.$el.on(this.jQueryEvents, this.bsEventListener);
    const options: any = {};
    if (this.popupContentInput) {
      this.contentComponentRef = this.getPlaceholderComponent();
      this.contentComponentRef.instance.inserted = this.popupContentInput;
      options.title = this.contentComponentRef.location.nativeElement;
      options.content = this.contentComponentRef.instance.insertedContent.nativeElement;
      options.html = true;
    }
    if (this.popupTitleInput) {
      this.titleComponentRef = this.getPlaceholderComponent();
      this.titleComponentRef.instance.inserted = this.popupTitleInput;
      options.title = this.titleComponentRef.instance.insertedContent.nativeElement;
      options.html = true;
    }
    if (this.delay) {
      options.delay = this.delay;
    }
    // this.detachComponents();
    this.$el[this.popupType](options);

    this.updateEnabled();
  }

  getPlaceholderComponent(): ComponentRef<PopupPlaceholderComponent> {
    const factory = this.cfr.resolveComponentFactory(PopupPlaceholderComponent);
    return this.vcr.createComponent(factory, 0);
  }



  show() {
    this.$el[this.popupType]('show');
  }

  hide() {
    this.$el[this.popupType]('hide');
  }

  toggle() {
    this.$el[this.popupType]('toggle');
  }

  enable() {
    this.$el[this.popupType]('enable');
  }

  disable() {
    this.$el[this.popupType]('disable');
  }

  toggleEnabled() {
    this.$el[this.popupType]('toggleEnabled');
  }

  update() {
    this.$el[this.popupType]('update');
  }


}
