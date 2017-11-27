import { TestBed, inject } from '@angular/core/testing';

import { IssuersService } from './issuers.service';

describe('IssuersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuersService]
    });
  });

  it('should be created', inject([IssuersService], (service: IssuersService) => {
    expect(service).toBeTruthy();
  }));
});
