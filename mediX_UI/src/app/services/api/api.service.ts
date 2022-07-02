import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  post(body: Object, rel_url: string): Observable<any> {
    const url = environment.url + rel_url;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: '',
    };
    return this._http.post<any>(url, body, { headers });
  }

  get(rel_url: string): Observable<any> {
    const url = environment.url + rel_url;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: '',
    };
    return this._http.post<any>(url, { headers });
  }
}
