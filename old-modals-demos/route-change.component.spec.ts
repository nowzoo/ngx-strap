import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChangeComponent } from './route-change.component';

describe('RouteChangeComponent', () => {
  let component: RouteChangeComponent;
  let fixture: ComponentFixture<RouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
