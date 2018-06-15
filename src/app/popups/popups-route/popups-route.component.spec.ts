import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsRouteComponent } from './popups-route.component';

describe('PopupsRouteComponent', () => {
  let component: PopupsRouteComponent;
  let fixture: ComponentFixture<PopupsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
