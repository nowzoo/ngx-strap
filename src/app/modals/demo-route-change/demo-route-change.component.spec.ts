import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteChangeComponent } from './demo-route-change.component';

describe('DemoRouteChangeComponent', () => {
  let component: DemoRouteChangeComponent;
  let fixture: ComponentFixture<DemoRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
