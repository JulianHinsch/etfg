import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { GetAllFirmsService } from '../services/firms/get-all-firms.service';

export class FirmsSource extends DataSource<any> {
    private firmId: number;

    constructor(private service: GetAllFirmsService) {
        super();
    }

    connect(): Observable<any[]> {
        return Observable.create(subscriber => {
            this.service.getAll().subscribe(data => {
                let firmsData = JSON.parse(data.text());
                console.log(firmsData);
                if(firmsData.data) {
                    firmsData = firmsData.data.firms;
                }
                let count = 1;
                firmsData = firmsData.map((el)=>{
                    el.rowNumber=(count+'.');
                    count++;
                    return el;
                });
                subscriber.next(firmsData);
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