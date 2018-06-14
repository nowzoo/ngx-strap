import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsRouteComponent } from './tooltips-route.component';

describe('TooltipsRouteComponent', () => {
  let component: TooltipsRouteComponent;
  let fixture: ComponentFixture<TooltipsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
