import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsShowDemoComponent } from './popups-show-demo.component';

describe('PopupsShowDemoComponent', () => {
  let component: PopupsShowDemoComponent;
  let fixture: ComponentFixture<PopupsShowDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsShowDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsShowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
