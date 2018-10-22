import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDismissDemoComponent } from './popover-dismiss-demo.component';

describe('PopoverDismissDemoComponent', () => {
  let component: PopoverDismissDemoComponent;
  let fixture: ComponentFixture<PopoverDismissDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDismissDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDismissDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
