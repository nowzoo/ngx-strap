import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTemplatesDemoComponent } from './popover-templates-demo.component';

describe('PopoverTemplatesDemoComponent', () => {
  let component: PopoverTemplatesDemoComponent;
  let fixture: ComponentFixture<PopoverTemplatesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTemplatesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTemplatesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
