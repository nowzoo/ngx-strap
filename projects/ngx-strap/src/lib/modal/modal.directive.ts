import { Directive, OnDestroy,
  TemplateRef, EmbeddedViewRef, ApplicationRef, Renderer2 , EventEmitter} from '@angular/core';
import { filter } from 'rxjs/operators';
import { IModalInstance } from './modal-instance.interface';

declare const jQuery: any;
@Directive({
  selector: '[ngxStrapModal]',
  exportAs: 'ngxStrapModal'
})
export class ModalDirective implements OnDestroy {

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
    $modalElement.one('show.bs.modal', e => events.emit(e));
    $modalElement.one('shown.bs.modal', e => events.emit(e));
    $modalElement.one('hide.bs.modal', e => events.emit(e));
    $modalElement.one('hidden.bs.modal', e => events.emit(e));
    $modalElement.on('hidden.bs.modal', () => {
      $modalElement.modal('dispose');
      this.appRef.detachView(viewRef);
      viewRef.destroy();
      this.modalElement = null;
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

  ngOnDestroy() {
    if (this.modalElement) {
      jQuery(this.modalElement).modal('hide');
    }
  }

}
