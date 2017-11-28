import { EventEmitter, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetFirmsByTickerService } from '../services/products/get-firms-by-ticker.service';

export class ProductFirmsSource extends DataSource<any> {
    @Output() 
    complete: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private ticker: string, private service: GetFirmsByTickerService) {
        super();
    }
      
    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getFirmsByTicker(this.ticker).subscribe(response => {
                let data = response.json();
                let count = 1;
                data.map(row => {
                    row.rowNumber = (count+'.');
                    count++;
                    return row;
                });
                this.complete.emit(true);
                subscriber.next(data);
            });
        });
    }
    
    disconnect() {}
}