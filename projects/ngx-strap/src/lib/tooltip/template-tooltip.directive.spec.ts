import { TemplateTooltipDirective } from './template-tooltip.directive';
import {  TemplateRef } from '@angular/core';

describe('TemplateTooltipDirective', () => {
  let el;
  let elementRef: any;
  let directive: TemplateTooltipDirective;
  let directiveForTesting: any;
  let jQuery: any;
  let jqEl;
  let viewContainerRef: any;
  let templateRef;
  let viewRef;

  beforeEach(() => {
    viewRef = {
      rootNodes: [document.createElement('div')], detach: jasmine.createSpy(),
      attach: jasmine.createSpy(),
      reattach: jasmine.createSpy()
    };
    viewContainerRef = {createEmbeddedView: jasmine.createSpy().and.returnValue(viewRef)};
    templateRef = {};

    jqEl = {tooltip: jasmine.createSpy(), on: jasmine.createSpy().and.callFake((type, f) => {
      const listener = (e) => {
        f(e);
      };
      const types = type.split(' ');
      types.forEach((t) => {
          el.addEventListener(t, listener);
      });

    })};
    jQuery = window['jQuery'] = jasmine.createSpy().and.returnValue(jqEl);
    el =  document.createElement('span');
    elementRef = {nativeElement: el};
    directive = new TemplateTooltipDirective(elementRef, viewContainerRef);
    directiveForTesting = directive;
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      spyOn(directiveForTesting, 'updateOnChange').and.callFake(() => {});
      spyOn(directiveForTesting, 'handleEvent').and.callFake(() => {});
    });
    it('should call super', () => {
      directive.ngOnInit();
      expect(directiveForTesting.$el).toBe(jqEl);
    });
    it('should call updateOnChange', () => {
      directive.ngOnInit();
      expect(directiveForTesting.updateOnChange).toHaveBeenCalled();
    });
    it('should call handleEvent on events', () => {
      directive.ngOnInit();
      const eventFromDom = new Event('show.bs.tooltip');
      el.dispatchEvent(eventFromDom);
      expect(directiveForTesting.handleEvent).toHaveBeenCalledWith(eventFromDom);
    });
  });

  describe('ngOnChanges()', () => {
    beforeEach(() => {
      spyOn(directiveForTesting, 'updateOnChange').and.callFake(() => {});
    });
    it('should not call updateOnChange if bsTooltipInstance is null', () => {
      directiveForTesting.bsTooltipInstance = null;
      directive.ngOnChanges();
      expect(directiveForTesting.updateOnChange).not.toHaveBeenCalled();
    });
    it('should call updateOnChange if bsTooltipInstance is not null', () => {
      directiveForTesting.bsTooltipInstance = {};
      directive.ngOnChanges();
      expect(directiveForTesting.updateOnChange).toHaveBeenCalled();
    });
  });

  describe('updateOnChange()', () => {
    beforeEach(() => {
      spyOn(directiveForTesting, 'dispose').and.callFake(() => {});
      jQuery.and.returnValue({
        append: jasmine.createSpy(),
        get: () => document.createElement('div')
      });
      directiveForTesting.$el = jqEl;
    });
    it('should not call dispose if the tooltip instance exists', () => {
      directiveForTesting.bsTooltipInstance = null;
      directiveForTesting.updateOnChange();
      expect(directiveForTesting.dispose).not.toHaveBeenCalledWith();
    });
    it('should call dispose if the tooltip instance exists', () => {
      directiveForTesting.bsTooltipInstance = {};
      directiveForTesting.updateOnChange();
      expect(directiveForTesting.dispose).toHaveBeenCalledWith();
    });
    it('should bail if the template does not exist', () => {
      directiveForTesting.ngxStrapTemplateTooltip = null;
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).not.toHaveBeenCalled();
    });

    it('should handle ngxStrapTemplateTooltip input', () => {
      directive.options = {animation: false};
      directive.ngxStrapTemplateTooltip = templateRef;
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).toHaveBeenCalledWith({animation: false, title: jasmine.any(Object), html: true});
    });
    it('should handle no options', () => {
      directive.options = null;
      directive.ngxStrapTemplateTooltip = templateRef;
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).toHaveBeenCalledWith({title: jasmine.any(Object), html: true});
    });

  });
  describe('dispose', () => {
    it('should call dispose on the bootstrap tooltip', () => {
      directiveForTesting.$el = jqEl;
      directiveForTesting.embeddedViewRef = viewRef;
      directive.dispose();
      expect(jqEl.tooltip).toHaveBeenCalledWith('dispose');
    });
    it('should detach the view', () => {
      directiveForTesting.$el = jqEl;
      directiveForTesting.embeddedViewRef = viewRef;
      directive.dispose();
      expect(directiveForTesting.embeddedViewRef.detach).toHaveBeenCalledWith();
    });
  });

  describe('handleEvent(events)', () => {
    beforeEach(() => {
      directiveForTesting.$el = jqEl;
      directiveForTesting.embeddedViewRef = viewRef;
    });
    it('should detach when hidden', () => {
      const eventFromDom = new Event('hidden');
      directiveForTesting.handleEvent(eventFromDom);
      expect(directiveForTesting.embeddedViewRef.detach).toHaveBeenCalledWith();
    });
    it('should attach on show', () => {
      const eventFromDom = new Event('show');
      directiveForTesting.handleEvent(eventFromDom);
      expect(directiveForTesting.embeddedViewRef.reattach).toHaveBeenCalledWith();
    });
  });

});
