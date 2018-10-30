import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEventsDemoComponent } from './dropdown-events-demo.component';

describe('DropdownEventsDemoComponent', () => {
  let component: DropdownEventsDemoComponent;
  let fixture: ComponentFixture<DropdownEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
