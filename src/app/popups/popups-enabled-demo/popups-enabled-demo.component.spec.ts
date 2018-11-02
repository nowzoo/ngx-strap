import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsEnabledDemoComponent } from './popups-enabled-demo.component';

describe('PopupsEnabledDemoComponent', () => {
  let component: PopupsEnabledDemoComponent;
  let fixture: ComponentFixture<PopupsEnabledDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsEnabledDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsEnabledDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
