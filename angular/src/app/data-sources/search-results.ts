import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetSearchResultsService } from '../services/search/get-search-results.service';

export class SearchResultsSource extends DataSource<any> {
    
    filterChange = new BehaviorSubject<string>('');
    
    constructor(private service: GetSearchResultsService, private term: string) {
        super();
    }
    
    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getSearchResults(this.term).subscribe(response => {
                let data = response.json();
                let count = 1;
                data.map(row => {
                    row.rowNumber = (count+'.');
                    count++;
                    return row;
                });
                subscriber.next(data);
            });
        });
    }
    
    disconnect() {}
}