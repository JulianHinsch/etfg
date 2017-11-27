import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetFirmsByTickerService {

  constructor(private http: Http) {}

  public getFirmsByTicker(ticker) {
    return this.http.get(`${environment.apiBaseUrl}/api/products/firms/${ticker}`);
  }
}
