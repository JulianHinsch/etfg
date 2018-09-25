import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetProductInfoByTickerService {

    constructor(private http: Http) {}

    public getInfoByTicker(ticker) {
        return this.http.get(`${environment.apiBaseUrl}/api/products/${ticker}`);
    }
}
