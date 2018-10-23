import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMinimalDemoComponent } from './modal-minimal-demo.component';

describe('ModalMinimalDemoComponent', () => {
  let component: ModalMinimalDemoComponent;
  let fixture: ComponentFixture<ModalMinimalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMinimalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMinimalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
