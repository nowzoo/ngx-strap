import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipMinimalDemoComponent } from './tooltip-minimal-demo.component';

describe('TooltipMinimalDemoComponent', () => {
  let component: TooltipMinimalDemoComponent;
  let fixture: ComponentFixture<TooltipMinimalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipMinimalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipMinimalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
