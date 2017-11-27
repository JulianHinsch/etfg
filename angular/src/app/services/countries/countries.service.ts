import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CountriesService {

  constructor( private http: Http ) { }

  getCountries() {
    return this.http.get(`${environment.apiBaseUrl}/api/ip-countries`);
  }
}
