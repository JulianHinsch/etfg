import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {

  displayedColumns = ['id', 'name', 'views'];  
  public dataSource: CountriesDataSource;
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.dataSource = new CountriesDataSource(this.countriesService);
  }

  filterChange(text: string) {
    this.dataSource.changeFilter(text);
  }

}

export class CountriesDataSource extends DataSource<any> {

  filterChange = new BehaviorSubject<string>('');

  constructor(private countriesService: CountriesService) {
    super();
  }

  changeFilter(text: string) {
    this.filterChange.next(text.toUpperCase());
  }

  connect(): Observable<any[]> {
    return Observable.create(subscriber => {
      this.countriesService.getCountries().subscribe(response => {
        let data = response.json();
        if(data && data.countries) {
          data = data.countries;
        } else if (data.data && data.data.countries) {
          data = data.data.countries;
        }
        let count = 1;
        data.map(row => {
          row.rowNumber = (count+'.');
          count++;
          return row;
        });
        subscriber.next(data);
        this.filterChange.debounceTime(500).distinctUntilChanged().subscribe(filter => {
          if (filter === '' || !filter) {
            return subscriber.next(data);
          }
          let copy = data.slice();
          copy = copy.filter(row => {
            if (!row.name) return false;
            const name = row.name.toUpperCase();
            return name.indexOf(filter) > -1;
          });
          subscriber.next(copy);
        });
      });
    });
  }
  disconnect() {}
}