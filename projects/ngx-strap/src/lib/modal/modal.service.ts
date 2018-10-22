import { Injectable, TemplateRef, ApplicationRef, EmbeddedViewRef, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil, take } from 'rxjs/operators';
import { IModalInstance, IModalOptions } from './shared';

declare const jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private _appRef: ApplicationRef,
    private _router: Router,
  ) { }

  get appRef(): ApplicationRef {
    return this._appRef;
  }

  get router(): Router {
    return this._router;
  }

  show(templateRef: TemplateRef<any>, opts?: IModalOptions): IModalInstance {
    const options: IModalOptions = this.mergeOptions(opts);
    const viewRef: EmbeddedViewRef<any> = templateRef.createEmbeddedView(null);
    this.appRef.attachView(viewRef);
    const domElem: HTMLElement = viewRef.rootNodes[0];
    document.body.appendChild(domElem);
    const $elem = jQuery(domElem);
    $elem.modal(Object.assign({}, options, {show: false}));
    const events: EventEmitter<Event> = new EventEmitter();
    $elem.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', (event) => {
      events.emit(event);
    });
    const shown: Promise<void> = new Promise(resolve => {
      events
        .pipe(filter(e => 'shown' === e.type))
        .pipe(take(1))
        .subscribe(() => resolve());
    });
    const hidden: Promise<void> = new Promise(resolve => {
      events
        .pipe(filter(e => 'hidden' === e.type))
        .pipe(take(1))
        .subscribe(() => resolve());
    });

    const subj$: Subject<void> = new Subject();
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .pipe(takeUntil(subj$))
      .subscribe(() => {
        if (options.dismissOnRouteChange) {
          $elem.modal('hide');
        }
      });

    hidden.then(() => {
      subj$.next();
      subj$.complete();
      document.body.removeChild(domElem);
      this.appRef.detachView(viewRef);
      viewRef.destroy();
    });

    $elem.modal('show');

    return {
      events: events,
      hide: () => $elem.modal('hide'),
      handleUpdate: () => $elem.modal('handleUpdate'),
      shown: shown,
      hidden: hidden
    };
  }

  mergeOptions(opts?: IModalOptions): IModalOptions {
    const baseOptions: IModalOptions = {
      dismissOnRouteChange: true,
      backdrop: true,
      keyboard: true,
      focus: true
    };
    opts = opts || {};
    return Object.assign({}, baseOptions, opts);
  }
}
