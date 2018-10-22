import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipShowHideToggleDemoComponent } from './tooltip-show-hide-toggle-demo.component';

describe('TooltipShowHideToggleDemoComponent', () => {
  let component: TooltipShowHideToggleDemoComponent;
  let fixture: ComponentFixture<TooltipShowHideToggleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipShowHideToggleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipShowHideToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
