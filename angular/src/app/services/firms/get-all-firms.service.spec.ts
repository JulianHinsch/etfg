import { TestBed, inject } from '@angular/core/testing';

import { GetAllFirmsService } from './get-all-firms.service';

describe('GetAllFirmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllFirmsService]
    });
  });

  it('should be created', inject([GetAllFirmsService], (service: GetAllFirmsService) => {
    expect(service).toBeTruthy();
  }));
});
