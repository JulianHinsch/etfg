import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetAllProductsService } from '../services/products/get-all-products.service';

export class ProductsSource extends DataSource<any> {
    
    filterChange = new BehaviorSubject<string>('');
    
    constructor(private service: GetAllProductsService) {
        super();
    }
    
    changeFilter(text: string) {
        this.filterChange.next(text.toUpperCase());
    }
    
    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getAll().subscribe(response => {
                let data = response.json();
                if(data && data.products) {
                    data = data.products;
                } else if (data.data && data.data.products) {
                    data = data.data.products;
                }
                let count = 1;
                data.map(row => {
                    row.rowNumber = (count+'.');
                    count++;
                    row.ticker = row.ticker.toUpperCase();
                    return row;
                });
                subscriber.next(data);
                //filter
                this.filterChange.debounceTime(500).distinctUntilChanged().subscribe(filter => {
                    if (filter === '' || !filter) {
                        return subscriber.next(data);
                    }
                    let copy = data.slice();
                    copy = copy.filter(row => {
                        if (!row.name) return false;
                        const name = row.name.toUpperCase();
                        return name.indexOf(filter) > -1;
                    });
                    subscriber.next(copy);
                });
            });
        });
    }
    
    disconnect() {}
}