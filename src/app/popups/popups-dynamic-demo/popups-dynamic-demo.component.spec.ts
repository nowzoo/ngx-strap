import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsDynamicDemoComponent } from './popups-dynamic-demo.component';

describe('PopupsDynamicDemoComponent', () => {
  let component: PopupsDynamicDemoComponent;
  let fixture: ComponentFixture<PopupsDynamicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsDynamicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsDynamicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
