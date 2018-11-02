import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsBasicDemoComponent } from './modals-basic-demo.component';

describe('ModalsBasicDemoComponent', () => {
  let component: ModalsBasicDemoComponent;
  let fixture: ComponentFixture<ModalsBasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsBasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
