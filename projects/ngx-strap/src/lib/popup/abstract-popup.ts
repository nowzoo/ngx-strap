import {
  OnInit, OnDestroy, EventEmitter,
  TemplateRef, ElementRef, ComponentRef, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { PopupPlaceholderComponent } from './popup-placeholder/popup-placeholder.component';
import { IPopupOptions } from './shared';

declare const jQuery: any;


export abstract class AbstractPopup implements OnInit, OnDestroy {

  protected events: EventEmitter<Event> = new EventEmitter();

  abstract popupType: 'popover' | 'tooltip';

  abstract title: string | TemplateRef<any>;
  abstract content: string | TemplateRef<any>;
  abstract options: IPopupOptions;
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
    const options: any = Object.assign({}, this.options);
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
