import { TestBed, inject } from '@angular/core/testing';

import { GetActionsByTickerService } from './get-actions-by-ticker.service';

describe('GetActionsByTickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetActionsByTickerService]
    });
  });

  it('should be created', inject([GetActionsByTickerService], (service: GetActionsByTickerService) => {
    expect(service).toBeTruthy();
  }));
});
