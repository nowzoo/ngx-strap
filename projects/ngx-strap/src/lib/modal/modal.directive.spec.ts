import {  fakeAsync, tick} from '@angular/core/testing';
import { ModalDirective } from './modal.directive';
import { EventEmitter} from '@angular/core';
describe('ModalDirective', () => {
  let templateRef: any;
  let appRef: any;
  let renderer: any;
  let directive: ModalDirective;
  let jQuery: any;
  let $jqEl: any;
  let viewRef;
  let rawEl: HTMLElement;
  beforeEach(() => {
    rawEl = document.createElement('div');
    viewRef = {rootNodes: [rawEl], destroy: jasmine.createSpy()};
    $jqEl = {modal: jasmine.createSpy(), one: jasmine.createSpy().and.callFake((type, f) => {
      const listener = (e) => {
        f(e);
        rawEl.removeEventListener(type, listener);
      };
      rawEl.addEventListener(type, listener);
    })};
    jQuery = window['jQuery'] = () => $jqEl;
    templateRef = {
      createEmbeddedView: jasmine.createSpy().and.returnValue(viewRef)
    };
    appRef = {
      attachView: jasmine.createSpy(), detachView: jasmine.createSpy()
    };
    renderer = {
      appendChild: jasmine.createSpy()
    };
     directive = new ModalDirective(templateRef, appRef, renderer);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnDestroy()', () => {
    it('should hide the modal if it has been shown', () => {
      spyOn(window as any, 'jQuery').and.callThrough();
      directive.modalElement = $jqEl as any;
      directive.ngOnDestroy();
      expect(window['jQuery']).toHaveBeenCalledWith($jqEl);
      expect($jqEl.modal).toHaveBeenCalledWith('hide');
    });
  });

  describe('onModalHidden()', () => {
    beforeEach(() => {
      directive.$modalElement = $jqEl;
      directive.viewRef = viewRef;
    });
    it('should dispose the modal', () => {
      directive.onModalHidden();
      expect($jqEl.modal).toHaveBeenCalledWith('dispose');
    });
    it('should detach the view', () => {
      directive.onModalHidden();
      expect(appRef.detachView).toHaveBeenCalledWith(viewRef);
    });
    it('should destroy the view', () => {
      directive.onModalHidden();
      expect(viewRef.destroy).toHaveBeenCalledWith();
    });
    it('should set viewRef to null', () => {
      directive.onModalHidden();
      expect(directive.viewRef).toBe(null);
    });
    it('should set modalElement to null', () => {
      directive.onModalHidden();
      expect(directive.modalElement).toBe(null);
    });
    it('should set $modalElement to null', () => {
      directive.onModalHidden();
      expect(directive.$modalElement).toBe(null);
    });
  });

  describe('show()', () => {
    it('should create an embedded view', () => {
      directive.show();
      expect(templateRef.createEmbeddedView).toHaveBeenCalledWith(null);
    });
    it('should attach the embedded view', () => {
      directive.show();
      expect(appRef.attachView).toHaveBeenCalledWith(viewRef);
    });
    it('should set directive.modalElement', () => {
      directive.show();
      expect(directive.modalElement).toBe(viewRef.rootNodes[0]);
    });
    it('should set append the modal el to the body', () => {
      directive.show();
      expect(renderer.appendChild).toHaveBeenCalledWith(document.body, directive.modalElement);
    });
    it('should pass the show event to the event emitter', () => {
      directive.show();
      expect($jqEl.one).toHaveBeenCalledWith('show.bs.modal', jasmine.any(Function));
    });
    it('should pass the shown event to the event emitter', () => {
      directive.show();
      expect($jqEl.one).toHaveBeenCalledWith('shown.bs.modal', jasmine.any(Function));
    });
    it('should pass the hide event to the event emitter', () => {
      directive.show();
      expect($jqEl.one).toHaveBeenCalledWith('hide.bs.modal', jasmine.any(Function));
    });
    it('should pass the hidden event to the event emitter', () => {
      directive.show();
      expect($jqEl.one).toHaveBeenCalledWith('hidden.bs.modal', jasmine.any(Function));
    });
    it('should return an object with events property', () => {
      const instance = directive.show();
      expect(instance.events).toBeTruthy();
    });
    it('should return an object with a shown promise', () => {
      const instance = directive.show();
      expect(instance.shown.then).toBeTruthy();
    });
    it('should return an object with a hidden promise', () => {
      const instance = directive.show();
      expect(instance.hidden.then).toBeTruthy();
    });
    it('should return an object with a hide function', () => {
      const instance = directive.show();
      expect(instance.hide).toEqual(jasmine.any(Function));
    });
    it('should return an object with a handleUpdate function', () => {
      const instance = directive.show();
      expect(instance.handleUpdate).toEqual(jasmine.any(Function));
    });

    it('should have a hide function that calls hide on the modal ', fakeAsync(() => {
      const instance = directive.show();
      instance.hide();
      expect($jqEl.modal).toHaveBeenCalledWith('hide');
    }));
    it('should have a handleUpdate function that calls handleUpdate on the modal ', fakeAsync(() => {
      const instance = directive.show();
      instance.handleUpdate();
      expect($jqEl.modal).toHaveBeenCalledWith('handleUpdate');
    }));
  });

  describe('createShownPromise(events)', () => {
    it('should return a promise that resolves when the event type is shown ', fakeAsync(() => {
      let resolved;
      const events: EventEmitter<any> = new EventEmitter();
      const promise = directive.createShownPromise(events);
      promise.then(() => resolved = true);
      expect(resolved).toBeFalsy();
      events.emit({type: 'shown'});
      tick();
      expect(resolved).toBe(true);

    }));
  });
  describe('createHiddenPromise(events)', () => {
    it('should return a promise that resolves when the event type is hidden ', fakeAsync(() => {
      let resolved;
      const events: EventEmitter<any> = new EventEmitter();
      const promise = directive.createHiddenPromise(events);
      promise.then(() => resolved = true);
      expect(resolved).toBeFalsy();
      events.emit({type: 'hidden'});
      tick();
      expect(resolved).toBe(true);

    }));
  });

  describe('testing event triggers', () => {
    let instance;
    beforeEach(() => {
      instance = directive.show();
      spyOn(instance.events, 'emit');
      spyOn(directive, 'onModalHidden').and.callFake(() => {});
    });
    it('should pass along the show event to the emitter', () => {
      const event: Event = new Event('show.bs.modal');
      rawEl.dispatchEvent(event);
      expect(instance.events.emit).toHaveBeenCalledWith(event);
    });
    it('should pass along the shown event to the emitter', () => {
      const event: Event = new Event('shown.bs.modal');
      rawEl.dispatchEvent(event);
      expect(instance.events.emit).toHaveBeenCalledWith(event);
    });
    it('should pass along the hide event to the emitter', () => {
      const event: Event = new Event('hide.bs.modal');
      rawEl.dispatchEvent(event);
      expect(instance.events.emit).toHaveBeenCalledWith(event);
    });
    it('should pass along the hidden event to the emitter', () => {
      const event: Event = new Event('hidden.bs.modal');
      rawEl.dispatchEvent(event);
      expect(instance.events.emit).toHaveBeenCalledWith(event);
    });
    it('should call onModalHidden on hidden', () => {
      const event: Event = new Event('hidden.bs.modal');
      rawEl.dispatchEvent(event);
      expect(directive.onModalHidden).toHaveBeenCalledWith();
    });
  });
});
