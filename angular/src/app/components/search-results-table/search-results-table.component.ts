import { Component, OnInit, Input } from '@angular/core';

import { SearchResultsSource } from '../../data-sources/search-results';

import { GetSearchResultsService } from '../../services/search/get-search-results.service';

@Component({
  selector: 'search-results-table',
  templateUrl: './search-results-table.component.html',
  styleUrls: ['./search-results-table.component.scss']
})
export class SearchResultsTableComponent implements OnInit {
  @Input() term: string;
  @Input() header: string;
  private dataSource: SearchResultsSource;

  displayedColumns = ['num','link'];

  constructor(private service: GetSearchResultsService) {}

  ngOnInit() {
    this.dataSource = new SearchResultsSource(this.service, this.term);
  }
}