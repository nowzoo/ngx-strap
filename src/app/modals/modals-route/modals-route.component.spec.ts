import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsRouteComponent } from './modals-route.component';

describe('ModalsRouteComponent', () => {
  let component: ModalsRouteComponent;
  let fixture: ComponentFixture<ModalsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
