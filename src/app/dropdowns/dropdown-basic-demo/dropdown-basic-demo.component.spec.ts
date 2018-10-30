import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBasicDemoComponent } from './dropdown-basic-demo.component';

describe('DropdownBasicDemoComponent', () => {
  let component: DropdownBasicDemoComponent;
  let fixture: ComponentFixture<DropdownBasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
