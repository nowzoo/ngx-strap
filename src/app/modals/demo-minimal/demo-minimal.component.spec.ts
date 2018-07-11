import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMinimalComponent } from './demo-minimal.component';

describe('DemoMinimalComponent', () => {
  let component: DemoMinimalComponent;
  let fixture: ComponentFixture<DemoMinimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
