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
  selector: 'product-firms-table',
  templateUrl: './product-firms-table.component.html',
  styleUrls: ['./product-firms-table.component.scss']
})
export class ProductFirmsTableComponent implements AfterViewInit {
  @Input() ticker: string;

  displayedColumns = ['name', 'users', 'views'];
  connection: FirmsConnection | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.connection = new FirmsConnection(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
            setTimeout(()=>this.isLoadingResults = true);
            return this.connection!.getFirms(this.ticker, this.paginator.pageIndex, this.sort.active, this.sort.direction);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.total;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }
}

export interface FirmsApi {
  items: Firm[];
  total: number;
}

export interface Firm {
  name: string;
  users: string;
  views: number;
}

export class FirmsConnection {
  constructor(private http: HttpClient) {}

  //call the api with a page number, sort field, and sort order(asc/desc)
  getFirms( ticker: string, page: number, sort: string, order: string): Observable<FirmsApi> {
    const requestUrl = `${environment.apiBaseUrl}/api/products/firms/${ticker}?page=${page+1}&sort=${sort}&order=${order}`;
    return this.http.get<FirmsApi>(requestUrl);
  }
}
