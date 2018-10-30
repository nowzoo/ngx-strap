import { Directive, OnInit, OnDestroy, Input, OnChanges,
  ElementRef, Output, Renderer2, NgZone, EventEmitter } from '@angular/core';
declare const jQuery: any;

@Directive({
  selector: '[appCollapseToggle]'
})
export class CollapseToggleDirective implements OnInit, OnChanges, OnDestroy {
  @Input() ngxStrapCollapse = false;
  // tslint:disable-next-line:no-input-rename
  @Input('data-target') dataTarget = null;
  @Output() events: EventEmitter<Event> = new EventEmitter();
  private _lastEvent: Event = null;
  listener: (event: Event) => void = null;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _ngZone: NgZone
  ) { }

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
    return ['show', 'shown', 'hide', 'hidden'].map(s => `${s}.bs.collapse`);
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

  get instance(): any {
    return this.$el.data('bs.collapse');
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.update();
  }



  ngOnDestroy() {
    this.$el.off(this.eventNames.join(' '), this.listener);
    this.$el.collapse('dispose');
  }

  update() {
    if (this.instance) {
      this.$el.collapse(this.ngxStrapCollapse ? 'show' : 'hide');
    }
  }

  init() {
    this.listener = (event: Event) => {
      this.ngZone.run(() => {
        this.lastEvent = event;
      });
    };
    this.$el.on(this.eventNames.join(' '), this.listener);
    this.renderer.addClass(this.el, 'collapse');
    this.$el.collapse({toggle: this.ngxStrapCollapse});
    this.update();
  }

}
