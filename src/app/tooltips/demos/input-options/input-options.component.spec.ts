import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOptionsComponent } from './input-options.component';

describe('InputOptionsComponent', () => {
  let component: InputOptionsComponent;
  let fixture: ComponentFixture<InputOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
