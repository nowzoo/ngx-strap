import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let el;
  let elementRef: any;
  let directive: TooltipDirective;
  let directiveForTesting: any;
  let jQuery: any;
  let jqEl;

  beforeEach(() => {
    jqEl = {tooltip: jasmine.createSpy(), on: jasmine.createSpy().and.callFake((type, f) => {
      const listener = (e) => {
        f(e);
      };
      el.addEventListener(type, listener);
    })};
    jQuery = window['jQuery'] = jasmine.createSpy().and.returnValue(jqEl);
    el =  document.createElement('span');
    elementRef = {nativeElement: el};
    directive = new TooltipDirective({}, elementRef);
    directiveForTesting = directive;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(directiveForTesting, 'updateOnChange').and.callFake(() => {});
    });
    it('should call super', () => {
      directive.ngOnInit();
      expect(directiveForTesting.$el).toBe(jqEl);
    });
    it('should call updateOnChange', () => {
      directive.ngOnInit();
      expect(directiveForTesting.updateOnChange).toHaveBeenCalled();
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
    it('should handle options input', () => {
      directive.options = {animation: false};
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).toHaveBeenCalledWith({animation: false});
    });
    it('should handle ngxStrapTooltip input', () => {
      directive.options = {animation: false};
      directive.ngxStrapTooltip = 'foo';
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).toHaveBeenCalledWith({animation: false, title: 'foo'});
    });
    it('should handle no inputs', () => {
      directive.options = null;
      directive.ngxStrapTooltip = null;
      directiveForTesting.updateOnChange();
      expect(jqEl.tooltip).toHaveBeenCalledWith({});
    });
  });
});
