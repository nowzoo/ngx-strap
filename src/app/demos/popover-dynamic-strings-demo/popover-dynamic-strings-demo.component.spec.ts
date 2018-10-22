import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDynamicStringsDemoComponent } from './popover-dynamic-strings-demo.component';

describe('PopoverDynamicStringsDemoComponent', () => {
  let component: PopoverDynamicStringsDemoComponent;
  let fixture: ComponentFixture<PopoverDynamicStringsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDynamicStringsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDynamicStringsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
