import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsOptionsDemoComponent } from './popups-options-demo.component';

describe('PopupsOptionsDemoComponent', () => {
  let component: PopupsOptionsDemoComponent;
  let fixture: ComponentFixture<PopupsOptionsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsOptionsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsOptionsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
