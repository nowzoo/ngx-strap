import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPillsDemoComponent } from './tabs-pills-demo.component';

describe('TabsPillsDemoComponent', () => {
  let component: TabsPillsDemoComponent;
  let fixture: ComponentFixture<TabsPillsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPillsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPillsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
