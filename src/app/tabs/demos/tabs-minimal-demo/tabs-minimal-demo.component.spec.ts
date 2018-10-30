import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMinimalDemoComponent } from './tabs-minimal-demo.component';

describe('TabsMinimalDemoComponent', () => {
  let component: TabsMinimalDemoComponent;
  let fixture: ComponentFixture<TabsMinimalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsMinimalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsMinimalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
