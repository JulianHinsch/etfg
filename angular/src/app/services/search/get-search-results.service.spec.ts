import { TestBed, inject } from '@angular/core/testing';

import { GetSearchResultsService } from './get-search-results.service';

describe('GetSearchResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSearchResultsService]
    });
  });

  it('should be created', inject([GetSearchResultsService], (service: GetSearchResultsService) => {
    expect(service).toBeTruthy();
  }));
});
