import {
  Directive,
  OnDestroy,
  TemplateRef,
  EmbeddedViewRef,
  ApplicationRef,
  Renderer2
} from '@angular/core';
import {
  filter, take
} from 'rxjs/operators';
import {
  BehaviorSubject,
  Subject,
  Observable
} from 'rxjs';

declare const jQuery: any;
export enum NgxStrapModalStatus {
  hidden = 'hidden',
  showing = 'showing',
  shown = 'shown',
  hiding = 'hiding'
}

@Directive({
  selector: '[ngxStrapModal]',
  exportAs: 'ngxStrapModal'
})
export class NgxStrapModalDirective implements OnDestroy {

  private _viewRef: EmbeddedViewRef<any> = null;
  private _events$: Subject<Event> = new Subject();
  private _status$: BehaviorSubject<NgxStrapModalStatus> = new BehaviorSubject(NgxStrapModalStatus.hidden);

  get events(): Observable<Event> {
    return this._events$.asObservable();
  }

  get status(): Observable<NgxStrapModalStatus> {
    return this._status$.asObservable();
  }

  get shown(): Promise<Event> {
    return new Promise<Event>(resolve => {
      this._events$
        .pipe(filter(e => 'shown' === e.type))
        .pipe(take(1))
        .subscribe(resolve);
    });
  }

  get hidden(): Promise<Event> {
    return new Promise<Event>(resolve => {
      this._events$
        .pipe(filter(e => 'hidden' === e.type))
        .pipe(take(1))
        .subscribe(resolve);
    });
  }
  get $modal(): any {
    if (! this.modalElement) {
      return null;
    }
    return jQuery(this.modalElement);
  }


  get modalElement(): HTMLElement {
    if (! this.viewRef) {
      return null;
    }
    return this.viewRef.rootNodes[0] as HTMLElement;
  }

  set viewRef(viewRef: EmbeddedViewRef<any>) {
    this._viewRef = viewRef;
  }
  get viewRef(): EmbeddedViewRef<any> {
    return this._viewRef;
  }

  get templateRef(): TemplateRef<any> {
    return this._templateRef;
  }

  get appRef(): ApplicationRef {
    return this._appRef;
  }

  get renderer(): Renderer2 {
    return this._renderer;
  }





  constructor(
    private _templateRef: TemplateRef<any>,
    private _appRef: ApplicationRef,
    private _renderer: Renderer2
  ) { }

  ngOnDestroy() {
    this.hide();
  }

  show(): Promise<Event> {
    this.viewRef = this.templateRef.createEmbeddedView(null);
    this.appRef.attachView(this.viewRef);
    this.renderer.appendChild(document.body, this.modalElement);
    this.$modal.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', this._onModalEvent.bind(this));
    this.$modal.modal({show: true});
    return this.shown;
  }

  hide(): Promise<Event> | null {
    if (this.$modal) {
      this.$modal.modal('hide');
      return this.hidden;
    }
    return null;
  }

  handleUpdate() {
    if (this.$modal) {
      this.$modal.modal('handleUpdate');
    }
  }

  _onModalHidden() {
    this.$modal.off('show.bs.modal shown.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
    this.$modal.modal('dispose');
    this.appRef.detachView(this.viewRef);
    this.viewRef.destroy();
    this.viewRef = null;
  }

  _onModalEvent(event: Event) {
    this._events$.next(event);
    const bsEventTypesToStatus = {
      hidden: NgxStrapModalStatus.hidden,
      show: NgxStrapModalStatus.showing,
      shown: NgxStrapModalStatus.shown,
      hide: NgxStrapModalStatus.hiding
    };
    if (bsEventTypesToStatus[event.type]) {
      this._status$.next(bsEventTypesToStatus[event.type]);
    }
    if ('hidden' === event.type) {
      this._onModalHidden();
    }
  }


}
