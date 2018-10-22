import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDelayDemoComponent } from './tooltip-delay-demo.component';

describe('TooltipDelayDemoComponent', () => {
  let component: TooltipDelayDemoComponent;
  let fixture: ComponentFixture<TooltipDelayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDelayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDelayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
