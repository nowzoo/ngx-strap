import { Directive, Renderer2, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Directive({
  selector: '[ngxStrapIsInvalid]'
})
export class NgxStrapIsInvalidDirective implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private renderer: Renderer2,
    private control: NgControl,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    combineLatest(this.control.statusChanges, this.control.valueChanges)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        if (this.control.invalid && this.control.touched) {
          this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
        }
      });
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
