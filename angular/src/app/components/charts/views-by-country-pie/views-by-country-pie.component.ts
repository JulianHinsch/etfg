import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../auth/auth.service';

export interface Slice {
    label: string,
    value: number
}

@Component({
  selector: 'views-by-country-pie',
  templateUrl: './views-by-country-pie.component.html',
  styleUrls: ['./views-by-country-pie.component.scss']
})
export class ViewsByCountryPieComponent implements AfterViewInit {

    pieChartData: object; 

    constructor(private http: HttpClient, private auth: AuthService) {}

    getData(): Observable<Slice[]> {
        const requestUrl = `${environment.apiBaseUrl}/api/viewsbycountry?datafilter=${this.auth.getDataFilter()}`;
        return this.http.get<Slice[]>(requestUrl);
      }
    
    ngAfterViewInit() {
        this.getData().subscribe(data => {
            let dataTable = [];
            dataTable.push(['Country','Views'])
            data.forEach(element => {
                dataTable.push([element.label,element.value]);
            });
            this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea: {
                        left:10,
                        top:0,
                        width:'90%',
                        height:'90%'
                    },
                    legend: {alignment: 'center'},
                    sliceVisibilityThreshold: 0.01
                },
            };
        });
    }
}
    
    