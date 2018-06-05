import { TestBed, inject } from '@angular/core/testing';

import { NgxLibraryStarterService } from './ngx-library-starter.service';

describe('NgxLibraryStarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLibraryStarterService]
    });
  });

  it('should be created', inject([NgxLibraryStarterService], (service: NgxLibraryStarterService) => {
    expect(service).toBeTruthy();
  }));
  describe('hello get and set', () => {
    let service: NgxLibraryStarterService;
    beforeEach(() => {
      service = TestBed.get(NgxLibraryStarterService);
    });
    it('should be "World" to start', () => {
      expect(service.hello).toBe('World');
    });
    it('should allow us to set another name', () => {
      expect(service.hello).toBe('World');
      service.hello = 'Earth';
      expect(service.hello).toBe('Earth');
    });
  });
});
