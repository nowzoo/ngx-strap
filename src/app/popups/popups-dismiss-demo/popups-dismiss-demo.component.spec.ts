import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsDismissDemoComponent } from './popups-dismiss-demo.component';

describe('PopupsDismissDemoComponent', () => {
  let component: PopupsDismissDemoComponent;
  let fixture: ComponentFixture<PopupsDismissDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsDismissDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsDismissDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
