import {Component, Input, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'product-actions-table',
    templateUrl: './product-actions-table.component.html',
    styleUrls: ['./product-actions-table.component.scss']
})
export class ProductActionsTableComponent implements AfterViewInit {
    @Input() ticker: string;

    displayedColumns = ['date','location','type','portfolio'];
    connection: ProductActionsConnection | null;
    dataSource = new MatTableDataSource();
    resultsLength = 0;
    isLoadingResults = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient) {}

    ngAfterViewInit() {
    this.connection = new ProductActionsConnection(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
        startWith({}),
        switchMap(() => {
            setTimeout(()=>this.isLoadingResults = true);
            return this.connection!.getActions(this.ticker, this.paginator.pageIndex, this.sort.active, this.sort.direction);
        }),
        map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.resultsLength = data.total;
            //modify data here
            data.items.map(row => {
                let arr = [];
                let dict = JSON.parse(row.portfolio);
                for (let key in dict) {
                    let percentage = dict[key];
                    percentage = percentage.toString();
                    percentage = percentage.replace(/"/g,"");
                    percentage = percentage.replace(/,/g,'.')
                    percentage = percentage.concat('%');
                    let pair = {
                        ticker: key.toUpperCase(),
                        percentage: percentage
                    }
                    arr.push(pair);
                }
                row.portfolio = arr;
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
}

export interface ActionsApi {
    items: Action[];
    total: number;
}

export interface Action {
    date: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    type: string;
    portfolio: any;
}

export class ProductActionsConnection {
    constructor(private http: HttpClient) {}

    //call the api with a page number, sort field, and sort order(asc/desc)
    getActions(ticker: string, page: number, sort: string, order: string): Observable<ActionsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/products/actions/${ticker}?page=${page+1}&sort=${sort}&order=${order}`;
        return this.http.get<ActionsApi>(requestUrl);
    }
}