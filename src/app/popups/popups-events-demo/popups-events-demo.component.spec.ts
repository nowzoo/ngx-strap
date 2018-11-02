import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsEventsDemoComponent } from './popups-events-demo.component';

describe('PopupsEventsDemoComponent', () => {
  let component: PopupsEventsDemoComponent;
  let fixture: ComponentFixture<PopupsEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
