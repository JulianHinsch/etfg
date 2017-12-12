import { Input, Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../auth/auth.service';

export interface Slice {
    label: string,
    value: number
}

@Component({
  selector: 'views-by-type-pie',
  templateUrl: './views-by-type-pie.component.html',
  styleUrls: ['./views-by-type-pie.component.scss']
})
export class ViewsByTypePieComponent implements AfterViewInit {

    pieChartData: object;

    constructor(private ref: ChangeDetectorRef, private http: HttpClient, private auth: AuthService) {}

    ngAfterViewInit() {
        this.loadChartData();
    }

    loadChartData() {
        this.getData().subscribe(data => {
            let dataTable = [];
            dataTable.push(['Type','Count'])
            data.forEach(element => {
                dataTable.push([element.label,element.value]);
            });
            this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea:{
                        left:10,
                        top:0,
                        width:'90%',
                        height:'90%'
                    },
                    legend: {alignment: 'center'},
                },
            };
        });
    }

    getData(): Observable<Slice[]> {
        const requestUrl = `${environment.apiBaseUrl}/api/viewsbytype?datafilter=${this.auth.getDataFilter()}`;
        return this.http.get<Slice[]>(requestUrl);
    }
}



