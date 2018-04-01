import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { endpoint, httpOptions } from '../../app.endpoints';

import { IAuth } from '../../home/home.interface';

@Injectable()
export class AuthService {

  private url = endpoint;
  private authed: boolean = false;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }


  login(creds) {
    return this._http.post<IAuth>(this.url + '/api/auth/login', creds, httpOptions);
  }

  logout() {
    return this._http.post(this.url + '/api/auth/logout', null, httpOptions);
  }

  register(user) {
    return this._http.post<IAuth>(this.url + '/api/auth/register', user, httpOptions);
  }

  is_authed() {
    return this._http.get<IAuth>(this.url + '/api/auth/profile', httpOptions);
  }

}
