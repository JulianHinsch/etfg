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
  selector: 'firm-views-table',
  templateUrl: './firm-views-table.component.html',
  styleUrls: ['./firm-views-table.component.scss']
})
export class FirmViewsTableComponent implements AfterViewInit {
    @Input() firmId: number;

    displayedColumns = ['ticker','name','issuer','views'];
    connection: FirmViewedProductsConnection | null;
    dataSource = new MatTableDataSource();
    resultsLength = 0;
    isLoadingResults = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient) {}

    ngAfterViewInit() {
    this.connection = new FirmViewedProductsConnection(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
        startWith({}),
        switchMap(() => {
            this.isLoadingResults = true;
            return this.connection!.getProducts(this.firmId, this.paginator.pageIndex, this.sort.active, this.sort.direction);
        }),
        map(data => {
            console.log(data);
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

    export interface ProductsApi {
        items: Product[];
        total: number;
    }

    export interface Product {
        ticker: string;
        name: string;
        issuer: string;
        views: number;
    }

    export class FirmViewedProductsConnection {
        constructor(private http: HttpClient) {}

        //call the api with a page number, sort field, and sort order(asc/desc)
        getProducts( id: number, page: number, sort: string, order: string): Observable<ProductsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/firms/views/${id}?page=${page+1}&sort=${sort}&order=${order}`;
        return this.http.get<ProductsApi>(requestUrl);
    }
}