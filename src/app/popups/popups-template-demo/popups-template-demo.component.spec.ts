import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsTemplateDemoComponent } from './popups-template-demo.component';

describe('PopupsTemplateDemoComponent', () => {
  let component: PopupsTemplateDemoComponent;
  let fixture: ComponentFixture<PopupsTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
