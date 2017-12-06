import { Component, AfterViewInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

export interface Slice {
    label: string,
    value: number
}

export class ViewTypesConnection {
    constructor(private http: HttpClient) {}
    
    //call the api
    getData(): Observable<Slice[]> {
      const requestUrl = `${environment.apiBaseUrl}/api/viewtypes`;
      return this.http.get<Slice[]>(requestUrl);
    }
}

@Component({
  selector: 'types-of-views-pie',
  templateUrl: './types-of-views-pie.component.html',
  styleUrls: ['./types-of-views-pie.component.scss']
})
export class TypesOfViewsPieComponent implements AfterViewInit {
    
    pieChartData: object; 
    connection: ViewTypesConnection | null;

    constructor(private http: HttpClient) {}
    
    ngAfterViewInit() {
        this.connection = new ViewTypesConnection(this.http);        
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



