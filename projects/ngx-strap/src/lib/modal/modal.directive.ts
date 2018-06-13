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

  viewRef: EmbeddedViewRef<any> = null;
  modalElement: HTMLElement = null;
  $modalElement: any = null;
  constructor(
    private templateRef: TemplateRef<any>,
    private appRef: ApplicationRef,
    private renderer: Renderer2
  ) {
  }

  show(): IModalInstance {
    this.viewRef = this.templateRef.createEmbeddedView(null);
    this.appRef.attachView(this.viewRef);
    this.modalElement = this.viewRef.rootNodes[0] as HTMLElement;
    this.renderer.appendChild(document.body, this.modalElement);
    this.$modalElement = jQuery(this.modalElement);
    const events: EventEmitter<Event> = new EventEmitter();
    this.$modalElement.one('show.bs.modal', (e) => events.emit(e));
    this.$modalElement.one('shown.bs.modal', (e) => events.emit(e));
    this.$modalElement.one('hide.bs.modal', (e) => events.emit(e));
    this.$modalElement.one('hidden.bs.modal', (e) => events.emit(e));
    this.$modalElement.one('hidden.bs.modal', (e) => this.onModalHidden());
    this.$modalElement.modal({show: true});
    return {
      events: events,
      shown: this.createShownPromise(events),
      hidden: this.createHiddenPromise(events),
      hide: () => { this.$modalElement.modal('hide'); },
      handleUpdate: () =>  { this.$modalElement.modal('handleUpdate'); },
    };
  }

  onModalHidden() {
    this.$modalElement.modal('dispose');
    this.appRef.detachView(this.viewRef);
    this.viewRef.destroy();
    this.viewRef = null;
    this.modalElement = null;
    this.$modalElement = null;

  }

  ngOnDestroy() {
    if (this.modalElement) {
      jQuery(this.modalElement).modal('hide');
    }
  }
  createShownPromise(events: EventEmitter<Event>): Promise<void> {
    return new Promise(resolve => {
      const sub = events.pipe(filter(e => 'shown' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
  }

  createHiddenPromise(events: EventEmitter<Event>): Promise<void> {
    return new Promise(resolve => {
      const sub = events.pipe(filter(e => 'hidden' === e.type))
        .subscribe(() => {
          sub.unsubscribe();
          resolve();
        });
    });
  }
}
