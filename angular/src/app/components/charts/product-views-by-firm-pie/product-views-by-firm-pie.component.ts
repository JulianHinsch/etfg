import { Component, Input, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

export interface Slice {
    label: string,
    value: number
}

export class ProductViewsByFirmConnection {
    constructor(private http: HttpClient) {}
    
    //call the api
    getData(ticker): Observable<Slice[]> {
      const requestUrl = `${environment.apiBaseUrl}/api/viewsbyfirm/${ticker}`;
      return this.http.get<Slice[]>(requestUrl);
    }
}

@Component({
  selector: 'product-views-by-firm-pie',
  templateUrl: './product-views-by-firm-pie.component.html',
  styleUrls: ['./product-views-by-firm-pie.component.scss']
})
export class ProductViewsByFirmPieComponent implements AfterViewInit {
    @Input() ticker: string;
  
    pieChartData: object; 
    connection: ProductViewsByFirmConnection | null;

    constructor(private http: HttpClient) {}
    
    ngAfterViewInit() {
        this.connection = new ProductViewsByFirmConnection(this.http);        
        this.connection.getData(this.ticker).subscribe(data => {
            let dataTable = [];
            dataTable.push(['Type','Views'])
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
                    sliceVisibilityThreshold: 0.02
                },
            };
        });
    }
}
