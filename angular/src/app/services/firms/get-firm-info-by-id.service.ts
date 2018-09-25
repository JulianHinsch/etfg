import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetFirmInfoByIdService {

    constructor( private http: Http ) { }

    public getInfoById(id) {
        return this.http.get(`${environment.apiBaseUrl}/api/firms/${id}`);
    }
    
}

