import { NgxStrapIsInvalidDirective } from './is-invalid.directive';
import { FormControl } from '@angular/forms';
import { fakeAsync, tick} from '@angular/core/testing';

describe('NgxStrapIsInvalidDirective', () => {
  let renderer;
  let control;
  let elementRef;
  let directive: NgxStrapIsInvalidDirective;
  beforeEach(() => {
    renderer = {addClass: jasmine.createSpy(), removeClass: jasmine.createSpy()};
    control = new FormControl(null);
    elementRef = {nativeElement: {}};
    directive = new NgxStrapIsInvalidDirective(renderer, control, elementRef);
  });
  it('should create an instance', () => {

    expect(directive).toBeTruthy();
  });


  describe('ngOnInit', () => {
    it('should subscribe to value and status and add the according to both invalid & touched', () => {
      directive.ngOnInit();
      expect(renderer.addClass).not.toHaveBeenCalled();
      expect(renderer.removeClass).not.toHaveBeenCalled();
      control.markAsTouched();
      control.setValue('bbb');
      expect(renderer.removeClass).toHaveBeenCalledWith(elementRef.nativeElement, 'is-invalid');
      control.setErrors({foo: true});
      expect(renderer.addClass).toHaveBeenCalledWith(elementRef.nativeElement, 'is-invalid');
      control.setErrors(null);
    });
  });
  describe('ngOnDestroy()', () => {
    it('should unsub from the control', () => {
      directive.ngOnInit();
      expect(renderer.addClass).not.toHaveBeenCalled();
      expect(renderer.removeClass).not.toHaveBeenCalled();
      directive.ngOnDestroy();
      control.markAsTouched();
      control.setValue('bbb');
      expect(renderer.removeClass).not.toHaveBeenCalled();
      control.setErrors({foo: true});
      expect(renderer.addClass).not.toHaveBeenCalled();
    });
  });
});
