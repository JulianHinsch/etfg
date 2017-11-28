import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Http } from '@angular/Http';
import { GetViewsByFirmIdService } from '../services/firms/get-views-by-firm-id.service';

export class FirmViewsSource extends DataSource<any> {

    constructor(private firmId: number, private service: GetViewsByFirmIdService) {
        super();
    }

    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getViewsById(this.firmId).subscribe(response => {
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

    disconnect(){}
}