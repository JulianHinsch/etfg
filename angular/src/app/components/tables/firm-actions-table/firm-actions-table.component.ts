import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
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

@Component({
    selector: 'firm-actions-table',
    templateUrl: './firm-actions-table.component.html',
    styleUrls: ['./firm-actions-table.component.scss']
})
export class FirmActionsTable implements AfterViewInit {
    @Input() firmId: number;

    displayedColumns = ['date','location','type','portfolio'];
    connection: FirmActionsConnection | null;
    dataSource = new MatTableDataSource();
  
    resultsLength = 0;
    isLoadingResults = false;

    isNA(pair) {
        if(pair.ticker==="" || pair.percentage==="%") {
            return true;
        } else {
            return false;
        }
    }
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(private http: HttpClient) {}
  
    ngAfterViewInit() {
      this.connection = new FirmActionsConnection(this.http);
  
      // If the user changes the sort order, reset back to the first page.
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
                setTimeout(()=>this.isLoadingResults = true);
                return this.connection!.getActions(this.firmId, this.paginator.pageIndex, this.sort.active, this.sort.direction);
            }),
            map(data => {
                // Flip flag to show that loading has finished.
                this.isLoadingResults = false;
                this.resultsLength = data.total;
                //modify data here

                console.log(data.items);

                data.items.map(row => {
                    let arr = [];
                    let dict = JSON.parse(row.portfolio);
                    for (let key in dict) {
                        let percentage = dict[key];
                        percentage = percentage.toString();
                        percentage = percentage.replace(/"/g,"");
                        percentage = percentage.replace(/,/g,'.');
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
  
export class FirmActionsConnection {
    constructor(private http: HttpClient) {}
  
    //call the api with a page number, sort field, and sort order(asc/desc)
    getActions(id: number, page: number, sort: string, order: string): Observable<ActionsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/firms/actions/${id}?page=${page+1}&sort=${sort}&order=${order}`;
        return this.http.get<ActionsApi>(requestUrl);
    }
}
  