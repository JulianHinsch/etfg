import { TestBed, inject } from '@angular/core/testing';

import { GetActionsByFirmIdService } from './get-actions-by-firm-id.service';

describe('GetActionsByFirmIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetActionsByFirmIdService]
    });
  });

  it('should be created', inject([GetActionsByFirmIdService], (service: GetActionsByFirmIdService) => {
    expect(service).toBeTruthy();
  }));
});
