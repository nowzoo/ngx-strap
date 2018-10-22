import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverEventsDemoComponent } from './popover-events-demo.component';

describe('PopoverEventsDemoComponent', () => {
  let component: PopoverEventsDemoComponent;
  let fixture: ComponentFixture<PopoverEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
