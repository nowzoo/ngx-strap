import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupAccordianComponent } from './list-group-accordian.component';

describe('ListGroupAccordianComponent', () => {
  let component: ListGroupAccordianComponent;
  let fixture: ComponentFixture<ListGroupAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
