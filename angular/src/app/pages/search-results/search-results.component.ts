import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

import { GetSearchResultsService } from '../../services/search/get-search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  private subscription: Subscription;
  private pageTitle = 'Search Results';
  private term: string;
  private data: object;
  public isLoaded = false;
  
  constructor(private route: ActivatedRoute, private service: GetSearchResultsService) {
    document.title = 'ETFG';
    this.route.params.subscribe(params => this.term = params.term);
    this.subscription = this.service.getSearchResults(this.term).subscribe(response => {
      const data = response.json();
      console.log(data);
      this.data = data;
      document.title = `ETFG | Search Results for ${this.term}`;
    });
  }

  ngOnInit() {
    setTimeout(()=>{this.isLoaded = true},1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}