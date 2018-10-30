import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPlaceholderComponent } from './popup-placeholder.component';

describe('PopupPlaceholderComponent', () => {
  let component: PopupPlaceholderComponent;
  let fixture: ComponentFixture<PopupPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
