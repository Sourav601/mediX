import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private _http: HttpClient) {}

  postData(
    name: any,
    email: any,
    mobileNo: any,
    password: any,
    pincode: any,
    address: any
  ): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
    };

    const body = {
      name,
      email,
      mobileNo,
      password,
      pincode,
      address,
    };

    const url = environment.url + 'signUp';
    return this._http.post<any>(url, body, {
      headers,
    });
  }
}
