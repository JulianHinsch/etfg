import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetViewsByFirmIdService {

  constructor( private http: Http ) {}
  
  public getViewsById(id) {
    return this.http.get(`${environment.apiBaseUrl}/api/firms/views/${id}`)
  }
}