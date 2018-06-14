import { BaseTooltipDirective } from './base-tooltip.directive';
import {  fakeAsync, tick} from '@angular/core/testing';

class TooltipImpl extends BaseTooltipDirective {}
describe('BaseTooltipDirective', () => {
  let el;
  let elementRef: any;
  let directive: BaseTooltipDirective;
  let directiveForTesting: any;
  let jQuery: any;
  let jqEl;

  beforeEach(() => {
    jqEl = {tooltip: jasmine.createSpy(), on: jasmine.createSpy().and.callFake((type, f) => {
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
    directive = new TooltipImpl({}, elementRef);
    directiveForTesting = directive;
    directive.ngOnInit();
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set up $el', () => {
      expect(jQuery).toHaveBeenCalledWith(elementRef.nativeElement);
      expect(directiveForTesting.$el).toBe(jqEl);
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
  });

  describe('ngOnDestroy', () => {
    it('should dispose the tooltip', () => {
      spyOn(directive, 'dispose').and.callFake(() => {});
      directive.ngOnDestroy();
      expect(directive.dispose).toHaveBeenCalledWith();
    });
  });

  describe('dispose()', () => {
    it('should call dispose on the bootstrap tooltip', () => {
      directive.dispose();
      expect(jqEl.tooltip).toHaveBeenCalledWith('dispose');
    });
  });
  describe('show()', () => {
    it('should call show on the bootstrap tooltip', () => {
      directive.show();
      expect(jqEl.tooltip).toHaveBeenCalledWith('show');
    });
    it('should return a promise that resolves when the tooltip is shown', fakeAsync(() => {
      let resolved;
      directive.show().then(() => resolved = true);
      directive.events.emit({type: 'shown'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });

  describe('hide()', () => {
    it('should call hide on the bootstrap tooltip', () => {
      directive.hide();
      expect(jqEl.tooltip).toHaveBeenCalledWith('hide');
    });
    it('should return a promise that resolves when the tooltip is hidden', fakeAsync(() => {
      let resolved;
      directive.hide().then(() => resolved = true);
      directive.events.emit({type: 'hidden'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });
  describe('toggle()', () => {
    it('should call toggle on the bootstrap tooltip', () => {
      directive.toggle();
      expect(jqEl.tooltip).toHaveBeenCalledWith('toggle');
    });
    it('should return a promise that resolves when the tooltip is toggled if we are hiding', fakeAsync(() => {
      let resolved;
      directive.toggle().then(() => resolved = true);
      directive.events.emit({type: 'hidden'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
    it('should return a promise that resolves when the tooltip is toggled if we are showing', fakeAsync(() => {
      let resolved;
      directive.toggle().then(() => resolved = true);
      directive.events.emit({type: 'shown'} as Event);
      tick();
      expect(resolved).toBe(true);
    }));
  });
  describe('enable()', () => {
    it('should call enable on the bootstrap tooltip', () => {
      directive.enable();
      expect(jqEl.tooltip).toHaveBeenCalledWith('enable');
    });
  });
  describe('disable()', () => {
    it('should call disable on the bootstrap tooltip', () => {
      directive.disable();
      expect(jqEl.tooltip).toHaveBeenCalledWith('disable');
    });
  });

  // toggleEnabled
  describe('toggleEnabled()', () => {
    it('should call toggleEnabled on the bootstrap tooltip', () => {
      directive.toggleEnabled();
      expect(jqEl.tooltip).toHaveBeenCalledWith('toggleEnabled');
    });
  });

  // update
  describe('update()', () => {
    it('should call update on the bootstrap tooltip', () => {
      directive.update();
      expect(jqEl.tooltip).toHaveBeenCalledWith('update');
    });
  });

});
