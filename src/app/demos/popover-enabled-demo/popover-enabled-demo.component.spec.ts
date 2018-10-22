import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverEnabledDemoComponent } from './popover-enabled-demo.component';

describe('PopoverEnabledDemoComponent', () => {
  let component: PopoverEnabledDemoComponent;
  let fixture: ComponentFixture<PopoverEnabledDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEnabledDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverEnabledDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
