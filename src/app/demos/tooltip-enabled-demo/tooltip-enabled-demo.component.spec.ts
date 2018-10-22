import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipEnabledDemoComponent } from './tooltip-enabled-demo.component';

describe('TooltipEnabledDemoComponent', () => {
  let component: TooltipEnabledDemoComponent;
  let fixture: ComponentFixture<TooltipEnabledDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipEnabledDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipEnabledDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
