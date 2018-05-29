import { TestBed, inject } from '@angular/core/testing';

import { MyTestLibraryService } from './my-test-library.service';

describe('MyTestLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTestLibraryService]
    });
  });

  it('should be created', inject([MyTestLibraryService], (service: MyTestLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
