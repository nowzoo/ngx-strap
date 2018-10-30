import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsListGroupDemoComponent } from './tabs-list-group-demo.component';

describe('TabsListGroupDemoComponent', () => {
  let component: TabsListGroupDemoComponent;
  let fixture: ComponentFixture<TabsListGroupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsListGroupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsListGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
