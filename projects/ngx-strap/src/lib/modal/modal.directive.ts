import { Directive, OnInit, OnDestroy, TemplateRef, ApplicationRef, EmbeddedViewRef, Output, EventEmitter } from '@angular/core';
import { filter, take } from 'rxjs/operators';
declare const jQuery: any;

@Directive({
  selector: '[ngxStrapModal]',
  exportAs: 'ngxStrapModal'
})
export class ModalDirective implements OnInit, OnDestroy {

  @Output() events: EventEmitter<Event> = new EventEmitter();
  $el: any;


  constructor(
    private _appRef: ApplicationRef,
    private _templateRef: TemplateRef<any>
  ) { }

  get appRef(): ApplicationRef {
    return this._appRef;
  }

  get templateRef(): TemplateRef<any> {
    return this._templateRef;
  }
  ngOnInit() {
    console.log(this._templateRef);
  }

  ngOnDestroy() {
    this.hide();
  }

  show(): {shown: Promise<void>, hidden: Promise<void>} {
    const viewRef: EmbeddedViewRef<any> = this.templateRef.createEmbeddedView({modalDirective: this});
    this.appRef.attachView(viewRef);
    const el = viewRef.rootNodes[0];
    document.body.appendChild(el);
    this.$el = jQuery(el);
    this.$el.modal({show: false});
    this.$el.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', (event) => {
      this.events.emit(event);
    });
    const shown = new Promise<void>(resolve => {
      this.events
        .pipe(filter(e => 'shown' === e.type))
        .pipe(take(1))
        .subscribe(() => resolve());
    });
     const hidden = new Promise<void>(resolve => {
      this.events
        .pipe(filter(e => 'hidden' === e.type))
        .pipe(take(1))
        .subscribe(() => resolve());
    });


    hidden.then(() => {
      this.$el.off('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
      this.$el.modal('dispose');
      this.$el = null;
      document.body.removeChild(el);
      this.appRef.detachView(viewRef);
      viewRef.destroy();
    });

    this.$el.modal('show');
    return {
      shown: shown,
      hidden: hidden
    };
  }

  hide(): void {
    if (this.$el) {
      this.$el.modal('hide');
    }
  }

  handleUpdate(): void {
    if (this.$el) {
      this.$el.modal('handleUpdate');
    }
  }


}
