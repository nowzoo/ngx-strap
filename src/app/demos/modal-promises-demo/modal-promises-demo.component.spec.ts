import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromisesDemoComponent } from './modal-promises-demo.component';

describe('ModalPromisesDemoComponent', () => {
  let component: ModalPromisesDemoComponent;
  let fixture: ComponentFixture<ModalPromisesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPromisesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPromisesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
