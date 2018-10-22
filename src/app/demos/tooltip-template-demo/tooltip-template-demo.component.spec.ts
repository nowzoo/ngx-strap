import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTemplateDemoComponent } from './tooltip-template-demo.component';

describe('TooltipTemplateDemoComponent', () => {
  let component: TooltipTemplateDemoComponent;
  let fixture: ComponentFixture<TooltipTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
