import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalService,
        {provide: Router, useValue: {}}
      ]
    });
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
