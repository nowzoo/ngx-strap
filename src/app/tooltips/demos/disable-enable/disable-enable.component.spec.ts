import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableEnableComponent } from './disable-enable.component';

describe('DisableEnableComponent', () => {
  let component: DisableEnableComponent;
  let fixture: ComponentFixture<DisableEnableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableEnableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
