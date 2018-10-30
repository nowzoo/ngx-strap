import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseEventsDemoComponent } from './collapse-events-demo.component';

describe('CollapseEventsDemoComponent', () => {
  let component: CollapseEventsDemoComponent;
  let fixture: ComponentFixture<CollapseEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
