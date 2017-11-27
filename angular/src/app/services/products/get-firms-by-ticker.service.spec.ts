import { TestBed, inject } from '@angular/core/testing';

import { GetFirmsByTickerService } from './get-firms-by-ticker.service';

describe('GetFirmsByTickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFirmsByTickerService]
    });
  });

  it('should be created', inject([GetFirmsByTickerService], (service: GetFirmsByTickerService) => {
    expect(service).toBeTruthy();
  }));
});
