import { TestBed, inject } from '@angular/core/testing';

import { FpComboService } from './fp-combo.service';

describe('FpComboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FpComboService]
    });
  });

  it('should be created', inject([FpComboService], (service: FpComboService) => {
    expect(service).toBeTruthy();
  }));
});
