import {
  OnInit, OnDestroy, Output, EventEmitter,
  TemplateRef, ElementRef, ComponentRef, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { PopupPlaceholderComponent } from './popup-placeholder/popup-placeholder.component';

declare const jQuery: any;


export abstract class AbstractPopup implements OnInit, OnDestroy {

  @Output() events: EventEmitter<Event> = new EventEmitter();

  abstract popupType: 'popover' | 'tooltip';

  abstract title: string | TemplateRef<any>;
  abstract content: string | TemplateRef<any>;
  abstract animation: boolean;
  abstract html: boolean;
  abstract delay: number | {show: number, hide: number};
  abstract container: string | HTMLElement | false;
  abstract placement: string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string);
  abstract template: string;
  abstract offset: number | string;
  abstract fallbackPlacement: string | string[];
  abstract boundary: string | HTMLElement;

  abstract enabled: boolean;
  abstract dismissOnClickOutside: boolean;

  titleComponentRef: ComponentRef<PopupPlaceholderComponent> = null;
  contentComponentRef: ComponentRef<PopupPlaceholderComponent> = null;
  bsEventListener: any = null;
  clickDismissListener: any = null;
  constructor(
    private _elementRef: ElementRef,
    private _cfr: ComponentFactoryResolver,
    private _vcr: ViewContainerRef,
  ) { }

  getOptions(): any {
    const options: any = {};
    if (typeof this.animation === 'boolean') {
      options.animation = this.animation;
    }
    if (typeof this.html === 'boolean') {
      options.html = this.html;
    }
    if ((typeof this.delay === 'number') || (typeof this.delay === 'object')) {
      options.delay = this.delay;
    }
    if (this.container) {
      options.container = this.container;
    }
    if (typeof this.template === 'string') {
      options.template = this.template;
    }
    if ((typeof this.placement === 'string') || (typeof this.placement === 'function')) {
      options.placement = this.placement;
    }
    if ((typeof this.offset === 'number') || (typeof this.offset === 'string')) {
      options.offset = this.offset;
    }
    if ((typeof this.fallbackPlacement === 'string') || Array.isArray(this.fallbackPlacement)) {
      options.fallbackPlacement = this.fallbackPlacement;
    }
    if (this.boundary) {
      options.boundary = this.boundary;
    }
    if (this.title) {
      this.titleComponentRef = this.getPlaceholderComponent();
      this.titleComponentRef.instance.inserted = this.title;
      options.title = this.titleComponentRef.instance.insertedContent.nativeElement;
      options.html = true;
    }
    if (this.content) {
      this.contentComponentRef = this.getPlaceholderComponent();
      this.contentComponentRef.instance.inserted = this.content;
      options.content = this.contentComponentRef.instance.insertedContent.nativeElement;
      options.html = true;
    }
    return options;
  }

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
    if (this.titleComponentRef && this.title) {
      this.titleComponentRef.instance.inserted = this.title;
      this.update();
    }
  }

  updateContent() {
    if (this.contentComponentRef && this.content) {
      this.contentComponentRef.instance.inserted = this.content;
      this.update();
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
    this.$el.off(this.jQueryEvents, this.bsEventListener);
    if (this.clickDismissListener) {
      jQuery('body').off('click focusin', this.clickDismissListener);
    }
    if (this.titleComponentRef) {
      this.titleComponentRef.destroy();
    }
    if (this.contentComponentRef) {
      this.contentComponentRef.destroy();
    }
  }



  create() {
    this.bsEventListener = (event) => {
      if (this.dismissOnClickOutside && event.type === 'shown' ) {
        this.clickDismissListener = (clickEvent) => {
          if (this.bsInstance.tip.contains(clickEvent.target)) {
            return;
          }
          jQuery('body').off('click focusin', this.clickDismissListener);
          this.clickDismissListener = null;
          this.hide();
        };
        jQuery('body').on('click focusin', this.clickDismissListener);
      }
      this.events.emit(event);
    };
    this.$el.on(this.jQueryEvents, this.bsEventListener);
    const options = this.getOptions();
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
