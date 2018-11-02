import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsPromisesDemoComponent } from './modals-promises-demo.component';

describe('ModalsPromisesDemoComponent', () => {
  let component: ModalsPromisesDemoComponent;
  let fixture: ComponentFixture<ModalsPromisesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsPromisesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsPromisesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
