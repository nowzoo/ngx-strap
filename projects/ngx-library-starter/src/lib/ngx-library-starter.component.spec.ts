import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibraryStarterComponent } from './ngx-library-starter.component';
import { NgxLibraryStarterService } from './ngx-library-starter.service';

describe('NgxLibraryStarterComponent', () => {
  let component: NgxLibraryStarterComponent;
  let fixture: ComponentFixture<NgxLibraryStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLibraryStarterComponent ],
      providers: [{provide: NgxLibraryStarterService, useValue: {hello: 'Foo'}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLibraryStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
