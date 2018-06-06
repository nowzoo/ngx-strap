import { Directive, OnInit, TemplateRef, EmbeddedViewRef, ApplicationRef, Renderer2 , EventEmitter} from '@angular/core';
import { filter } from 'rxjs/operators';
import { IModalInstance } from './modal-instance.interface';

declare const jQuery: any;
@Directive({
  selector: '[ngxBootstrapModal]',
  exportAs: 'ngxBootstrapModal'
})
export class ModalDirective {

  modalElement: HTMLElement = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private appRef: ApplicationRef,
    private renderer: Renderer2
  ) { }

  show(): IModalInstance {
    const viewRef: EmbeddedViewRef<any> = this.templateRef.createEmbeddedView(null);
    this.appRef.attachView(viewRef);
    this.modalElement = viewRef.rootNodes[0] as HTMLElement;
    this.renderer.appendChild(document.body, this.modalElement);
    const $modalElement = jQuery(this.modalElement);
    const events: EventEmitter<Event> = new EventEmitter();
    $modalElement.one('show.bs.modal', events.emit);
    $modalElement.one('shown.bs.modal', events.emit);
    $modalElement.one('hide.bs.modal', events.emit);
    $modalElement.one('hidden.bs.modal', events.emit);
    $modalElement.on('hidden.bs.modal', () => {
      $modalElement.modal('dispose');
      this.appRef.detachView(viewRef);
      viewRef.destroy();
    });
    const shown: Promise<void> = new Promise(resolve => {
      const sub = events.pipe(filter(e => 'shown' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
    const hidden: Promise<void> = new Promise(resolve => {
      const sub = events.pipe(filter(e => 'hidden' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
    const hide = () => {
      $modalElement.modal('hide');
    };
    const handleUpdate = () => {
      $modalElement.modal('handleUpdate');
    };
    $modalElement.modal({show: true});
    return {
      events: events,
      shown: shown,
      hidden: hidden,
      hide: hide,
      handleUpdate: handleUpdate
    };
  }

}
