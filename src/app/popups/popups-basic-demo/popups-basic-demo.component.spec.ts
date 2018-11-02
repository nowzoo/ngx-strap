import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsBasicDemoComponent } from './popups-basic-demo.component';

describe('PopupsBasicDemoComponent', () => {
  let component: PopupsBasicDemoComponent;
  let fixture: ComponentFixture<PopupsBasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsBasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
