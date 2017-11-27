import { TestBed, inject } from '@angular/core/testing';

import { GetProductInfoByTickerService } from './get-product-info-by-ticker.service';

describe('GetProductInfoByTickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProductInfoByTickerService]
    });
  });

  it('should be created', inject([GetProductInfoByTickerService], (service: GetProductInfoByTickerService) => {
    expect(service).toBeTruthy();
  }));
});
