import { Directive, AfterContentInit, OnDestroy,
  ElementRef, Output, Renderer2, NgZone, EventEmitter } from '@angular/core';
declare const jQuery: any;

@Directive({
  selector: '[ngxStrapDropdown]',
  exportAs: 'ngxStrapDropdown'
})
export class DropdownDirective implements OnDestroy, AfterContentInit {
  static idCounter = 0;
  @Output() events: EventEmitter<Event> = new EventEmitter();
  private _lastEvent: Event = null;
  listener: (event: Event) => void = null;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _ngZone: NgZone
  ) {
  }

  get el(): HTMLElement {

    return this._elementRef.nativeElement;
  }

  get $el(): any {
    return jQuery(this.el);
  }

  get renderer(): Renderer2 {
    return this._renderer;
  }
  get ngZone(): NgZone {
    return this._ngZone;
  }

  get eventNames(): string[] {
    return ['show', 'shown', 'hide', 'hidden'].map(s => `${s}.bs.dropdown`);
  }



  private set lastEvent(event: Event) {
    this._lastEvent = event;
    if (! event) {
      return;
    }
    this.events.emit(event);
  }

  get status(): string {
    return this._lastEvent ? this._lastEvent.type : 'hidden';
  }


  ngAfterContentInit() {
    this.init();
  }

  ngOnDestroy() {
    this.dispose();
  }

  init() {
    const toggleEl: HTMLElement = this.el.querySelector('[data-toggle="dropdown"]') || null;
    const menuEl: HTMLElement = this.el.querySelector('.dropdown-menu') || null;
    if ((! menuEl) || (! toggleEl)) {
      return;
    }
    const generatedId = `ngx-strap-dropdown-${++ DropdownDirective.idCounter}`;
    if (! this.el.getAttribute('id')) {
      this.renderer.setAttribute(this.el, 'id', generatedId);
    }
    if (! toggleEl.getAttribute('id')) {
      this.renderer.setAttribute(toggleEl, 'id', `${generatedId}-toggle`);
    }
    const toggleId = toggleEl.getAttribute('id');
    this.renderer.addClass(menuEl, 'dropdown-menu');
    this.renderer.setAttribute(menuEl, 'aria-labelledby', toggleId);
    this.renderer.setAttribute(toggleEl, 'aria-haspopup', 'true');
    this.renderer.setAttribute(toggleEl, 'aria-expanded', 'false');
    this.listener = (event: Event) => {
      this.ngZone.run(() => {
        this.lastEvent = event;
      });

    };
    this.$el.on(this.eventNames.join(' '), this.listener);
  }

  dispose() {
    if (this.listener) {
      this.$el.off(this.eventNames.join(' '), this.listener);
      this.listener = null;
    }
    this.$el.dropdown('dispose');
  }

}
