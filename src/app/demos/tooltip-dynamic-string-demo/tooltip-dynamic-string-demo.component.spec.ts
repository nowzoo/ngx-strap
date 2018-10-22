import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDynamicStringDemoComponent } from './tooltip-dynamic-string-demo.component';

describe('TooltipDynamicStringDemoComponent', () => {
  let component: TooltipDynamicStringDemoComponent;
  let fixture: ComponentFixture<TooltipDynamicStringDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDynamicStringDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDynamicStringDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
