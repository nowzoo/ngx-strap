import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInitiallyActiveComponent } from './demo-initially-active.component';

describe('DemoInitiallyActiveComponent', () => {
  let component: DemoInitiallyActiveComponent;
  let fixture: ComponentFixture<DemoInitiallyActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInitiallyActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInitiallyActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
