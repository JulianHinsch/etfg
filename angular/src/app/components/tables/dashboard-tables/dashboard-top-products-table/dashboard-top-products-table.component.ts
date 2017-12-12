import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../auth/auth.service';

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

@Component({
  selector: 'dashboard-top-products-table',
  templateUrl: './dashboard-top-products-table.component.html',
  styleUrls: ['./dashboard-top-products-table.component.scss']
})
export class DashboardTopProductsTableComponent {
    displayedColumns = ['ticker', 'name', 'views'];
    dataSource = new MatTableDataSource();

    resultsLength = 0;
    isLoadingResults = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient, private auth: AuthService) {}

    getProducts( page: number, sort: string, order: string): Observable<ProductsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/products?datafilter=${this.auth.getDataFilter()}&page=${page+1}&sort=${sort}&order=${order}`;
        return this.http.get<ProductsApi>(requestUrl);
    }

    ngAfterViewInit() {

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
                setTimeout(()=>this.isLoadingResults = true);
                return this.getProducts(this.paginator.pageIndex, this.sort.active, this.sort.direction);
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
