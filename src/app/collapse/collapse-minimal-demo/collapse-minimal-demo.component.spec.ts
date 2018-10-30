import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseMinimalDemoComponent } from './collapse-minimal-demo.component';

describe('CollapseMinimalDemoComponent', () => {
  let component: CollapseMinimalDemoComponent;
  let fixture: ComponentFixture<CollapseMinimalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMinimalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseMinimalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
