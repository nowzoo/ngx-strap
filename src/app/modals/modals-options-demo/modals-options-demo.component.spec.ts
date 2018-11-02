import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsOptionsDemoComponent } from './modals-options-demo.component';

describe('ModalsOptionsDemoComponent', () => {
  let component: ModalsOptionsDemoComponent;
  let fixture: ComponentFixture<ModalsOptionsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsOptionsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsOptionsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
