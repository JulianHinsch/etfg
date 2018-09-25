import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResults {
  
    private pageTitle = 'Search';
    dataFilter: string = this.auth.getDataFilter();
    
    constructor(private auth: AuthService) {
        document.title = 'ETFG | Search';
    }
    
}