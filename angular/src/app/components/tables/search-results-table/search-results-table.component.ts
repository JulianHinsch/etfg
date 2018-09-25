import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

export interface ResultsApi {
    items: any[];
    total: number;
}

@Component({
  selector: 'search-results-table',
  templateUrl: './search-results-table.component.html',
  styleUrls: ['./search-results-table.component.scss']
})
export class SearchResultsTable implements OnInit {
  
    term: string;
    header: string;
    dataSource = new MatTableDataSource();
    resultsLength = 0;
    isLoadingResults = false;
    displayedColumns = ['link','type'];

    constructor(private auth: AuthService, private http: HttpClient, public route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.term = params.term;
            this.loadData();
        });
    }

    loadData() {
        merge()
            .pipe(
                startWith({}),
                switchMap(() => {
                    setTimeout(()=>this.isLoadingResults = true);
                    return this.getResults(this.term);
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.resultsLength = data.total;
                    //set header
                    if (this.resultsLength === 0) {
                        this.header = `No results found for "${this.term}".`
                    } else if (this.resultsLength === 1) {
                        this.header = `1 result for "${this.term}".`;
                    } else {
                        this.header = `${this.resultsLength} results for "${this.term}".`;
                    }
                    //format data
                    data.items.map(row => {
                        if(row.ticker) {
                            row.link = `${row.ticker} | ${row.name}`
                        } else {
                            row.link = `${row.name}`
                        }
                        return row;
                    });
                    return data.items;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    return observableOf([]);
                })
            ).subscribe(data => this.dataSource.data = data);
    }

    getResults( term: string): Observable<ResultsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/search/${term}?datafilter=${this.auth.getDataFilter()}`;
        return this.http.get<ResultsApi>(requestUrl);
    }
}
