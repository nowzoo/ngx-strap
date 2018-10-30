import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPlainDemoComponent } from './tabs-plain-demo.component';

describe('TabsPlainDemoComponent', () => {
  let component: TabsPlainDemoComponent;
  let fixture: ComponentFixture<TabsPlainDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPlainDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPlainDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
