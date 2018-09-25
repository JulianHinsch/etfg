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
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../auth/auth.service';
  
@Component({
    selector: 'firms-table',
    templateUrl: './firms-table.component.html',
    styleUrls: ['./firms-table.component.scss']
})
export class FirmsTable implements AfterViewInit {
    displayedColumns = ['name', 'users', 'views'];
    dataSource = new MatTableDataSource();

    resultsLength = 0;
    isLoadingResults = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient, private auth: AuthService) {}

    ngAfterViewInit() {

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
                setTimeout(()=>this.isLoadingResults = true);
                return this.getFirms(this.paginator.pageIndex, this.sort.active, this.sort.direction);
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

    getFirms( page: number, sort: string, order: string): Observable<FirmsApi> {
        const requestUrl = `${environment.apiBaseUrl}/api/firms?datafilter=${this.auth.getDataFilter()}&page=${page+1}&sort=${sort}&order=${order}`;
        return this.http.get<FirmsApi>(requestUrl);
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

