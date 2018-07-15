import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoShowHideComponent } from './demo-show-hide.component';

describe('DemoShowHideComponent', () => {
  let component: DemoShowHideComponent;
  let fixture: ComponentFixture<DemoShowHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoShowHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
