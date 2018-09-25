import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsTable } from './search-results-table.component';

describe('SearchResultsTable', () => {
  let component: SearchResultsTable;
  let fixture: ComponentFixture<SearchResultsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
