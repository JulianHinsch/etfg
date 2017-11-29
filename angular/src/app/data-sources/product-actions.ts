import { EventEmitter, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetActionsByTickerService } from '../services/products/get-actions-by-ticker.service';

export class ProductActionsSource extends DataSource<any> {
    // @Output() 
    // complete: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private ticker: string, private service: GetActionsByTickerService) {
        super();
    }
      
    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getActionsByTicker(this.ticker).subscribe(response => {
                let data = response.json();
                let count = 1;
                data.map(row => {
                    row.rowNumber = (count+'.');
                    count++;
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
                    let location = {
                        address: row.address
                    }
                    return row;
                });
                subscriber.next(data);
            });
        });
    }
    
    disconnect() {}
}