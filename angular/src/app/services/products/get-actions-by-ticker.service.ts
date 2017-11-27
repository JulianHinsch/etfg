import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetActionsByTickerService {

  constructor(private http: Http) {}

  public getActionsByTicker(ticker) {
    return this.http.get(`${environment.apiBaseUrl}/api/products/actions/${ticker}`);
  }

}
