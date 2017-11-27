import { TestBed, inject } from '@angular/core/testing';

import { GetViewsByFirmIdService } from './get-views-by-firm-id.service';

describe('GetViewsByFirmIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetViewsByFirmIdService]
    });
  });

  it('should be created', inject([GetViewsByFirmIdService], (service: GetViewsByFirmIdService) => {
    expect(service).toBeTruthy();
  }));
});
