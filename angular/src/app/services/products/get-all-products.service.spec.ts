import { TestBed, inject } from '@angular/core/testing';

import { GetAllProductsService } from './get-all-products.service';

describe('GetAllProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllProductsService]
    });
  });

  it('should be created', inject([GetAllProductsService], (service: GetAllProductsService) => {
    expect(service).toBeTruthy();
  }));
});
