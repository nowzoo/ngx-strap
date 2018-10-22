import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverShowHideToggleDemoComponent } from './popover-show-hide-toggle-demo.component';

describe('PopoverShowHideToggleDemoComponent', () => {
  let component: PopoverShowHideToggleDemoComponent;
  let fixture: ComponentFixture<PopoverShowHideToggleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverShowHideToggleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverShowHideToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
