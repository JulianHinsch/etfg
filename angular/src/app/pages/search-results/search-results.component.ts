import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import {Router} from '@angular/router';

import { GetSearchResultsService } from '../../services/search/get-search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  private subscription: Subscription;
  private pageTitle = 'Search';
  private term: string;
  private data: object;
  private noResults = false;
  public isLoaded = false;
  
  constructor(private route: ActivatedRoute, private service: GetSearchResultsService, public router: Router) {
    document.title = 'ETFG | Search';
    this.route.params.subscribe(params => this.term = params.term);
    this.subscription = this.service.getSearchResults(this.term).subscribe(response => {
      this.data = response.json();
      //route if exact match to ticker
      // if(this.data && this.data[0].ticker.toLowerCase()===this.term.toLowerCase()) {
      //   this.router.navigateByUrl(`/products/${this.term}`);
      // }
    });
  }

  ngOnInit() {
    setTimeout(()=>{this.isLoaded = true},1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}