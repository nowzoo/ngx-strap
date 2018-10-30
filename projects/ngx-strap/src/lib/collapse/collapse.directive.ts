import { Directive, ElementRef, Input, Output, EventEmitter,
    OnInit, OnChanges, OnDestroy, SimpleChanges, Renderer2 } from '@angular/core';

declare const jQuery: any;
@Directive({
  selector: '[ngxStrapCollapse]'
})
export class CollapseDirective implements OnInit, OnChanges, OnDestroy {
  @Input() ngxStrapCollapse = false;
  @Output() events: EventEmitter<Event> = new EventEmitter();
  initialized = false;
  collapseListener: any;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
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

  get jQueryEvents(): string {
    return ['show', 'shown', 'hide', 'hidden'].map(t => `${t}.bs.collapse`).join(' ');
  }

  ngOnInit() {
    this.collapseListener = (event: Event) => this.events.emit(event);
    this.$el.on(this.jQueryEvents, this.collapseListener);
    this.renderer.addClass(this.el, 'collapse');
    this.$el.collapse({toggle: this.ngxStrapCollapse});
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (! this.initialized) {
      return;
    }

    if (! changes.ngxStrapCollapse) {
      return;
    }

    if (this.ngxStrapCollapse) {
      this.$el.collapse('show');
    } else {
      this.$el.collapse('hide');
    }
  }

  ngOnDestroy() {
    this.$el.off(this.jQueryEvents, this.collapseListener);
    this.$el.collapse('dispose');
  }

}
