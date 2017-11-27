import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { FpComboService } from '../services/fp-combo/fp-combo.service';

export class FpComboSource extends DataSource<any> {
    private firmId: number;

    constructor(private service: FpComboService, private id: number, private ticker: string) {
        super();
    }

    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getFpCombo(this.id,this.ticker).subscribe(response => {
                let data = response.json();
                let count = 1;
                data.map(row => {
                    row.rowNumber = (count+'.');
                    count++;
                    //portfolio
                    let arr = [];
                    let dict = JSON.parse(row.portfolio);
                    for (let key in dict) {
                        let percentage = dict[key];
                        percentage = percentage.toString();
                        percentage = percentage.replace(/"/g,"");
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
                subscriber.next(data);
            });
        });
    }

    disconnect() {}

    /*
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    */
}