import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetAllFirmsService {

  constructor( private http: Http) {}

  public getAll() {
    return this.http.get(`${environment.apiBaseUrl}/api/firms`);
  }

}
