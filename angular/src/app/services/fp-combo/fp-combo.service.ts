import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class FpComboService {

    constructor( private http: Http ) { }
    
    public getFpCombo(id,ticker) {
        return this.http.get(`${environment.apiBaseUrl}/api/products/${ticker}/firms/${id}`);
    }
}

