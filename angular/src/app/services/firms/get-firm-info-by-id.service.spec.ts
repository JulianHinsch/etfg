import { TestBed, inject } from '@angular/core/testing';

import { GetFirmInfoByIdService } from './get-firm-info-by-id.service';

describe('GetFirmInfoByIdService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [GetFirmInfoByIdService]
        });
    });

    it('should be created', inject([GetFirmInfoByIdService], (service: GetFirmInfoByIdService) => {
        expect(service).toBeTruthy();
    }));
});
