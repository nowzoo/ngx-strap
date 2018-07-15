import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVarsComponent } from './demo-vars.component';

describe('DemoVarsComponent', () => {
  let component: DemoVarsComponent;
  let fixture: ComponentFixture<DemoVarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
