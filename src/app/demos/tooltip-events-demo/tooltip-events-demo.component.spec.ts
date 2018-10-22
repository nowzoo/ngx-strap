import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipEventsDemoComponent } from './tooltip-events-demo.component';

describe('TooltipEventsDemoComponent', () => {
  let component: TooltipEventsDemoComponent;
  let fixture: ComponentFixture<TooltipEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
