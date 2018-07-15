import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHandleUpdateComponent } from './demo-handle-update.component';

describe('DemoHandleUpdateComponent', () => {
  let component: DemoHandleUpdateComponent;
  let fixture: ComponentFixture<DemoHandleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHandleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHandleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
