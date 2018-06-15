import { NgxStrapAbstractPopupDirective } from './abstract-popup.directive';
import {  fakeAsync, tick} from '@angular/core/testing';
import { TemplateRef } from '@angular/core';
class PopupImpl extends NgxStrapAbstractPopupDirective {
  constructor(elRef, viewContainerRef, renderer) {
    super(
      elRef,
      viewContainerRef,
      renderer,
      'tooltip',
      {}
    );
  }
  updateDisplayOptions() {
    return {};
  }
}

class MockTemplateRef extends TemplateRef<any> {
  get elementRef() {
    return {} as any;
  }
  createEmbeddedView(context) {
    return {rootNodes: [document.createElement('span')]} as any;
  }
}
describe('NgxStrapAbstractPopupDirective', () => {
  let el;
  let elementRef: any;
  let directive: NgxStrapAbstractPopupDirective;
  let directiveForTesting: any;
  let jQuery: any;
  let jqEl;
  let viewContainerRef: any;
  let templateRef: MockTemplateRef;
  let renderer: any;
  let popupInstance;

  beforeEach(() => {
    popupInstance = {};
    renderer = {
      createElement: jasmine.createSpy().and.returnValue(document.createElement('div')),
      addClass: jasmine.createSpy(),
      appendChild: jasmine.createSpy()
    };
    viewContainerRef = {createEmbeddedView: jasmine.createSpy().and.returnValue({
      rootNodes: [document.createElement('span')],
      detach: jasmine.createSpy()
    })};
    templateRef = new MockTemplateRef();
    jqEl = {
      popover: jasmine.createSpy(),
      tooltip: jasmine.createSpy(),
      data: jasmine.createSpy().and.returnValue(popupInstance),
      on: jasmine.createSpy().and.callFake((type, f) => {
      const listener = (e) => {
        f(e);
      };
      const types = type.split(' ');
      types.forEach((t) => {
        const name = t.split('.').shift();
        el.addEventListener(name, listener);
      });

    })};
    jQuery = window['jQuery'] = jasmine.createSpy().and.returnValue(jqEl);
    el =  document.createElement('span');
    elementRef = {nativeElement: el};
    directive = new PopupImpl(elementRef, viewContainerRef, renderer);
    directiveForTesting = directive;
    directive.ngOnInit();
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set up _$el', () => {
      expect(jQuery).toHaveBeenCalledWith(elementRef.nativeElement);
      expect(directiveForTesting._$el).toBe(jqEl);
    });
    it('should pass events to the event emitter', () => {
      spyOn(directive.events, 'emit').and.callThrough();
      expect(jqEl.on).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
      let eventFromDom;
      eventFromDom = new Event('show');
      el.dispatchEvent(eventFromDom);
      expect(directive.events.emit).toHaveBeenCalledWith(eventFromDom);
      eventFromDom = new Event('shown');
      el.dispatchEvent(eventFromDom);
      expect(directive.events.emit).toHaveBeenCalledWith(eventFromDom);
      eventFromDom = new Event('hide');
      el.dispatchEvent(eventFromDom);
      expect(directive.events.emit).toHaveBeenCalledWith(eventFromDom);
      eventFromDom = new Event('hidden');
      el.dispatchEvent(eventFromDom);
      expect(directive.events.emit).toHaveBeenCalledWith(eventFromDom);
    });
    it('should set the state', () => {
      expect(jqEl.on).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
      let eventFromDom;
      eventFromDom = new Event('show');
      el.dispatchEvent(eventFromDom);
      expect(directive.state).toBe('showing');
      eventFromDom = new Event('shown');
      el.dispatchEvent(eventFromDom);
      expect(directive.state).toBe('shown');
      eventFromDom = new Event('hide');
      el.dispatchEvent(eventFromDom);
      expect(directive.state).toBe('hiding');
      eventFromDom = new Event('hidden');
      el.dispatchEvent(eventFromDom);
      expect(directive.state).toBe('hidden');
    });
  });

  describe('ngOnDestroy', () => {
    it('should dispose the popup', () => {
      spyOn(directive, 'dispose').and.callFake(() => {});
      directive.ngOnDestroy();
      expect(directive.dispose).toHaveBeenCalledWith();
    });
  });

  describe('dispose()', () => {
    it('should call dispose on the bootstrap popup', () => {
      directive.dispose();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('dispose');
    });
  });
  describe('show()', () => {
    it('should call show on the bootstrap popup', () => {
      directive.show();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('show');
    });
    it('should return a promise that resolves when the popup is shown', fakeAsync(() => {
      let resolved;
      directive.show().then(() => resolved = true);
      expect(resolved).not.toBe(true);
      directive.events.emit({type: 'shown'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });

  describe('hide()', () => {
    it('should call hide on the bootstrap popup', () => {
      directive.hide();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('hide');
    });
    it('should return a promise that resolves when the popup is hidden', fakeAsync(() => {
      let resolved;
      directive.hide().then(() => resolved = true);
      expect(resolved).not.toBe(true);
      directive.events.emit({type: 'hidden'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });
  describe('toggle()', () => {
    it('should call toggle on the bootstrap popup', () => {
      directive.toggle();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('toggle');
    });
    it('should return a promise that resolves when the popup is toggled if we are hiding', fakeAsync(() => {
      let resolved;
      directive.toggle().then(() => resolved = true);
      expect(resolved).not.toBe(true);
      directive.events.emit({type: 'hidden'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
    it('should return a promise that resolves when the popup is toggled if we are showing', fakeAsync(() => {
      let resolved;
      directive.toggle().then(() => resolved = true);
      expect(resolved).not.toBe(true);
      directive.events.emit({type: 'shown'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });
  describe('enable()', () => {
    it('should call enable on the bootstrap popup', () => {
      directive.enable();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('enable');
    });
  });
  describe('disable()', () => {
    it('should call disable on the bootstrap popup', () => {
      directive.disable();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('disable');
    });
  });

  // toggleEnabled
  describe('toggleEnabled()', () => {
    it('should call toggleEnabled on the bootstrap popup', () => {
      directive.toggleEnabled();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('toggleEnabled');
    });
  });

  // update
  describe('update()', () => {
    it('should call update on the bootstrap popup', () => {
      directive.update();
      expect(jqEl[directiveForTesting._popupFlavor]).toHaveBeenCalledWith('update');
    });
  });

  describe('getDisplayOption(value, name)', () => {
    it('should return the value if it is a string', () => {
      const result = directiveForTesting.getDisplayOption('foo bar', 'title');
      expect(result).toBe('foo bar');
    });
    it('should return the value if it is a function', () => {
      const f = () => 'foo bar';
      const result = directiveForTesting.getDisplayOption(f, 'title');
      expect(result).toBe(f);
    });
    it('should return the value if it is an element', () => {
      const elToPass = document.createElement('span');
      const result = directiveForTesting.getDisplayOption(elToPass, 'title');
      expect(result).toBe(elToPass);
    });
    it('should clean up the old view ref, if it exists', () => {
      const viewRef: any = {
        detach: jasmine.createSpy(),
        destroy: jasmine.createSpy()
      };
      directiveForTesting._embeddedViewRefs.set('title', viewRef);
      const result = directiveForTesting.getDisplayOption('foo bar', 'title');
      expect(viewRef.detach).toHaveBeenCalledWith();
      expect(viewRef.destroy).toHaveBeenCalledWith();
      expect(directiveForTesting._embeddedViewRefs.get('title')).toBe(undefined);
    });

    it('should return an HTMLElement if passed a TemplateRef', () => {
      const result = directiveForTesting.getDisplayOption(templateRef, 'title');
      expect(result).toEqual(jasmine.any(HTMLElement));
    });
    it('should add a view to _embeddedViewRefs', () => {
      const result = directiveForTesting.getDisplayOption(templateRef, 'title');
      expect(directiveForTesting._embeddedViewRefs.get('title')).not.toBe(undefined);
    });
  });

});
