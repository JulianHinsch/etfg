import { Component, AfterViewInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

export interface Slice {
    label: string,
    value: number
}

export class ViewsByTypeConnection {
    constructor(private http: HttpClient) {}
    
    //call the api
    getData(): Observable<Slice[]> {
      const requestUrl = `${environment.apiBaseUrl}/api/viewsbytype`;
      return this.http.get<Slice[]>(requestUrl);
    }
}

@Component({
  selector: 'views-by-type-pie',
  templateUrl: './views-by-type-pie.component.html',
  styleUrls: ['./views-by-type-pie.component.scss']
})
export class ViewsByTypePieComponent implements AfterViewInit {
    
    pieChartData: object; 
    connection: ViewsByTypeConnection | null;

    constructor(private http: HttpClient) {}
    
    ngAfterViewInit() {
        this.connection = new ViewsByTypeConnection(this.http);        
        this.connection.getData().subscribe(data => {
            console.log(data);
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
}



