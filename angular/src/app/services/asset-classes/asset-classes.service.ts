import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AssetClassesService {

  constructor( private http: Http ) { }

  getFirms() {
    return this.http.get(`${environment.apiBaseUrl}/api/assetclasses`);
  }
}

