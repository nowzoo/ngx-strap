import {  fakeAsync, tick} from '@angular/core/testing';
import { NgxStrapModalDirective, NgxStrapModalStatus } from './modal.directive';
describe('NgxStrapModalDirective', () => {


  it('should create an instance', () => {
    const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
    expect(directive).toBeTruthy();
  });

  describe('ngOnDestroy()', () => {
    it('should call hide', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOn(directive, 'hide').and.returnValue(null);
      directive.ngOnDestroy();
      expect(directive.hide).toHaveBeenCalled();
    });
  });

  describe('hide()', () => {
    it('should return immediately if the modal is not instantiated', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, '$modal').and.returnValue(null);
      expect(directive.hide()).toBe(null);
    });
    it('should return a promise if the modal is instantiated', fakeAsync(() => {
      let resolved;
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      const $modal = {modal: jasmine.createSpy()};
      spyOnProperty(directive, '$modal').and.returnValue($modal);
      spyOnProperty(directive, 'hidden').and.returnValue(Promise.resolve());
      directive.hide().then(() => resolved = true);
      tick();
      expect(resolved).toBe(true);
      expect($modal.modal).toHaveBeenCalledWith('hide');
    }));
  });

  describe('handleUpdate()', () => {
    it('should return immediately if the modal is not instantiated', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, '$modal').and.returnValue(null);
      directive.handleUpdate();
    });
    it('should call handleUpdate on the instance if the modal is instantiated', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      const $modal = {modal: jasmine.createSpy()};
      spyOnProperty(directive, '$modal').and.returnValue($modal);
      directive.handleUpdate();
      expect($modal.modal).toHaveBeenCalledWith('handleUpdate');
    });
  });

  describe('_onModalHidden()', () => {
    let appRef, viewRef, $modal, directive;
    beforeEach(() => {
      appRef = {detachView: jasmine.createSpy()};
      viewRef = {destroy: jasmine.createSpy()};
      $modal = {off: jasmine.createSpy(), modal: jasmine.createSpy()};
      directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, 'appRef').and.returnValue(appRef);
      spyOnProperty(directive, 'viewRef').and.returnValue(viewRef);
      spyOnProperty(directive, '$modal').and.returnValue($modal);
    });
    it('should call modal.off', () => {
      directive._onModalHidden();
      expect($modal.off).toHaveBeenCalledWith(jasmine.any(String));
    });
    it('should call modal.modal() with dispose', () => {
      directive._onModalHidden();
      expect($modal.modal).toHaveBeenCalledWith('dispose');
    });
    it('should detach the view', () => {
      directive._onModalHidden();
      expect(appRef.detachView).toHaveBeenCalledWith(viewRef);
    });
    it('should destroy the view', () => {
      directive._onModalHidden();
      expect(viewRef.destroy).toHaveBeenCalledWith();
    });

  });

  describe('show()', () => {
    let appRef, viewRef, templateRef, $modal, directive, renderer;
    beforeEach(() => {
      viewRef = {rootNodes: [document.createElement('div')]};
      templateRef = {createEmbeddedView: jasmine.createSpy().and.returnValue(viewRef)};
      appRef = {attachView: jasmine.createSpy()};
      renderer = {appendChild: jasmine.createSpy()};
      $modal = {on: jasmine.createSpy(), modal: jasmine.createSpy()};
      directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, 'appRef').and.returnValue(appRef);
      spyOnProperty(directive, 'viewRef').and.returnValue(viewRef);
      spyOnProperty(directive, '$modal').and.returnValue($modal);
      spyOnProperty(directive, 'renderer').and.returnValue(renderer);
      spyOnProperty(directive, 'templateRef').and.returnValue(templateRef);
    });
    it('should set viewRef', () => {
      directive.show();
      expect(directive.viewRef).toBe(viewRef);
      expect(templateRef.createEmbeddedView).toHaveBeenCalledWith(null);
    });
    it('should attach the view', () => {
      directive.show();
      expect(appRef.attachView).toHaveBeenCalledWith(viewRef);
    });
    it('should insert the html in the body', () => {
      directive.show();
      expect(renderer.appendChild).toHaveBeenCalledWith(document.body, directive.modalElement);
    });
    it('should listen for events', () => {
      directive.show();
      expect($modal.on).toHaveBeenCalled();
    });
    it('should show the modal', () => {
      directive.show();
      expect($modal.modal).toHaveBeenCalledWith({show: true});
    });
    it('should return a promise that resolves when shown', fakeAsync(() => {
      spyOnProperty(directive, 'shown').and.returnValue(Promise.resolve());
      let shown;
      directive.show().then(() => shown = true);
      tick();
      expect(shown).toBe(true);
    }));
  });

  describe('_onModalEvent(event)', () => {
    let directive;
    let event;
    let lastEvent;
    let lastStatus;
    beforeEach(() => {

      directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOn(directive, '_onModalHidden').and.callFake(() => {});
      directive.events.subscribe(val => lastEvent = val);
      directive.status.subscribe(val => lastStatus = val);
    });
    it('should handle show', () => {
      event = new Event('show');
      directive._onModalEvent(event);
      expect(lastEvent.type).toBe('show');
      expect(lastStatus).toBe(NgxStrapModalStatus.showing);
      expect(directive._onModalHidden).not.toHaveBeenCalled();
    });
    it('should handle shown', () => {
      event = new Event('shown');
      directive._onModalEvent(event);
      expect(lastEvent.type).toBe('shown');
      expect(lastStatus).toBe(NgxStrapModalStatus.shown);
      expect(directive._onModalHidden).not.toHaveBeenCalled();
    });
    it('should handle hide', () => {
      event = new Event('hide');
      directive._onModalEvent(event);
      expect(lastEvent.type).toBe('hide');
      expect(lastStatus).toBe(NgxStrapModalStatus.hiding);
      expect(directive._onModalHidden).not.toHaveBeenCalled();
    });
    it('should handle hidden', () => {
      event = new Event('hidden');
      directive._onModalEvent(event);
      expect(lastEvent.type).toBe('hidden');
      expect(lastStatus).toBe(NgxStrapModalStatus.hidden);
      expect(directive._onModalHidden).toHaveBeenCalled();
    });

  });

  describe('events', () => {
    it('should track events', () => {
      let event;
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      directive.events.subscribe(val => event = val);
      directive._onModalEvent(new Event('shown'));
      expect(event.type).toBe('shown');
    });
  });
  describe('status', () => {
    it('should track events', () => {
      let status;
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      directive.status.subscribe(val => status = val);
      directive._onModalEvent(new Event('shown'));
      expect(status).toBe('shown');
    });
  });

  describe('shown', () => {
    it('should return a promise that resolves when the modal is shown', fakeAsync(() => {
      let resolved;
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      directive.shown.then(() => resolved = true);
      expect(resolved).not.toBeTruthy();
      directive._onModalEvent(new Event('show'));
      tick();
      expect(resolved).not.toBeTruthy();
      directive._onModalEvent(new Event('shown'));
      tick();
      expect(resolved).toBeTruthy();
    }));
  });
  describe('shown', () => {
    it('should return a promise that resolves when the modal is hidden', fakeAsync(() => {
      let resolved;
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOn(directive, '_onModalHidden').and.callFake(() => {});
      directive.hidden.then(() => resolved = true);
      expect(resolved).not.toBeTruthy();
      directive._onModalEvent(new Event('hide'));
      tick();
      expect(resolved).not.toBeTruthy();
      directive._onModalEvent(new Event('hidden'));
      tick();
      expect(resolved).toBeTruthy();
    }));
  });

  describe('$modal', () => {
    it('should return null if modalElement is null', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, 'modalElement').and.returnValue(null);
      expect(directive.$modal).toBe(null);
    });
    it('should return the jquery result if viewRef exists', () => {
      const jqr = {};
      const modalElement = document.createElement('div');
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      const jQuery = window['jQuery'] = jasmine.createSpy().and.returnValue(jqr);
      spyOnProperty(directive, 'modalElement').and.returnValue(modalElement);
      expect(directive.$modal).toBe(jqr);
      expect(jQuery).toHaveBeenCalledWith(modalElement);
    });
  });
  describe('modalElement', () => {
    it('should return null if viewRef is null', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, 'viewRef').and.returnValue(null);
      expect(directive.modalElement).toBe(null);
    });
    it('should return the viewRef.rootNodes[0] if viewRef exists', () => {
      const modalElement = document.createElement('div');
      const viewRef = {rootNodes: [modalElement]};
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      spyOnProperty(directive, 'viewRef').and.returnValue(viewRef);
      expect(directive.modalElement).toBe(modalElement);
    });
  });

  describe('viewRef', () => {
    it('should have a setter and a getter', () => {
      const directive = new NgxStrapModalDirective({} as any, {} as any, {} as any);
      const viewRef = {} as any;
      directive.viewRef = viewRef;
      expect(directive.viewRef).toBe(viewRef);
      directive.viewRef = null;
      expect(directive.viewRef).toBe(null);
    });
  });
  describe('templateRef', () => {
    it('should have a getter', () => {
      const templateRef = {} as any;
      const directive = new NgxStrapModalDirective(templateRef, {} as any, {} as any);
      expect(directive.templateRef).toBe(templateRef);
    });
  });
  describe('appRef', () => {
    it('should have a getter', () => {
      const appRef = {} as any;
      const directive = new NgxStrapModalDirective({} as any, appRef, {} as any);
      expect(directive.appRef).toBe(appRef);
    });
  });
  describe('renderer', () => {
    it('should have a getter', () => {
      const renderer = {} as any;
      const directive = new NgxStrapModalDirective({} as any, {} as any, renderer);
      expect(directive.renderer).toBe(renderer);
    });
  });
});
