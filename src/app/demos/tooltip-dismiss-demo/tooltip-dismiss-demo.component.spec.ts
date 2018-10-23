import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDismissDemoComponent } from './tooltip-dismiss-demo.component';

describe('TooltipDismissDemoComponent', () => {
  let component: TooltipDismissDemoComponent;
  let fixture: ComponentFixture<TooltipDismissDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDismissDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDismissDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
