import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetSearchResultsService {

  constructor(private http: Http) {}
  
  public getSearchResults(term) {
    return this.http.get(`${environment.apiBaseUrl}/api/search/${term}`);
  }
}

