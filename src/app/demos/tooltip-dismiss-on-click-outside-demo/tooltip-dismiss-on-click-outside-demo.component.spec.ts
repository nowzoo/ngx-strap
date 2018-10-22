import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDismissOnClickOutsideDemoComponent } from './tooltip-dismiss-on-click-outside-demo.component';

describe('TooltipDismissOnClickOutsideDemoComponent', () => {
  let component: TooltipDismissOnClickOutsideDemoComponent;
  let fixture: ComponentFixture<TooltipDismissOnClickOutsideDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDismissOnClickOutsideDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDismissOnClickOutsideDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
