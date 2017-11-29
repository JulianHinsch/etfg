import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { GetActionsByFirmIdService } from '../services/firms/get-actions-by-firm-id.service';

export class FirmActionsSource extends DataSource<any> {
    
    constructor(private firmId: number, private service: GetActionsByFirmIdService) {
        super();
    }

    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getActionsById(this.firmId).subscribe(response => {
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
                    percentage = percentage.replace(/,/g,'.')
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

    disconnect(){}
}