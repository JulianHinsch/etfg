import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetActionsByFirmIdService {

  constructor( private http: Http) {}

  public getActionsById(id) {
    return this.http.get(`${environment.apiBaseUrl}/api/firms/actions/${id}`);
  }

}
