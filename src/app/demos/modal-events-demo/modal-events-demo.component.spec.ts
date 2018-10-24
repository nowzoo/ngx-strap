import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventsDemoComponent } from './modal-events-demo.component';

describe('ModalEventsDemoComponent', () => {
  let component: ModalEventsDemoComponent;
  let fixture: ComponentFixture<ModalEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
