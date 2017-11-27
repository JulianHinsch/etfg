import { TestBed, inject } from '@angular/core/testing';

import { AssetClassesService } from './asset-classes.service';

describe('AssetClassesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetClassesService]
    });
  });

  it('should be created', inject([AssetClassesService], (service: AssetClassesService) => {
    expect(service).toBeTruthy();
  }));
});
