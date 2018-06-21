import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRouteComponent } from './tabs-route.component';

describe('TabsRouteComponent', () => {
  let component: TabsRouteComponent;
  let fixture: ComponentFixture<TabsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
